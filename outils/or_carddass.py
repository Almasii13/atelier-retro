#!/usr/bin/env python3
"""Outils de reproduction des cadres dorés « 3D » des cartes Carddass (fenêtre à points).

Le cadre est un anneau entre deux rectangles arrondis (bord extérieur → fenêtre), découpé en sous-anneaux
(bordure, gorge, biseau…) puis en 4 pièces par sous-anneau (coupe en onglet aux coins). Chaque pièce reçoit un
dégradé linéaire le long de son côté, dont les arrêts sont échantillonnés sur la photo redressée (40 px/mm) :
c'est ce qui reproduit les reflets métalliques. Les éclairs sont des polygones à facettes, dégradés de la même
façon le long de leur axe. Toutes les cotes en mm dans le repère de la photo.
"""
import math
import numpy as np
import cv2
from shapely.geometry import Polygon, MultiPolygon
from shapely.ops import unary_union

K = 40  # px/mm des photos redressées


def rrect(b, r, n=10):
    """Rectangle arrondi b=[x0,y0,x1,y1], rayons r=(hg, hd, bd, bg) → liste de points (sens horaire)."""
    x0, y0, x1, y1 = b
    if not isinstance(r, (list, tuple)):
        r = (r, r, r, r)
    pts = []
    for (cx, cy, a0, rr) in ((x0 + r[0], y0 + r[0], 180, r[0]), (x1 - r[1], y0 + r[1], 270, r[1]),
                             (x1 - r[2], y1 - r[2], 0, r[2]), (x0 + r[3], y1 - r[3], 90, r[3])):
        for k in range(n + 1):
            a = math.radians(a0 + 90 * k / n)
            pts.append((cx + rr * math.cos(a), cy + rr * math.sin(a)))
    return pts


def interp(n0, n1, t):
    b = [n0[0][i] + (n1[0][i] - n0[0][i]) * t for i in range(4)]
    r0 = n0[1] if isinstance(n0[1], (list, tuple)) else [n0[1]] * 4
    r1 = n1[1] if isinstance(n1[1], (list, tuple)) else [n1[1]] * 4
    return (b, [r0[i] + (r1[i] - r0[i]) * t for i in range(4)])


def niveaux(liste):
    """liste = [(boite, rayons, nb_sous_anneaux_jusqu'au_suivant), …, (boite, rayons)] → niveaux successifs."""
    res = []
    for i in range(len(liste) - 1):
        n0, n1, k = (liste[i][0], liste[i][1]), (liste[i + 1][0], liste[i + 1][1]), liste[i][2]
        for j in range(k):
            res.append(interp(n0, n1, j / k))
    res.append((liste[-1][0], liste[-1][1]))
    return res


def coins_rect(b):
    return [(b[0], b[1]), (b[2], b[1]), (b[2], b[3]), (b[0], b[3])]


def coins_onglet(ext, inte):
    """Quatre secteurs (haut, droite, bas, gauche) délimités par les droites coin extérieur → coin de fenêtre."""
    E, I = coins_rect(ext), coins_rect(inte)
    cy = (inte[1] + inte[3]) / 2
    loin = [(E[k][0] + 20 * (E[k][0] - I[k][0]), E[k][1] + 20 * (E[k][1] - I[k][1])) for k in range(4)]

    def a_y(k, y):  # point de la droite d'onglet k à l'ordonnée y
        (xa, ya), (xb, yb) = E[k], I[k]
        return (xa + (xb - xa) * (y - ya) / (yb - ya), y)
    Q = [a_y(k, cy) for k in range(4)]
    return {"haut": Polygon([loin[0], loin[1], Q[1], Q[0]]), "droite": Polygon([loin[1], loin[2], Q[2], Q[1]]),
            "bas": Polygon([loin[2], loin[3], Q[3], Q[2]]), "gauche": Polygon([loin[3], loin[0], Q[0], Q[3]])}


def poly_pts(g):
    if isinstance(g, MultiPolygon):
        g = max(g.geoms, key=lambda p: p.area)
    g = g.simplify(0.004)
    return [(round(x, 3), round(y, 3)) for x, y in list(g.exterior.coords)[:-1]]


def masque(img_shape, polys, erosion=0):
    m = np.zeros(img_shape[:2], np.uint8)
    for p in polys:
        cv2.fillPoly(m, [np.round(np.array(p) * K - 0.5).astype(np.int32)], 255)
    if erosion:
        m = cv2.erode(m, np.ones((2 * erosion + 1, 2 * erosion + 1), np.uint8))
    return m > 0


def hexa(c):
    return "#%02x%02x%02x" % tuple(int(round(max(0, min(255, v)))) for v in c)


def simplifier(pos, cols, tol=7.0):
    """Arrêts minimaux : on garde un point si l'interpolation linéaire entre les points gardés s'en écarte de > tol."""
    garde = [0, len(pos) - 1]

    def pire(i, j):
        best, bi = 0, None
        for k in range(i + 1, j):
            t = (pos[k] - pos[i]) / max(pos[j] - pos[i], 1e-9)
            e = np.abs(cols[k] - (cols[i] + (cols[j] - cols[i]) * t)).max()
            if e > best:
                best, bi = e, k
        return best, bi
    pile = [(0, len(pos) - 1)]
    while pile:
        i, j = pile.pop()
        e, k = pire(i, j)
        if k is not None and e > tol:
            garde.append(k); pile += [(i, k), (k, j)]
    return sorted(set(garde))


