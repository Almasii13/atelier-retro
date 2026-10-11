#!/usr/bin/env python3
"""Géométrie du recto « SPECIAL CARDDASS » (cadre à piliers) : 65 × 90 mm.

  python3 outils/special_carddass.py sortie.json

Cotes relevées sur les gros plans des coins droits (haut / bas) recalés sur la carte (80 px/mm),
dans le repère recentré (décalage d'impression de l'original : 0,475 mm). Seule la moitié droite
est décrite ; la moitié gauche est son miroir (x → 65 − x).
"""
import json, math, sys
from shapely.geometry import box, Point, Polygon, LineString
from shapely.ops import unary_union
from shapely import affinity

L, H = 65.0, 90.0
BL = 3.0
AX = L / 2


def miroir(g):
    return affinity.scale(g, xfact=-1, yfact=1, origin=(AX, 0))


def sym(g):
    return unary_union([g, miroir(g)])


def rr(x0, y0, x1, y1, r):
    if r <= 0:
        return box(x0, y0, x1, y1)
    return box(x0 + r, y0 + r, x1 - r, y1 - r).buffer(r, resolution=12, join_style=1)


def rr4(x0, y0, x1, y1, r_hg, r_hd, r_bd, r_bg, n=10):
    """Rectangle à rayons de coins différents (haut-gauche, haut-droit, bas-droit, bas-gauche)."""
    pts = []
    for (cx, cy, r, a0) in ((x1 - r_hd, y0 + r_hd, r_hd, -90), (x1 - r_bd, y1 - r_bd, r_bd, 0),
                            (x0 + r_bg, y1 - r_bg, r_bg, 90), (x0 + r_hg, y0 + r_hg, r_hg, 180)):
        for k in range(n + 1):
            a = math.radians(a0 + 90 * k / n)
            pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return Polygon(pts)


def lisse(pts, r=0.12):
    """Polygone relevé point par point, angles légèrement adoucis (tracé à la main de l'original)."""
    return Polygon(pts).buffer(r, resolution=8).buffer(-2 * r, resolution=8).buffer(r, resolution=8)


def anneaux(g, nd=3):
    out = []
    for p in getattr(g, "geoms", [g]):
        if p.is_empty or p.geom_type != "Polygon":
            continue
        for ring in [p.exterior] + list(p.interiors):
            out.append([[round(x, nd), round(y, nd)] for x, y in list(ring.coords)[:-1]])
    return out


