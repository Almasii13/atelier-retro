#!/usr/bin/env python3
"""Encre (mm, repère page ou repère tourné) de chaque élément correspondant à des sélecteurs.
  python3 outils/mesurer_boites.py fiche.json ".tb .rt" ".ban-l2 .rt@0,0,-11.3"
Le suffixe @ox,oy,angle exprime le résultat dans un repère tourné. Un résultat par élément."""
import io, json, math, sys, pathlib
import numpy as np
from PIL import Image
from playwright.sync_api import sync_playwright
RACINE = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(RACINE / "lib")); import render
MM = 96 / 25.4; E = 4
f = pathlib.Path(sys.argv[1]).resolve(); fiche = json.loads(f.read_text())
fp = fiche.get("fond_perdu", 3); L, H = render.format_fini(fiche)
t = f.parent / ".mb.html"; t.write_text(render.construire_html(fiche, f.parent, True))
with sync_playwright() as p:
    nav = p.chromium.launch(); pg = nav.new_page(viewport={"width": round((L + 2*fp)*MM), "height": round((H + 2*fp)*MM)}, device_scale_factor=E)
    pg.goto(t.as_uri()); pg.wait_for_selector("body[data-pret='1']")
    pg.add_style_tag(content="html,body{background:transparent!important} body *{visibility:hidden!important} [data-m],[data-m] *{visibility:visible!important;background:transparent!important;-webkit-text-fill-color:#000!important;-webkit-text-stroke-width:0!important} [data-m] .rt{visibility:hidden!important} [data-m].rt{visibility:visible!important}")
    for arg in sys.argv[2:]:
        sel, _, rep = arg.partition("@")
        n = pg.evaluate("s => document.querySelectorAll(s).length", sel)
        for i in range(n):
            pg.evaluate("([s,i]) => document.querySelectorAll(s)[i].dataset.m = 1", [sel, i])
            a = np.asarray(Image.open(io.BytesIO(pg.screenshot(omit_background=True))).convert("RGBA").getchannel("A"))
            pg.evaluate("([s,i]) => delete document.querySelectorAll(s)[i].dataset.m", [sel, i])
            ys, xs = np.where(a > 90); x = (xs + .5)/E/MM - fp; y = (ys + .5)/E/MM - fp
            if rep:
                ox, oy, ang = map(float, rep.split(",")); r = math.radians(ang)
                x, y = (x-ox)*math.cos(r) + (y-oy)*math.sin(r), -(x-ox)*math.sin(r) + (y-oy)*math.cos(r)
            txt = pg.evaluate("([s,i]) => document.querySelectorAll(s)[i].textContent", [sel, i])
            print(f"{sel}[{i}] {txt[:14]:14s} [{x.min():.2f}, {y.min():.2f}, {x.max():.2f}, {y.max():.2f}]")
    nav.close()
t.unlink()
