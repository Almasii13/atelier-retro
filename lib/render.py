#!/usr/bin/env python3
"""
Atelier Retro — rendu d'une fiche (JSON) avec son modèle.

  python3 lib/render.py creations/2026-09_dbs-broly/obi.json [--dpi 300]

Exports, à côté de la fiche :
  <nom>.pdf          impression : format fini + fond perdu (3 mm par défaut)
  <nom>.png          aperçu propre, recadré au format fini
  <nom>_epreuve.png  épreuve : fond perdu visible, trait de coupe (magenta),
                     zone de sécurité (bleu), plis, zones réservées
  <nom>_apercu.png   (obis) face posée sur une jaquette
"""
import argparse, json, pathlib, sys
from jinja2 import Environment, FileSystemLoader
from playwright.sync_api import sync_playwright

RACINE = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(RACINE / "lib"))
import formes  # noqa: E402

MM = 96 / 25.4  # px CSS par mm


def format_fini(fiche):
    if "dim" in fiche:  # obi enveloppant
        d = fiche["dim"]
        return d["verso"] + d["tranche"] + d["face"], d["hauteur"]
    f = fiche["format"]
    return f["largeur"], f["hauteur"]


def construire_html(fiche, dossier, propre):
    env = Environment(loader=FileSystemLoader(RACINE / "modeles" / fiche["modele"]), autoescape=False)
    images = fiche.get("images", {})

    def img(cle):
        chemin = images.get(cle)
        if chemin and (dossier / chemin).exists():
            return (dossier / chemin).resolve().as_uri()
        return ""

    env.globals.update(
        etoile=formes.etoile, zone_etoile=formes.zone_texte_etoile, zone_cercle=formes.zone_texte_cercle,
        polygone=formes.polygone, clip=formes.clip_polygone, arc=formes.texte_arc, img=img)
    largeur, hauteur = format_fini(fiche)
    return env.get_template("template.html").render(
        **fiche, lib=(RACINE / "lib").as_uri(), propre=propre,
        L=largeur, H=hauteur, FP=fiche.get("fond_perdu", 3), SECU=fiche.get("securite", 2.5))


def rendre(chemin_fiche, dpi):
    chemin_fiche = pathlib.Path(chemin_fiche).resolve()
    dossier = chemin_fiche.parent
    fiche = json.loads(chemin_fiche.read_text(encoding="utf-8"))
    base = chemin_fiche.with_suffix("")
    L, H = format_fini(fiche)
    fp = fiche.get("fond_perdu", 3)
    W, Ht = L + 2 * fp, H + 2 * fp
    wpx, hpx = round(W * MM), round(Ht * MM)

    with sync_playwright() as p:
        nav = p.chromium.launch()
        for propre in (True, False):
            f_html = dossier / f".{base.name}_{'propre' if propre else 'epreuve'}.html"
            f_html.write_text(construire_html(fiche, dossier, propre), encoding="utf-8")
            page = nav.new_page(viewport={"width": wpx, "height": hpx}, device_scale_factor=dpi / 96)
            page.goto(f_html.as_uri())
            page.wait_for_selector("body[data-pret='1']", timeout=20000)
            if propre:
                page.pdf(path=f"{base}.pdf", width=f"{W}mm", height=f"{Ht}mm", print_background=True,
                         margin={"top": "0", "right": "0", "bottom": "0", "left": "0"})
                page.screenshot(path=f"{base}.png",
                                clip={"x": fp * MM, "y": fp * MM, "width": L * MM, "height": H * MM})
            else:
                page.screenshot(path=f"{base}_epreuve.png", clip={"x": 0, "y": 0, "width": wpx, "height": hpx})
            page.close()
            f_html.unlink()
        nav.close()

    if "dim" in fiche:
        apercu_obi(fiche, base, dpi)
    print("OK →", dossier)


def apercu_obi(fiche, base, dpi):
    """Pose la face de l'obi sur la jaquette (image 'jaquette' de la fiche, ou fond factice)."""
    from PIL import Image, ImageDraw
    d = fiche["dim"]; px = dpi / 25.4
    obi = Image.open(f"{base}.png").convert("RGB")
    face = obi.crop((round((d["verso"] + d["tranche"]) * px), 0, obi.width, obi.height))
    cw, ch = round(d.get("jaquette_largeur", 104) * px), round(d["hauteur"] * px)
    img_j = fiche.get("images", {}).get("jaquette")
    if img_j and (base.parent / img_j).exists():
        jaq = Image.open(base.parent / img_j).convert("RGB").resize((cw, ch))
    else:
        jaq = Image.new("RGB", (cw, ch))
        dr = ImageDraw.Draw(jaq)
        for y in range(ch):
            t = y / ch
            dr.line([(0, y), (cw, y)], fill=(int(20 + 40 * t), int(24 + 10 * t), int(60 - 20 * t)))
    jaq.paste(face, (0, 0))
    fond = Image.new("RGB", (cw + round(20 * px), ch + round(20 * px)), "#cfcac0")
    fond.paste(jaq, (round(10 * px), round(10 * px)))
    fond.thumbnail((1400, 1400))
    fond.save(f"{base}_apercu.png")


if __name__ == "__main__":
    a = argparse.ArgumentParser()
    a.add_argument("fiche"); a.add_argument("--dpi", type=int, default=300)
    args = a.parse_args()
    rendre(args.fiche, args.dpi)
