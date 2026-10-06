#!/usr/bin/env python3
"""Vérifie un script Photoshop généré sans Photoshop.

Reconstruit le document à partir des seules données du .jsx (textes : police, corps, approche,
interligne, alignements, retraits ; placement par centre d'encre puis rotation, exactement comme
le script le fait dans Photoshop), puis produit une planche : original | reconstruction | différence.

  python3 outils/verifier_jsx.py creations/2026-09_dbs-broly/flyer_photoshop.jsx creations/2026-09_dbs-broly/flyer_pleine.png
"""
import io, json, re, sys, pathlib, html
from PIL import Image, ImageChops, ImageOps
from playwright.sync_api import sync_playwright

RACINE = pathlib.Path(__file__).resolve().parent.parent
K = 300 / 96  # px document par px CSS
INVERSE = {"ZenKakuGothicNew-Black": ("Zen Kaku", 900), "ZenKakuGothicNew-Bold": ("Zen Kaku", 700),
           "ZenKakuGothicNew-Medium": ("Zen Kaku", 500), "DelaGothicOne-Regular": ("Dela Gothic", 400),
           "ZenOldMincho-Black": ("Zen Old Mincho", 900), "YujiSyuku-Regular": ("Yuji Syuku", 400),
           "RoundedMplus1c-ExtraBold": ("M Rounded", 800), "Anton-Regular": ("Anton", 400),
           "ArchivoBlack-Regular": ("Archivo Black", 400), "Arvo-Bold": ("Arvo", 700), "Ultra-Regular": ("Ultra", 400), "Tinos-Bold": ("Tinos", 700),
           "ZenOldMincho-Bold": ("Zen Old Mincho", 700), "ZenOldMincho-SemiBold": ("Zen Old Mincho", 600), "ZenOldMincho-Medium": ("Zen Old Mincho", 500)}
ALIGN = {"left": ("left", "auto"), "center": ("center", "auto"), "right": ("right", "auto"),
         "justifyLeft": ("justify", "left"), "justifyAll": ("justify", "justify")}


def run_css(r):
    fam, w = INVERSE.get(r["police"], ("Zen Kaku", 500))
    t = r["taille"] / K
    return (f"font-family:'{fam}';font-weight:{w};font-size:{t}px;letter-spacing:{r['approche'] / 1000 * t}px;"
            f"color:rgb({','.join(map(str, r['couleur']))});font-style:{'italic' if r['italique'] else 'normal'};"
            + (f"line-height:{r['interligne'] / K}px;" if r.get("interligne") else "line-height:1.2;"))


def texte_html(it, i):
    t = it["texte"]
    corps = []
    for p in it["paras"]:
        morceaux = []
        for r in it["runs"]:
            a, b = max(r["de"], p["de"]), min(r["a"], p["a"])
            if a < b:
                morceaux.append(f'<span style="{run_css(r)}">{html.escape(t[a:b].replace(chr(13), ""))}</span>')
        al, last = ALIGN[p["align"]]
        r0 = next((r for r in it["runs"] if r["de"] <= p["de"] < r["a"]), it["runs"][0])
        corps.append(f'<div style="text-align:{al};text-align-last:{last};text-indent:{p["retrait1"] / K}px;'
                     f'padding-left:{p["retraitG"] / K}px;{run_css(r0)}">{"".join(morceaux) or "&#8203;"}</div>')
    ech = it["runs"][0]["echelleH"] / 100
    if it.get("vertical"):
        boite = "writing-mode:vertical-rl;" + (f"height:{it['boite']['h'] / K}px;" if it.get("boite") else "white-space:nowrap;")
    else:
        boite = f"width:{it['boite']['l'] / K}px;" if it.get("boite") else "white-space:nowrap;"
    return (f'<div class="t" id="t{i}" data-cx="{it["centre"][0] / K}" data-cy="{it["centre"][1] / K}" data-a="{it["angle"]}" data-e="{ech}" '
            f'style="position:absolute;left:0;top:0;{boite}">{"".join(corps)}</div>')


