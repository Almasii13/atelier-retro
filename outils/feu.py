#!/usr/bin/env python3
"""Fond « marbre de feu » vectoriel (rouge / orange / jaune) pour cartes et sachets.

  python3 outils/feu.py sortie.json --largeur 65 --hauteur 90 --fp 3.5 --graine 8 [--trou x0 y0 x1 y1]

Champ procédural : bruit fBm déformé (domain warping) + stries diagonales ; seuillé en 3 niveaux
puis vectorisé (polygones en mm, repère page finie, débordant dans le fond perdu).
--trou : rectangle non vectorisé (zone entièrement couverte, ex. intérieur d'un cadre) pour alléger.
"""
import argparse, json
import numpy as np, cv2


def _bruit(h, w, e, g):
    rng = np.random.default_rng(g)
    gh, gw = int(h / e) + 3, int(w / e) + 3
    a = rng.random((gh, gw)).astype(np.float32)
    return cv2.resize(a, (int(gw * e), int(gh * e)), interpolation=cv2.INTER_CUBIC)[:h, :w]


def _fbm(h, w, e, g, octaves=3):
    s = np.zeros((h, w), np.float32); amp = 1; tot = 0
    for o in range(octaves):
        s += amp * _bruit(h, w, e / (2 ** o), g + o); tot += amp; amp *= .5
    return s / tot


def champ(h, w, K, g, echelle=14, torsion=12, periode=7.5, angle=(0.6, 0.8)):
    qx = _fbm(h, w, echelle * K, g); qy = _fbm(h, w, echelle * K, g + 10)
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    f = _fbm(h, w, 11 * K, g + 20)
    mx = xx + torsion * K * (qx - .5) * 2; my = yy + torsion * K * (qy - .5) * 2
    s = .5 + .5 * np.sin((mx * angle[0] + my * angle[1]) / (periode * K) * 2 * np.pi + f * 9)
    s = cv2.GaussianBlur(s, (0, 0), K * .18); f = cv2.GaussianBlur(f, (0, 0), K * .18)
    return s, f


def niveaux(s, f):
    glow = s * .75 + f * .5
    return {"rouge_orange": glow > .78, "orange": glow > .92, "jaune": (s > .80) & (s < .90) & (f > .42)}


def vectoriser(m, K, decal, trou=None, aire_min=.05, tol=.9):
    m = (m.astype(np.uint8) * 255)
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))
    cs, _ = cv2.findContours(m, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    out = []
    for c in cs:
        if cv2.contourArea(c) < aire_min * K * K:
            continue
        ap = cv2.approxPolyDP(c, tol, True)
        if len(ap) >= 3:
            out.append([[round(float(p[0][0]) / K - decal, 2), round(float(p[0][1]) / K - decal, 2)] for p in ap])
    return out


def main():
    a = argparse.ArgumentParser()
    a.add_argument("sortie"); a.add_argument("--largeur", type=float, default=65); a.add_argument("--hauteur", type=float, default=90)
    a.add_argument("--fp", type=float, default=3.5); a.add_argument("--graine", type=int, default=8)
    a.add_argument("--trou", type=float, nargs=4); a.add_argument("--k", type=int, default=12)
    x = a.parse_args()
    K = x.k; W = int((x.largeur + 2 * x.fp) * K); H = int((x.hauteur + 2 * x.fp) * K)
    s, f = champ(H, W, K, x.graine)
    nv = niveaux(s, f)
    if x.trou:
        x0, y0, x1, y1 = [(v + x.fp) * K for v in x.trou]
        for m in nv.values():
            m[int(y0):int(y1), int(x0):int(x1)] = False
    res = {k: vectoriser(m, K, x.fp) for k, m in nv.items()}
    json.dump(res, open(x.sortie, "w"))
    print({k: (len(v), sum(len(p) for p in v)) for k, v in res.items()})


if __name__ == "__main__":
    main()
