#!/usr/bin/env python3
"""Texture « bois » procédurale (veinage vertical ondulé), pour incrustation dans un texte.

  python3 outils/bois.py sortie.png --largeur 32 --hauteur 12 [--dpi 300] [--graine 3]
          [--couleurs "#b03a12,#e0662a,#f6a456"]
"""
import argparse
import numpy as np
from PIL import Image, ImageFilter


def bruit(h, w, echelle, rng):
    """Bruit lisse (valeurs interpolées d'une grille aléatoire)."""
    gh, gw = max(2, int(h / echelle) + 2), max(2, int(w / echelle) + 2)
    g = Image.fromarray((rng.random((gh, gw)) * 255).astype("uint8"))
    return np.asarray(g.resize((w, h), Image.BICUBIC)).astype(float) / 255


def bois(w, h, couleurs, graine=3, px_mm=11.8):
    """Fond orangé, veines sombres nettes et filets clairs qui suivent un fil vertical ondulé."""
    rng = np.random.default_rng(graine)
    y, x = np.mgrid[0:h, 0:w].astype(float)
    dx = (bruit(h, w, 7 * px_mm, rng) - .5) * 6 * px_mm + (bruit(h, w, 2.5 * px_mm, rng) - .5) * 1.4 * px_mm
    u = (x + dx) / (2.2 * px_mm)                      # une veine tous les ~2 mm
    d = np.abs(((u + .5) % 1) - .5)                   # distance à la veine la plus proche (0..0,5)
    epais = 0.05 + 0.06 * bruit(h, w, 3 * px_mm, rng)  # épaisseur variable
    veine = np.exp(-(d / epais) ** 2)
    u2 = (x + dx * 1.1 + 0.9 * px_mm) / (3.1 * px_mm)  # filets clairs, décalés
    d2 = np.abs(((u2 + .5) % 1) - .5)
    filet = np.exp(-(d2 / 0.06) ** 2) * (bruit(h, w, 4 * px_mm, rng) > .45)
    fond = 0.55 + 0.25 * (bruit(h, w, 3 * px_mm, rng) - .5) - 0.15 * y / h
    t = np.clip(fond - 0.5 * veine + 0.35 * filet, 0, 1)
    cs = [np.array([int(c[i:i + 2], 16) for i in (1, 3, 5)], float) for c in couleurs]
    pos = np.linspace(0, 1, len(cs))
    out = np.zeros((h, w, 3))
    for k in range(3):
        out[..., k] = np.interp(t, pos, [c[k] for c in cs])
    return Image.fromarray(out.clip(0, 255).astype("uint8"))


if __name__ == "__main__":
    a = argparse.ArgumentParser()
    a.add_argument("sortie"); a.add_argument("--largeur", type=float, default=32); a.add_argument("--hauteur", type=float, default=12)
    a.add_argument("--dpi", type=int, default=300); a.add_argument("--graine", type=int, default=3)
    a.add_argument("--couleurs", default="#a8340f,#d9541f,#ec7a33,#f7a85a")
    o = a.parse_args()
    k = o.dpi / 25.4
    im = bois(round(o.largeur * k), round(o.hauteur * k), o.couleurs.split(","), o.graine, k)
    im.save(o.sortie, dpi=(o.dpi, o.dpi), optimize=True)
    print(o.sortie, im.size)