def echantillonner(img, poly, angle_css, exclus=None, pas=0.12, larg=0.16, erosion=2, tol=7.0, lissage=1):
    """Dégradé linéaire d'une pièce : couleurs médianes par tranches perpendiculaires à la direction angle_css
    (0 = vers le haut, 90 = vers la droite…). Retourne (boîte, angle, [(pourcentage, couleur)])."""
    P = Polygon(poly)
    x0, y0, x1, y1 = P.bounds
    m = masque(img.shape, [poly], erosion)
    if exclus is not None:
        m &= ~exclus
    t = math.radians(angle_css)
    d = np.array([math.sin(t), -math.cos(t)])
    w, h = x1 - x0, y1 - y0
    Lg = abs(w * d[0]) + abs(h * d[1])
    c = np.array([(x0 + x1) / 2, (y0 + y1) / 2])
    ys, xs = np.where(m)
    if len(xs) < 5:
        m = masque(img.shape, [poly], 0)
        if exclus is not None:
            m &= ~exclus
        ys, xs = np.where(m)
    if len(xs) < 5:
        return (x0, y0, x1, y1), angle_css, [(0, "#b08840"), (100, "#b08840")]
    pm = np.stack([(xs + .5) / K, (ys + .5) / K], 1)
    tt = ((pm - c) @ d) / Lg + 0.5
    vals = img[ys, xs][:, ::-1].astype(float)
    pos, cols = [], []
    for a in np.arange(0, 1 + 1e-9, pas / Lg):
        s = np.abs(tt - a) < (larg / Lg) / 2
        if s.sum() >= 3:
            pos.append(a); cols.append(np.median(vals[s], 0))
    if not pos:
        med = np.median(vals, 0)
        return (x0, y0, x1, y1), angle_css, [(0, hexa(med)), (100, hexa(med))]
    pos, cols = np.array(pos), np.array(cols)
    if lissage and len(cols) > 4:
        k = np.array([1, 2, 1]) / 4
        cols = np.stack([np.convolve(np.pad(cols[:, i], 1, mode="edge"), k, "valid") for i in range(3)], 1)
    # étendre aux bords de la boîte
    if pos[0] > 0:
        pos = np.r_[0, pos]; cols = np.r_[cols[:1], cols]
    if pos[-1] < 1:
        pos = np.r_[pos, 1]; cols = np.r_[cols, cols[-1:]]
    g = simplifier(pos, cols, tol)
    while len(g) > 28:  # Photoshop : dégradés raisonnables (≤ 28 arrêts) — on relâche la tolérance
        tol *= 1.25
        g = simplifier(pos, cols, tol)
    return (x0, y0, x1, y1), angle_css, [(round(float(pos[i]) * 100, 2), hexa(cols[i])) for i in g]


ANGLES = {"haut": 90, "bas": 90, "gauche": 180, "droite": 180}


def cadre(img, liste_niveaux, exclus=None, nom="Cadre", tol=7.0):
    """Pièces dégradées du cadre : [{nom, pts, boite, angle, stops}]."""
    N = niveaux(liste_niveaux)
    secteurs = coins_onglet(N[0][0], N[-1][0])
    pieces = []
    for k in range(len(N) - 1):
        anneau = Polygon(rrect(*N[k])).difference(Polygon(rrect(*N[k + 1])))
        for cote, sec in secteurs.items():
            g = anneau.intersection(sec)
            if g.is_empty:
                continue
            pts = poly_pts(g)
            boite, ang, stops = echantillonner(img, pts, ANGLES[cote], exclus, tol=tol)
            pieces.append({"nom": f"{nom} – anneau {k + 1} – {cote}", "pts": pts, "boite": [round(v, 3) for v in Polygon(pts).bounds],
                           "angle": ang, "stops": stops})
    return pieces


def eclair(A, K1, K2, B, l1, l2=None):
    """Éclair en zigzag : axe A → K1 → K2 → B, demi-largeur l1 aux coudes (pointes effilées en A et B).
    Retourne les facettes (claire = côté haut-droit, sombre = côté bas-gauche) et le contour complet."""
    l2 = l1 if l2 is None else l2
    A, K1, K2, B = map(np.array, (A, K1, K2, B))
    v = B - A; v = v / np.linalg.norm(v)
    n = np.array([v[1], -v[0]])  # normale côté haut-droit
    U1, U2 = K1 + n * l1, K2 + n * l2
    L1, L2 = K1 - n * l1, K2 - n * l2
    r = lambda p: (round(float(p[0]), 3), round(float(p[1]), 3))
    contour = [r(A), r(U1), r(U2), r(B), r(L2), r(L1)]
    clair = [r(A), r(U1), r(U2), r(B), r(K2), r(K1)]
    sombre = [r(A), r(K1), r(K2), r(B), r(L2), r(L1)]
    ang = math.degrees(math.atan2(v[0], -v[1]))  # angle CSS de la direction A → B
    return {"contour": contour, "clair": clair, "sombre": sombre, "angle": round(ang, 2)}


def vers_portrait(pts, H=90):
    """Repère paysage (u, v) de la carte B → page portrait (x, y) = (v, H − u)."""
    return [(round(v, 3), round(H - u, 3)) for u, v in pts]
