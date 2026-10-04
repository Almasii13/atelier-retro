#!/usr/bin/env python3
"""Mesure l'encre (bbox en mm, repère page finie) d'éléments d'une fiche rendue, et compare à des cibles.

  python3 outils/mesurer_encre.py fiche.json cibles.json
cibles.json : {"sélecteur CSS": [x0, y0, x1, y1], ...}  (mm, repère page finie)
"""
import io, json, sys, pathlib
from PIL import Image
from playwright.sync_api import sync_playwright

RACINE = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(RACINE / "lib"))
import render  # noqa: E402

MM = 96 / 25.4


def main(fiche_p, cibles_p):
    f = pathlib.Path(fiche_p).resolve()
    fiche = json.loads(f.read_text(encoding="utf-8"))
    cibles = json.loads(pathlib.Path(cibles_p).read_text(encoding="utf-8"))
    fp = fiche.get("fond_perdu", 3)
    L, H = render.format_fini(fiche)
    t = f.parent / ".mesure.html"
    t.write_text(render.construire_html(fiche, f.parent, True), encoding="utf-8")
    with sync_playwright() as p:
        nav = p.chromium.launch()
        w, h = round((L + 2 * fp) * MM), round((H + 2 * fp) * MM)
        pg = nav.new_page(viewport={"width": w, "height": h}, device_scale_factor=4)
        pg.goto(t.as_uri()); pg.wait_for_selector("body[data-pret='1']")
        tag = pg.add_style_tag(content="html,body{background:transparent!important} body *{visibility:hidden!important} [data-m],[data-m] *{visibility:visible!important;background:transparent!important;-webkit-text-stroke-width:0!important;outline:none!important;-webkit-text-fill-color:#000!important}")
        for sel, cib in cibles.items():
            n = pg.evaluate("s => { document.querySelectorAll(s).forEach(e => e.dataset.m = 1); return document.querySelectorAll(s).length }", sel)
            png = pg.screenshot(omit_background=True)
            pg.evaluate("s => document.querySelectorAll(s).forEach(e => delete e.dataset.m)", sel)
            bb = Image.open(io.BytesIO(png)).convert("RGBA").getchannel("A").point(lambda a: 255 if a > 80 else 0).getbbox()
            if not bb:
                print(f"{sel:32s} (vide, {n} él.)"); continue
            m = [v / 4 / MM - fp for v in bb]
            d = [m[i] - cib[i] for i in range(4)]
            print(f"{sel:32s} mesuré {m[0]:6.2f} {m[1]:6.2f} {m[2]:6.2f} {m[3]:6.2f} | écart g {d[0]:+.2f} h {d[1]:+.2f} d {d[2]:+.2f} b {d[3]:+.2f} | taille {(m[2]-m[0])/(cib[2]-cib[0]):.3f}×{(m[3]-m[1])/(cib[3]-cib[1]):.3f}")
        nav.close()
    t.unlink()


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