def main(jsx, original):
    s = pathlib.Path(jsx).read_text(encoding="utf-8")
    sc = json.loads(re.search(r"var SCENE = (\{.*?\});\n", s, re.S).group(1))
    W, H = sc["largeur"] / K, sc["hauteur"] / K
    svg, textes = [], []
    for i, it in enumerate(sc["items"]):
        if it["type"] == "image" and it.get("detoure"):
            continue
        if it["type"] in ("forme", "image", "degrade"):
            coul = it.get("couleur", [128, 128, 128])
            if it["type"] == "degrade":
                coul = it["stops"][len(it["stops"]) // 2]["c"]
            d = " ".join("M " + " L ".join(f"{p['a'][0] / K},{p['a'][1] / K}" for p in ch) + " Z" for ch in it["chemins"])
            svg.append(f'<path d="{d}" fill="rgb({",".join(map(str, coul))})"/>')
        elif it["type"] == "texte":
            textes.append(texte_html(it, i))
            if it.get("contourSeul"):
                textes[-1] = textes[-1].replace('style="position', 'style="-webkit-text-fill-color:transparent;position', 1)
            if it.get("contour"):
                c = it["contour"]
                textes[-1] = textes[-1].replace('style="position', f'style="-webkit-text-stroke:{c["taille"] * 2 / K}px rgb({",".join(map(str, c["couleur"]))});paint-order:stroke fill;position', 1)
        elif it["type"] == "arc":
            for j, c in enumerate(it["car"]):
                r = {"police": it["police"], "taille": it["taille"], "approche": 0, "couleur": it["couleur"], "italique": it["italique"], "echelleH": 100}
                textes.append(texte_html({"texte": c["c"], "runs": [{**r, "de": 0, "a": 1}],
                                          "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0, "retraitG": 0}],
                                          "centre": c["centre"], "angle": c["angle"]}, f"{i}_{j}"))
    page = f"""<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="{(RACINE / 'lib' / 'atelier.css').as_uri()}">
    <style>html,body{{margin:0;background:#fff;width:{W}px;height:{H}px;overflow:hidden}}</style></head><body>
    <svg style="position:absolute;left:0;top:0" width="{W}" height="{H}" viewBox="0 0 {W} {H}">{''.join(svg)}</svg>
    {''.join(textes)}</body></html>"""
    f = pathlib.Path(jsx).resolve().with_suffix(".verif.html"); f.write_text(page, encoding="utf-8")
    with sync_playwright() as p:
        nav = p.chromium.launch()
        pg = nav.new_page(viewport={"width": round(W), "height": round(H)}, device_scale_factor=2)
        pg.goto(f.as_uri()); pg.evaluate("document.fonts.ready")
        pg.add_style_tag(content="body.iso .t{visibility:hidden} body.iso .t.on{visibility:visible} body.iso svg{visibility:hidden} body.iso{background:transparent!important} html:has(body.iso){background:transparent}")
        for el in pg.query_selector_all(".t"):
            # comme Photoshop : échelle horizontale, mesure de l'encre, centrage, rotation autour du centre
            e = float(el.get_attribute("data-e"))
            el.evaluate("(n,e)=>{n.style.transformOrigin='0 0';n.style.transform=`scaleX(${e})`;n.classList.add('on');document.body.classList.add('iso')}", e)
            png = pg.screenshot(omit_background=True)
            el.evaluate("n=>{n.classList.remove('on');document.body.classList.remove('iso')}")
            bb = Image.open(io.BytesIO(png)).convert("RGBA").getchannel("A").point(lambda a: 255 if a > 60 else 0).getbbox()
            if not bb:
                continue
            cx, cy = (bb[0] + bb[2]) / 4, (bb[1] + bb[3]) / 4
            el.evaluate("""(n,[cx,cy])=>{const tx=+n.dataset.cx-cx, ty=+n.dataset.cy-cy, e=+n.dataset.e;
                n.style.transformOrigin=`${cx}px ${cy}px`;
                n.style.transform=`translate(${tx}px,${ty}px) rotate(${n.dataset.a}deg) translate(${-cx}px,${-cy}px) translate(${cx}px,${cy}px) scaleX(${e}) translate(${-cx}px,${-cy}px)`;
                n.style.transformOrigin='0 0';
                n.style.transform=`translate(${cx+tx}px,${cy+ty}px) rotate(${n.dataset.a}deg) translate(${-cx}px,${-cy}px) scaleX(${e})`;}""", [cx, cy])
        rec = Image.open(io.BytesIO(pg.screenshot())).convert("RGB")
        nav.close()
    f.unlink()
    orig = Image.open(original).convert("RGB").resize(rec.size)
    diff = ImageOps.invert(ImageChops.difference(orig, rec).convert("L")).convert("RGB")
    planche = Image.new("RGB", (rec.width * 3 + 40, rec.height), "white")
    for k, im in enumerate((orig, rec, diff)):
        planche.paste(im, (k * (rec.width + 20), 0))
    sortie = pathlib.Path(jsx).with_name(pathlib.Path(jsx).stem + "_verification.png")
    planche.save(sortie)
    ecart = sum(ImageChops.difference(orig, rec).convert("L").point(lambda v: 1 if v > 60 else 0).getdata()) / (rec.width * rec.height)
    print(f"{sortie}  — pixels divergents : {ecart:.2%}")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
