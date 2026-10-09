#!/usr/bin/env python3
"""Logo doré 3D « ジャンプキャラクター カードダス 究極博 / WEEKLY JUMP CHARACTER CARDDASS SUPER MUSEUM ».

Reproduction graphique (polices libres de lib/fonts) : lettres en dégradé métallique doré, extrusion
sombre vers le bas, contour brun, ligne anglaise rouge. PNG transparent 2400 × 1600.

  python3 outils/logo_or_3d.py creations/2026-10_affiche-super-museum94/images/logo_or.png
"""
import pathlib, sys
from playwright.sync_api import sync_playwright

RACINE = pathlib.Path(__file__).resolve().parent.parent
LIB = (RACINE / "lib").as_uri()

HTML = """<!doctype html><html lang="ja"><head><meta charset="utf-8">
<link rel="stylesheet" href="%(lib)s/atelier.css">
<style>
  html, body { margin: 0; background: transparent; }
  #logo { position: relative; width: 1200px; height: 800px; overflow: hidden; }
  .g { position: absolute; left: 0; top: 0; width: 1200px; height: 800px; transform: skewX(-7deg); transform-origin: 50%% 55%%; }
  .t { position: absolute; white-space: nowrap; line-height: 1; transform-origin: 0 0; }
  .ext { color: var(--ext); -webkit-text-stroke: var(--w) #2b0e00; }
  .face { color: transparent; -webkit-background-clip: text; background-clip: text;
          -webkit-text-stroke: var(--sw) var(--sc); background-image: var(--fill); }
  .or { --fill: linear-gradient(180deg, #fffdd8 0%%, #ffe770 22%%, #f9b523 46%%, #c9690a 54%%, #f4b92c 72%%, #ffe58a 100%%); --ext: #8c3d06; --sc: #6a2a02; }
  .rouge { --fill: linear-gradient(180deg, #ff6a4a 0%%, #d3201a 50%%, #8f0d10 100%%); --ext: #5b0709; --sc: #2b0e00; }
  .ruby { position: absolute; font: 900 27px/1 var(--f-gothic); color: #5a1f00; white-space: nowrap; }
</style></head><body>
<div id="logo"><div class="g" id="g"></div></div>
<script>
const G = document.getElementById("g");
// [texte, classe, police, taille px, gauche, haut, largeur cible px, profondeur d'extrusion, contour extrusion, contour face, ext. x]
const LIGNES = [
  ["ジャンプキャラクター", "or",    '"MP1 Black"',     80, 310,   6, 750,  7, 9,  4, 0.35],
  ["カードダス",           "or",    '"MP1 Black"',    196, 104,  70, 1010, 14, 14, 5, 0.35],
  ["究極博",               "or",    '"Dela Gothic"',  320,  92, 270, 1030, 24, 18, 6, 0.30],
  ["WEEKLY JUMP CHARACTER CARDDASS", "rouge", '"OS Cond BI"', 76, 96, 600, 1010, 7, 9, 3, 0.2],
  ["SUPER MUSEUM",         "rouge", 'Tinos',          100, 236, 672, 730,  9, 10, 3, 0.2],
];
for (const [txt, cls, font, size, x, y, w, depth, wext, sw, kx] of LIGNES) {
  const mk = (extra, dx, dy) => {
    const e = document.createElement("div");
    e.className = "t " + cls + " " + extra;
    e.textContent = txt;
    e.style.cssText = `left:${x + dx}px; top:${y + dy}px; font-family:${font}; font-weight:${font === 'Tinos' ? 700 : 400}; font-size:${size}px; --w:${wext}px; --sw:${sw}px; letter-spacing:${font.includes('Dela') ? 6 : 0}px;`;
    G.appendChild(e);
    return e;
  };
  // largeur naturelle -> étirement horizontal pour atteindre la largeur cible
  const probe = mk("ext", 0, 0);
  const k = w / probe.getBoundingClientRect().width;
  probe.remove();
  for (let i = depth; i >= 1; i--) {
    const e = mk("ext", -i * kx, i);
    e.style.transform = `scaleX(${k})`;
  }
  const f = mk("face", 0, 0);
  f.style.transform = `scaleX(${k})`;
}
// furigana sous « カードダス », au-dessus de 究極博
for (const [r, cx] of [["きゅう", 262], ["きょく", 596], ["はく", 930]]) {
  const e = document.createElement("div");
  e.className = "ruby"; e.textContent = r; e.style.top = "272px"; e.style.left = (cx - 40) + "px";
  G.appendChild(e);
}
document.body.dataset.pret = "1";
</script></body></html>"""


def rendre(sortie):
    sortie = pathlib.Path(sortie).resolve()
    sortie.parent.mkdir(parents=True, exist_ok=True)
    tmp = sortie.with_suffix(".html")
    tmp.write_text(HTML % {"lib": LIB}, encoding="utf-8")
    with sync_playwright() as p:
        nav = p.chromium.launch()
        page = nav.new_page(viewport={"width": 1200, "height": 800}, device_scale_factor=2)
        page.goto(tmp.as_uri())
        page.evaluate("document.fonts.ready")
        page.wait_for_selector("body[data-pret='1']", timeout=20000)
        page.wait_for_timeout(500)
        page.locator("#logo").screenshot(path=str(sortie), omit_background=True)
        nav.close()
    tmp.unlink()
    print("OK →", sortie)


if __name__ == "__main__":
    rendre(sys.argv[1] if len(sys.argv) > 1 else "logo_or.png")
