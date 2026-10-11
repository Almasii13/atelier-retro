#!/usr/bin/env python3
"""Calage automatique des textes sur des cotes d'encre relevées sur la référence.

  python3 lib/calage.py fiche.json [--tours 4]

La fiche contient  "cibles": {"sélecteur CSS": [x0, y0, x1, y1], ...}  (mm, page finie, encre visible).
Le script mesure l'encre de chaque sélecteur sur le rendu, corrige corps (hauteur), étirement horizontal
(largeur) et position, et écrit le résultat dans  "calage"  de la fiche. Les furigana (.rt) sont exclus
de la mesure de leur ligne ; ils suivent leur base.
"""
import argparse, io, json, math, pathlib, sys
import numpy as np
from PIL import Image
from playwright.sync_api import sync_playwright

RACINE = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(RACINE / "lib"))
import render  # noqa: E402

MM = 96 / 25.4
E = 4  # échelle de capture


def mesurer(nav, fiche, dossier, cibles):
    fp = fiche.get("fond_perdu", 3)
    L, H = render.format_fini(fiche)
    fic = dossier / ".calage.html"
    fic.write_text(render.construire_html(fiche, dossier, True), encoding="utf-8")
    pg = nav.new_page(viewport={"width": round((L + 2 * fp) * MM), "height": round((H + 2 * fp) * MM)}, device_scale_factor=E)
    pg.goto(fic.as_uri()); pg.wait_for_selector("body[data-pret='1']")
    pg.add_style_tag(content="html,body{background:transparent!important} body *{visibility:hidden!important;clip-path:none!important}"
                             " [data-m],[data-m] *{visibility:visible!important;background:transparent!important;outline:none!important;"
                             "-webkit-text-fill-color:#000!important;-webkit-text-stroke-width:0!important;box-shadow:none!important}"
                             " [data-m] .rt{visibility:hidden!important} [data-m].rt{visibility:visible!important}")
    res = {}
    for sel in cibles:
        pg.evaluate("s => document.querySelectorAll(s).forEach(e => e.dataset.m = 1)", sel)
        png = pg.screenshot(omit_background=True)
        pg.evaluate("s => document.querySelectorAll(s).forEach(e => delete e.dataset.m)", sel)
        a = np.asarray(Image.open(io.BytesIO(png)).convert("RGBA").getchannel("A"))
        ys, xs = np.where(a > 90)
        if not len(xs):
            res[sel] = None; continue
        x = (xs + .5) / E / MM - fp; y = (ys + .5) / E / MM - fp
        rep = cibles[sel].get("repere") if isinstance(cibles[sel], dict) else None
        if rep:  # cotes exprimées dans un repère tourné (ox, oy, angle CSS en degrés)
            ox, oy, ang = rep; t = math.radians(ang)
            u = (x - ox) * math.cos(t) + (y - oy) * math.sin(t)
            v = -(x - ox) * math.sin(t) + (y - oy) * math.cos(t)
            x, y = u, v
        res[sel] = [float(x.min()), float(y.min()), float(x.max()), float(y.max())]
    pg.close(); fic.unlink()
    return res


def caler(chemin, tours=4, tol=0.08):
    chemin = pathlib.Path(chemin).resolve()
    fiche = json.loads(chemin.read_text(encoding="utf-8"))
    cibles = fiche.get("cibles", {})
    cal = fiche.setdefault("calage", {})
    with sync_playwright() as p:
        nav = p.chromium.launch()
        for tour in range(tours):
            m = mesurer(nav, fiche, chemin.parent, cibles)
            pire = 0
            for sel, cib in cibles.items():
                tx0, ty0, tx1, ty1 = cib["bbox"] if isinstance(cib, dict) else cib
                bb = m[sel]
                if not bb:
                    print("  introuvable :", sel); continue
                mx0, my0, mx1, my1 = bb
                c = cal.setdefault(sel, {"fs": 1, "sx": 1, "dx": 0, "dy": 0})
                ex = max(abs(mx0 - tx0), abs(my0 - ty0), abs(mx1 - tx1), abs(my1 - ty1))
                pire = max(pire, ex)
                kh = (ty1 - ty0) / max(my1 - my0, 1e-3)
                kw = (tx1 - tx0) / max(mx1 - mx0, 1e-3)
                fixe = isinstance(cib, dict) and cib.get("fixe")
                if fixe:
                    # corps et étirement imposés (repris d'une fiche de référence) : on ne cale que le centre ;
                    # « lmax » : largeur d'encre maximale (condensation horizontale seulement si nécessaire)
                    ex = max(abs((mx0 + mx1 - tx0 - tx1) / 2), abs((my0 + my1 - ty0 - ty1) / 2))
                    pire = max(pire, ex)
                    lmax = cib.get("lmax")
                    if lmax and mx1 - mx0 > lmax + 0.02:
                        c["sx"] = round(c["sx"] * lmax / (mx1 - mx0), 4)
                    bord = cib.get("bord")   # "g" / "d" : aligné sur le bord gauche / droit de la cible au lieu du centre
                    ddx = (tx0 - mx0) if bord == "g" else (tx1 - mx1) if bord == "d" else ((tx0 + tx1) - (mx0 + mx1)) / 2
                    if bord: ex = max(abs(ddx), abs((my0 + my1 - ty0 - ty1) / 2)); pire = max(pire, ex)
                    c["dx"] = round(c["dx"] + ddx, 3)
                    c["dy"] = round(c["dy"] + ((ty0 + ty1) - (my0 + my1)) / 2, 3)
                    continue
                if tour < tours - 1 or ex > tol:
                    if tour % 2 == 0:   # échelle
                        c["fs"] = round(c["fs"] * kh, 4)
                        c["sx"] = round(c["sx"] * kw / kh, 4)
                    else:               # position
                        # recalage sur le centre de l'encre (centrage exact dans les formes)
                        c["dx"] = round(c["dx"] + ((tx0 + tx1) - (mx0 + mx1)) / 2, 3)
                        c["dy"] = round(c["dy"] + ((ty0 + ty1) - (my0 + my1)) / 2, 3)
            print(f"tour {tour + 1} : écart max {pire:.2f} mm")
        m = mesurer(nav, fiche, chemin.parent, cibles)
        nav.close()
    pire = 0
    for sel, cib0 in cibles.items():
        cib = cib0["bbox"] if isinstance(cib0, dict) else cib0
        bb = m[sel]
        if bb:
            if isinstance(cib0, dict) and cib0.get("fixe"):
                bd = cib0.get("bord")
                ex_x = (bb[0] - cib[0]) if bd == "g" else (bb[2] - cib[2]) if bd == "d" else (bb[0] + bb[2] - cib[0] - cib[2]) / 2
                e = max(abs(ex_x), abs((bb[1] + bb[3] - cib[1] - cib[3]) / 2))
                if cib0.get("lmax") and bb[2] - bb[0] > cib0["lmax"] + 0.05: e = max(e, bb[2] - bb[0] - cib0["lmax"])
            else:
                e = max(abs(bb[i] - cib[i]) for i in range(4))
            pire = max(pire, e)
            if e > 0.25:
                print(f"  {sel:40s} écart {e:.2f} mm  mesuré {[round(v, 2) for v in bb]}  cible {cib}")
    print(f"écart max final : {pire:.2f} mm")
    chemin.write_text(json.dumps(fiche, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    a = argparse.ArgumentParser(); a.add_argument("fiche"); a.add_argument("--tours", type=int, default=6)
    x = a.parse_args(); caler(x.fiche, x.tours)
