#!/usr/bin/env python3
"""
Atelier Retro — rendu d'une fiche (JSON) avec son modèle.

  python3 lib/render.py creations/2026-09_dbs-broly/obi.json --dpi 300

Produit à côté de la fiche :
  <nom>.html         (source de la composition)
  <nom>.png          (propre, pour impression)
  <nom>_reperes.png  (avec traits de pli)
  <nom>.pdf          (aux dimensions réelles)
  <nom>_apercu.png   (face de l'obi posée sur une jaquette factice)
"""
import argparse, json, os, pathlib
from jinja2 import Environment, FileSystemLoader
from playwright.sync_api import sync_playwright

RACINE = pathlib.Path(__file__).resolve().parent.parent
MM = 96 / 25.4  # px CSS par mm


def etoile(pointes=18, r_ext=50, r_int=38, cx=50, cy=50, sx=1.0, sy=1.0, irregulier=0.0):
    """Points SVG d'une étoile / explosion (pastilles 'burst')."""
    import math, random
    rnd = random.Random(pointes)
    pts = []
    for i in range(pointes * 2):
        a = math.pi * i / pointes - math.pi / 2
        r = r_ext if i % 2 == 0 else r_int
        r *= 1 + rnd.uniform(-irregulier, irregulier)
        pts.append(f"{cx + math.cos(a) * r * sx:.2f},{cy + math.sin(a) * r * sy:.2f}")
    return " ".join(pts)


def construire_html(fiche, propre, repere):
    dossier_modele = RACINE / "modeles" / fiche["modele"]
    env = Environment(loader=FileSystemLoader(dossier_modele), autoescape=False)
    env.globals["etoile"] = etoile
    return env.get_template("template.html").render(
        **fiche, lib=(RACINE / "lib").as_uri(), propre=propre, repere=repere)


def rendre(chemin_fiche, dpi):
    chemin_fiche = pathlib.Path(chemin_fiche).resolve()
    fiche = json.loads(chemin_fiche.read_text(encoding="utf-8"))
    base = chemin_fiche.with_suffix("")
    d = fiche["dim"]
    largeur_mm = d.get("verso", 0) + d.get("tranche", 0) + d.get("face", 0)
    w, h = round(largeur_mm * MM), round(d["hauteur"] * MM)

    with sync_playwright() as p:
        nav = p.chromium.launch()
        for suffixe, propre, repere in [("", True, False), ("_reperes", False, True)]:
            html = construire_html(fiche, propre, repere)
            f_html = base.parent / f"{base.name}{suffixe}.html"
            f_html.write_text(html, encoding="utf-8")
            page = nav.new_page(viewport={"width": w, "height": h}, device_scale_factor=dpi / 96)
            page.goto(f_html.as_uri()); page.wait_for_timeout(300)
            page.screenshot(path=f"{base}{suffixe}.png", clip={"x": 0, "y": 0, "width": w, "height": h})
            if propre:
                page.pdf(path=f"{base}.pdf", width=f"{largeur_mm}mm", height=f"{d['hauteur']}mm",
                         print_background=True)
            page.close()
            if suffixe == "_reperes":
                f_html.unlink()
        nav.close()

    apercu(fiche, base, dpi)
    print("OK →", base.parent)


def apercu(fiche, base, dpi):
    """Pose la face de l'obi sur une jaquette factice (ou sur l'image 'jaquette' de la fiche)."""
    from PIL import Image, ImageDraw, ImageFilter
    d = fiche["dim"]; px = dpi / 25.4
    obi = Image.open(f"{base}.png").convert("RGB")
    x0 = round((d["verso"] + d["tranche"]) * px)
    face = obi.crop((x0, 0, obi.width, obi.height))
    cw, ch = round(104 * px), round(d["hauteur"] * px)  # jaquette VHS ~104 mm de large
    img_j = fiche.get("jaquette")
    if img_j and (base.parent / img_j).exists():
        jaq = Image.open(base.parent / img_j).convert("RGB").resize((cw, ch))
    else:
        jaq = Image.new("RGB", (cw, ch), "#1d1f33")
        dr = ImageDraw.Draw(jaq)
        for y in range(ch):
            t = y / ch
            dr.line([(0, y), (cw, y)], fill=(int(20 + 40 * t), int(24 + 10 * t), int(60 - 20 * t)))
    jaq.paste(face, (0, 0))
    ombre = Image.new("L", (8, ch), 0)
    for i in range(8):
        ombre.putpixel((i, 0), 0)
    fond = Image.new("RGB", (cw + round(20 * px), ch + round(20 * px)), "#cfcac0")
    fond.paste(jaq, (round(10 * px), round(10 * px)))
    fond.thumbnail((1400, 1400))
    fond.save(f"{base}_apercu.png")


if __name__ == "__main__":
    a = argparse.ArgumentParser()
    a.add_argument("fiche"); a.add_argument("--dpi", type=int, default=300)
    args = a.parse_args()
    rendre(args.fiche, args.dpi)