def construire():
    G = {}
    D1, R1 = (61.42, 5.88), 1.55          # disque haut droit
    D2, R2 = (60.08, 86.95), 1.38         # disque bas droit
    MARGE = 64.15                         # fin des chapiteaux (marge argent au-delà)

    # ---------------- bandeau SPECIAL CARDDASS ----------------
    b_n = rr(AX - 1, 1.53, 59.88, 9.58, 0.2).difference(Point(*D1).buffer(2.80, resolution=64))
    b_b = rr(AX - 1, 2.68, 59.20, 9.27, 0.15).difference(Point(*D1).buffer(3.30, resolution=64))
    G["bande_noir"] = anneaux(sym(b_n))
    G["bande_bleu"] = anneaux(sym(b_b))

    # ---------------- cadre noir (fenêtre, chapiteaux, socle) ----------------
    cadre = Polygon([
        (AX, 10.75), (58.95, 10.75), (59.05, 10.85), (59.10, 11.40), (59.12, 12.20), (59.25, 12.52), (59.45, 12.66),
        (60.08, 12.68), (60.08, 13.80), (60.22, 13.95), (60.42, 14.20), (60.60, 14.60), (60.67, 15.00), (60.63, 15.50),
        (60.58, 16.15), (MARGE, 16.15), (MARGE, 16.55), (59.70, 16.55),
        (59.70, 78.72), (MARGE, 78.72), (MARGE, 83.96), (58.08, 83.96),
        (57.80, 84.50), (57.45, 85.00), (56.70, 85.50), (56.27, 86.00), (56.27, H + BL), (55.97, H + BL), (55.95, 86.00),
        (55.88, 85.50), (55.50, 85.00), (55.38, 84.60), (55.38, 83.05), (AX, 83.00)])
    trous = unary_union([rr(60.60, 79.15, MARGE + 1, 81.08, 0.15), rr(60.15, 81.55, MARGE + 1, 82.25, 0.12),
                         rr(59.05, 82.74, MARGE + 1, 83.62, 0.12)])
    cadre = cadre.difference(trous)
    filets_haut = unary_union([box(60.0, 12.68, MARGE, 12.88), box(60.25, 14.03, MARGE, 14.28)])
    cannelures = unary_union([box(a, 16.4, b, 78.85) for a, b in ((60.02, 60.43), (60.98, 61.33), (62.01, 62.47), (63.33, 63.82))])
    socle = unary_union([box(AX, 85.06, 56.1, 85.28), box(AX, 87.38, 56.1, 87.60), box(AX, 88.77, 56.1, 89.03)])
    G["noir"] = anneaux(sym(unary_union([cadre, filets_haut, cannelures, socle])))

    # ---------------- bordure bleue ----------------
    bleu = lisse([
        (AX, 11.72), (58.05, 11.72), (58.30, 11.85), (58.35, 12.10), (58.35, 13.00), (58.55, 13.22), (59.10, 13.30),
        (59.12, 14.05), (59.35, 14.25), (59.65, 14.50), (59.83, 14.90), (59.85, 15.30), (59.75, 15.70), (59.48, 16.00),
        (59.10, 16.25), (58.90, 16.50),
        (58.90, 78.95), (59.30, 79.20), (59.70, 79.60), (59.90, 80.10), (59.88, 80.55), (59.70, 80.85), (59.30, 81.00),
        (59.08, 81.15), (59.08, 81.75), (58.90, 82.05), (58.40, 82.20), (58.08, 82.40), (58.03, 83.25), (57.90, 83.50),
        (57.35, 83.60), (57.10, 83.75), (57.00, 84.15), (56.80, 84.48), (56.50, 84.60), (55.60, 84.60), (55.40, 84.40),
        (55.36, 83.50), (55.40, 83.05), (AX, 83.00)], 0.1)
    G["bleu"] = anneaux(sym(bleu))

    # ---------------- fenêtre et son filet ----------------
    F = [L - 57.30, 13.45, 57.30, 83.05]; RF = 2.5
    G["fenetre"], G["fenetre_rayon"] = F, RF
    img = rr(*F, RF)
    filet = img.buffer(0.27, resolution=16).difference(img).difference(box(L - 55.38, 82.9, 55.38, 84))
    G["filet_image"] = anneaux(filet)

    # ---------------- médaillon haut (« trou de serrure ») ----------------
    med_h = lisse([(61.25, 1.75), (62.00, 1.82), (62.60, 2.05), (63.15, 2.50), (63.50, 3.00), (63.73, 4.00), (63.85, 5.00),
                   (63.88, 5.90), (63.85, 7.00), (63.82, 8.00), (63.86, 9.00), (63.88, 9.40), (63.85, 9.80), (63.65, 10.20),
                   (63.33, 10.60), (62.98, 11.00), (62.70, 11.45), (62.27, 11.00), (61.92, 10.60), (61.52, 10.20),
                   (61.33, 9.80), (61.35, 9.00), (61.38, 8.40), (61.30, 4.20), (61.27, 2.00)], 0.08)
    coupe_h = Point(*D1).buffer(R1 + 0.04, resolution=64)
    med_h = med_h.difference(coupe_h)
    refl_h = unary_union([
        LineString([(61.55, 2.50), (62.15, 2.72), (62.55, 3.25), (62.78, 4.10), (63.10, 4.95)]).buffer(0.17, cap_style=1),
        LineString([(61.62, 3.20), (61.85, 3.70), (61.80, 4.05)]).buffer(0.16, cap_style=1),
        Polygon([(61.55, 7.30), (63.05, 7.20), (63.05, 8.08), (61.65, 8.10)]),
        rr(61.80, 8.30, 63.12, 8.62, 0.14),
        lisse([(61.65, 8.85), (63.17, 8.85), (63.10, 9.40), (62.80, 9.45), (62.45, 9.85), (61.80, 9.90), (61.62, 9.40)], 0.1),
        rr(62.40, 10.05, 63.12, 10.40, 0.15)]).difference(coupe_h.buffer(0.18))
    refl_h = refl_h.intersection(med_h.buffer(-0.12))

    # ---------------- médaillon bas ----------------
    med_b = lisse([(59.00, 85.27), (63.00, 85.27), (63.38, 85.55), (63.45, 86.20), (63.30, 87.80), (62.90, 88.55), (62.30, 88.83), (58.50, 88.83), (58.10, 88.45), (58.12, 86.40), (58.40, 85.60)], 0.15).difference(Point(*D2).buffer(R2, resolution=64))
    refl_b = unary_union([rr(61.60, 85.55, 62.85, 85.92, 0.18),
                          Polygon([(62.30, 86.22), (62.85, 86.15), (62.85, 86.80), (62.40, 86.85)]).buffer(0.08),
                          Point(62.62, 87.15).buffer(0.13),
                          rr(58.40, 87.88, 58.78, 88.48, 0.18)]).intersection(med_b.buffer(-0.1))
    G["med_haut"] = anneaux(sym(med_h))
    G["med_haut_reflets"] = anneaux(sym(refl_h))
    G["med_bas"] = anneaux(sym(med_b))
    G["med_bas_reflets"] = anneaux(sym(refl_b))
    G["disques"] = [list(D1), [L - D1[0], D1[1]], list(D2), [L - D2[0], D2[1]]]
    G["disque_r"] = [R1, R1, R2, R2]
    G["disque_anneau"] = 0.13

    # ---------------- étoiles du bandeau ----------------
    et = []
    for cx in (55.8, L - 55.8):
        R, r = 1.0, 0.42
        et.append([[round(cx + (R if k % 2 == 0 else r) * math.sin(math.radians(36 * k)), 3),
                    round(5.55 - (R if k % 2 == 0 else r) * math.cos(math.radians(36 * k)), 3)] for k in range(10)])
    G["etoiles"] = et

    # ---------------- macaron WEEKLY JUMP (étoile à 20 pointes, elliptique) ----------------
    cx, cy, rx, ry, n = 10.25, 80.85, 7.3, 6.35, 20
    pts = []
    for k in range(2 * n):
        a = math.radians(-99 + 180 * k / n)
        f = 1.0 if k % 2 == 0 else 0.835
        pts.append([round(cx + rx * f * math.cos(a), 3), round(cy + ry * f * math.sin(a), 3)])
    G["macaron"] = pts
    G["macaron_ombre"] = [0.35, 0.3]
    G["socle"] = []
    return G


if __name__ == "__main__":
    G = construire()
    json.dump(G, open(sys.argv[1], "w"), ensure_ascii=False)
    print({k: (len(v) if isinstance(v, list) else v) for k, v in G.items()})
