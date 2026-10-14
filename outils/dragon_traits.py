#!/usr/bin/env python3
"""Tête de dragon (création originale), traits foncés seuls, PNG transparent 2000 × 2000.
  python3 outils/dragon_traits.py creations/2026-10_affiche-super-museum94/images/dragon_traits.png
"""
import pathlib, sys
from playwright.sync_api import sync_playwright

TRAIT = "#4a3718"
SVG = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
<g fill="none" stroke="{TRAIT}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round">
  <!-- crâne, museau, mâchoire -->
  <path d="M150,560 C148,500 200,455 272,446 C335,438 362,416 398,392"/>
  <path d="M150,560 C160,612 205,652 275,666 C345,679 425,662 505,620"/>
  <path d="M158,572 C230,588 305,592 385,576 C435,566 472,542 505,520"/>
  <!-- narine -->
  <path d="M196,505 C204,494 218,498 220,510"/>
  <!-- œil et arcade -->
  <path d="M380,456 C400,431 442,431 464,456 C442,480 402,481 380,456 Z"/>
  <path d="M368,430 C398,398 452,400 482,432"/>
  <!-- crocs -->
  <path d="M214,588 L228,634 L246,592"/>
  <path d="M268,593 L282,640 L302,594"/>
  <path d="M330,590 L344,626 L362,586"/>
  <path d="M236,664 L250,628 L266,666"/>
  <path d="M312,672 L326,636 L342,672"/>
  <!-- cornes -->
  <path d="M432,402 C472,332 545,290 648,272 C606,312 588,352 566,414 C530,430 470,420 432,402 Z"/>
  <path d="M566,436 C590,380 650,346 740,346 C694,376 672,410 660,460"/>
  <!-- joue : écailles -->
  <path d="M500,470 q18,-20 36,0"/><path d="M470,500 q18,-20 36,0"/><path d="M530,500 q18,-20 36,0"/><path d="M500,530 q18,-20 36,0"/><path d="M560,530 q18,-20 36,0"/>
  <!-- crinière en flammèches -->
  <path d="M566,446 C650,418 748,430 826,486 C770,482 732,498 706,526"/>
  <path d="M706,526 C770,536 806,576 822,636 C772,604 734,606 706,630"/>
  <path d="M640,520 C690,544 720,590 724,650"/>
  <path d="M706,630 C748,660 766,706 764,764 C722,730 690,728 660,744"/>
  <!-- cou -->
  <path d="M505,620 C556,696 596,776 628,872"/>
  <path d="M660,744 C690,800 700,850 696,900"/>
  <!-- moustaches -->
  <path d="M216,506 C148,430 92,440 62,382 C44,344 70,304 112,292"/>
  <path d="M236,500 C190,400 202,332 152,262 C132,232 150,192 192,172"/>
  <path d="M258,470 C250,410 292,360 270,300"/>
</g>
<circle cx="421" cy="456" r="12" fill="{TRAIT}"/>
</svg>"""

def rendre(sortie):
    sortie = pathlib.Path(sortie).resolve(); sortie.parent.mkdir(parents=True, exist_ok=True)
    html = f"<!doctype html><meta charset=utf-8><style>html,body{{margin:0;background:transparent}}svg{{display:block;width:1000px;height:1000px}}</style><body>{SVG}</body>"
    with sync_playwright() as p:
        nav = p.chromium.launch(); page = nav.new_page(viewport={"width":1000,"height":1000}, device_scale_factor=2)
        page.set_content(html); page.screenshot(path=str(sortie), omit_background=True); nav.close()
    print("OK →", sortie)

if __name__ == "__main__":
    rendre(sys.argv[1] if len(sys.argv) > 1 else "dragon_traits.png")
