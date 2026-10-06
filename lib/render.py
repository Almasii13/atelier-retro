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
  <nom>.psd          calques Photoshop (si le modèle déclare des data-calque)
  <nom>_calques/     les mêmes calques en PNG transparents (montage vidéo)
  <nom>_photoshop.jsx script Photoshop : reconstruit le document en vrais calques (textes modifiables)

Calques : chaque enfant direct de .page porte data-calque="…" :
  fond | texte | image:<clé> | zone:<clé>   (ordre d'empilement = ordre dans le DOM)
  - image:<clé> → dans le PSD, une forme « Forme — … » + un calque écrêté par-dessus
    (colle ton image dans ce calque écrêté, elle prend la forme automatiquement)
  - zone:<clé>  → repère masqué (VHS 3D, TV cathodique…)
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
    env = Environment(loader=FileSystemLoader([RACINE / "modeles" / fiche["modele"], RACINE / "modeles"]), autoescape=False)
    images = fiche.get("images", {})

    def img(cle):
        chemin = images.get(cle)
        if chemin and (dossier / chemin).exists():
            return (dossier / chemin).resolve().as_uri()
        return ""

    import math
    env.globals.update(
        sin=math.sin, cos=math.cos, tan=math.tan, radians=math.radians,
        etoile=formes.etoile, zone_etoile=formes.zone_texte_etoile, zone_cercle=formes.zone_texte_cercle,
        polygone=formes.polygone, prisme=formes.prisme, ean13=formes.ean13, barres=formes.barres, chemin_svg=formes.chemin_svg, clip=formes.clip_polygone, arc=formes.texte_arc, img=img)
    largeur, hauteur = format_fini(fiche)
    env.globals["calage_script"] = "<script>window.ATELIER_CALAGE = " + json.dumps(fiche.get("calage", {}), ensure_ascii=False) + ";</script>"
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
                page.add_style_tag(content=f"@page {{ size: {W}mm {Ht}mm; margin: 0; }}")
                page.pdf(path=f"{base}.pdf", prefer_css_page_size=True, print_background=True)
                page.screenshot(path=f"{base}.png",
                                clip={"x": fp * MM, "y": fp * MM, "width": L * MM, "height": H * MM})
                exporter_calques(page, fiche, base, wpx, hpx)
                if page.query_selector(".page > [data-calque]"):
                    # page dédiée à 2x : la mesure de l'encre n'a pas besoin de 300 ppi
                    import photoshop
                    p2 = nav.new_page(viewport={"width": wpx, "height": hpx}, device_scale_factor=2)
                    p2.goto(f_html.as_uri())
                    p2.wait_for_selector("body[data-pret='1']", timeout=20000)
                    photoshop.exporter_jsx(p2, fiche, base)
                    p2.close()
            else:
                page.screenshot(path=f"{base}_epreuve.png", clip={"x": 0, "y": 0, "width": wpx, "height": hpx})
            page.close()
            f_html.unlink()
        nav.close()

    if "dim" in fiche:
        apercu_obi(fiche, base, dpi)
    print("OK →", dossier)


CSS_CALQUE = """
  html, body { background: transparent !important; }
  .page > * { visibility: hidden !important; }
  .page > [data-calque="%s"], .page > [data-calque="%s"] * { visibility: visible !important; }
  .repere { display: none !important; }
"""
CSS_FORME = """
  .slot { background: #7f7f7f !important; outline: none !important; }
  .slot::after, .slot img { display: none !important; }
"""
CSS_ZONE = """
  .zone-reservee { outline: .5mm dashed #00a0e9 !important; background: rgba(0,160,233,.18) !important; }
  .zone-reservee::after { display: grid !important; }
"""


def exporter_calques(page, fiche, base, wpx, hpx):
    """Rend chaque calque séparément (fond transparent) puis assemble un PSD."""
    noms = page.eval_on_selector_all(".page > [data-calque]", "els => els.map(e => e.dataset.calque)")
    ordre = list(dict.fromkeys(noms))
    if not ordre:
        return
    from PIL import Image
    import io
    dossier = pathlib.Path(f"{base}_calques"); dossier.mkdir(exist_ok=True)
    for f in dossier.glob("*.png"):
        f.unlink()
    libelles = fiche.get("libelles_calques", {})
    rendus = []  # (nom lisible, image, visible, clipping)

    def capture(nom, extra=""):
        tag = page.add_style_tag(content=CSS_CALQUE % (nom, nom) + extra)
        png = page.screenshot(clip={"x": 0, "y": 0, "width": wpx, "height": hpx}, omit_background=True)
        page.evaluate("t => t.remove()", tag)
        return Image.open(io.BytesIO(png)).convert("RGBA")

    for nom in ordre:
        lib = libelles.get(nom, nom)
        if nom.startswith("image:"):
            rendus.append((f"Forme - {lib}", capture(nom, CSS_FORME), True, False))
            rendus.append((f">> {lib} (colle ton image ici)", capture(nom), True, True))
        elif nom.startswith("zone:"):
            rendus.append((f"Repere - {lib}", capture(nom, CSS_ZONE), False, False))
        else:
            rendus.append((lib, capture(nom), True, False))

    for i, (n, im, _, _) in enumerate(rendus):
        sur = "".join(c if c.isalnum() else "_" for c in n.lower()).strip("_")
        im.save(dossier / f"{i:02d}_{sur}.png")

    try:
        from psd_tools import PSDImage
        from psd_tools.api.layers import PixelLayer
        from psd_tools.constants import Compression
        psd = PSDImage.new("RGBA", rendus[0][1].size)
        for n, im, vis, clip in rendus:
            n = n.replace("▶", ">>").replace("—", "-")
            calque = PixelLayer.frompil(im, psd, n, compression=Compression.RLE)
            calque.visible = vis
            if clip:
                calque.clipping = True
            psd.append(calque)
        psd.save(f"{base}.psd")
    except ImportError:
        print("psd-tools absent : calques exportés en PNG seulement")


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
