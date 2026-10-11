#!/usr/bin/env python3
"""Géométrie du recto « SPECIAL CARDDASS » (cadre à piliers) : 65 × 90 mm.

  python3 outils/special_carddass.py sortie.json

Cotes relevées sur la photo redressée (côté droit, recadrages haute résolution), recentrées sur l'axe
du cadre (décalage d'impression de l'original : 0,475 mm), puis symétrisées (miroir x → 65 − x).
Seules les cannelures des piliers sont propres à chaque côté (relevées séparément, comme sur l'original).
"""
import json, sys
from shapely.geometry import box, Point, Polygon
from shapely.ops import unary_union
from shapely import affinity

L, H = 65.0, 90.0
BL = 3.0  # fond perdu


def miroir(g):
    return affinity.scale(g, xfact=-1, yfact=1, origin=(L / 2, 0))


def sym(g):
    return unary_union([g, miroir(g)])


def rr(x0, y0, x1, y1, r):
    """Rectangle à coins arrondis."""
    if r <= 0:
        return box(x0, y0, x1, y1)
    return box(x0 + r, y0 + r, x1 - r, y1 - r).buffer(r, resolution=12, join_style=1)


def adoucir(g, r):
    """Arrondit angles saillants et rentrants (fermeture puis ouverture)."""
    return g.buffer(r, resolution=8).buffer(-2 * r, resolution=8).buffer(r, resolution=8)


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
    FR = 60.025                      # bord extérieur du cadre noir (droite) ; gauche = 4.975
    D1 = (61.465, 5.94)              # médaillon haut droit (disque)
    D2 = (60.075, 87.05)             # médaillon bas droit (disque)

    # ---------- bandeau SPECIAL CARDDASS ----------
    trou_n = sym(Point(*D1).buffer(2.54, resolution=48))
    trou_b = sym(Point(*D1).buffer(3.10, resolution=48))
    bande_n = rr(L - FR, 1.5, FR, 9.75, 0.3).difference(trou_n)
    bande_b = rr(L - FR + 0.85, 2.55, FR - 0.85, 8.95, 0.2).difference(trou_b)
    G["bande_noir"] = anneaux(bande_n)
    G["bande_bleu"] = anneaux(bande_b)

    # ---------- piliers : chapiteaux (haut / bas) ----------
    E = L + BL
    chap_h = box(FR - 0.1, 12.55, E, 16.45).difference(unary_union([
        rr(FR + 0.10, 12.95, E + 1, 13.95, 0.2), rr(FR + 0.60, 14.35, E + 1, 16.05, 0.2)]))
    chap_b = box(FR - 0.1, 79.0, E, 84.0).difference(unary_union([
        rr(FR + 0.50, 79.30, E + 1, 80.90, 0.25), rr(FR + 0.20, 81.40, E + 1, 82.30, 0.25),
        rr(FR - 0.80, 82.80, E + 1, 83.60, 0.25)]))
    chap = sym(unary_union([chap_h, chap_b]))
    # cannelures : bandes noires propres à chaque côté (relevées séparément)
    canD = [(60.225, 60.725), (61.275, 61.625), (62.375, 62.775), (63.775, 64.075)]
    canG = [(4.325, 4.775), (3.125, 3.525), (1.625, 2.025), (0.175, 0.675)]
    cannelures = unary_union([box(a, 16.3, b, 79.15) for a, b in canD + canG])

    # ---------- fenêtre : cadre noir, bordure bleue, image ----------
    haut = rr(L - 58.925, 10.7, 58.925, 13.0, 0.3)
    corps = box(L - FR, 12.55, FR, 85.0)
    marche_b = box(L - 59.225, 82.8, 59.225, 85.0)
    cadre_n = sym(unary_union([haut, corps, marche_b]))
    bleu = unary_union([
        rr(L - 58.675, 11.65, 58.675, 84.5, 0.35),
        rr(58.45, 13.40, 59.375, 14.60, 0.55),            # oreille haute
        rr(58.45, 79.20, 59.725, 80.60, 0.65),            # oreille basse
        rr(58.45, 80.30, 58.925, 82.45, 0.20),            # renflement
    ])
    bleu = sym(adoucir(bleu.difference(box(58.125, 82.45, 70, 90)), 0.12))
    bleu = sym(unary_union([bleu, rr(L - 58.125, 82.0, 58.125, 84.5, 0.5)]))
    img = rr(L - 57.275, 13.3, 57.275, 82.6, 3.0)
    G["fenetre"] = [L - 57.275, 13.3, 57.275, 82.6]
    G["fenetre_rayon"] = 3.0
    G["noir"] = anneaux(unary_union([cadre_n, chap, cannelures]))
    G["bleu"] = anneaux(bleu)
    G["filet_image"] = anneaux(img.buffer(0.25, resolution=16).difference(img))

    # ---------- socle sous la fenêtre ----------
    socle = sym(unary_union([box(56.375, 84.9, 56.725, 89.1), box(L / 2, 87.3, 56.725, 87.65),
                             box(L / 2, 88.75, 56.725, 89.1)]))
    G["socle"] = anneaux(socle)

    # ---------- médaillons ----------
    med_h = Polygon([(61.125, 2.4), (61.125, 4.6), (61.375, 7.3), (61.375, 10.2), (62.725, 11.5),
                     (64.025, 9.8), (64.025, 2.45), (63.6, 1.6), (61.7, 1.6)]).buffer(0.12, join_style=1).buffer(-0.12)
    med_h = adoucir(med_h, 0.25)
    G["med_haut"] = anneaux(sym(med_h))
    hl_h = [(61.55, 2.25, 62.85, 2.95, 0.3), (61.70, 3.30, 62.05, 4.10, 0.17),
            (61.85, 7.15, 63.20, 7.60, 0.22), (62.00, 7.85, 63.10, 8.30, 0.22),
            (61.85, 8.60, 63.00, 9.10, 0.24), (62.65, 9.55, 63.10, 10.05, 0.2)]
    G["med_haut_reflets"] = anneaux(sym(unary_union([rr(*h) for h in hl_h])))
    G["med_bas"] = anneaux(sym(rr(58.075, 85.3, 63.525, 89.0, 0.9)))
    hl_b = [(62.025, 86.10, 62.825, 86.60, 0.25), (62.425, 86.80, 62.725, 87.30, 0.15),
            (59.025, 88.00, 59.425, 88.60, 0.2)]
    G["med_bas_reflets"] = anneaux(sym(unary_union([rr(*h) for h in hl_b])))
    G["disques"] = [[D1[0], D1[1]], [L - D1[0], D1[1]], [D2[0], D2[1]], [L - D2[0], D2[1]]]
    G["disque_r"] = [1.52, 1.52, 1.44, 1.44]
    G["disque_anneau"] = 0.13

    # ---------- étoiles du bandeau ----------
    import math
    et = []
    for cx in (55.8, L - 55.8):
        R, r = 1.0, 0.42
        et.append([[round(cx + (R if k % 2 == 0 else r) * math.sin(math.radians(36 * k)), 3),
                    round(5.55 - (R if k % 2 == 0 else r) * math.cos(math.radians(36 * k)), 3)] for k in range(10)])
    G["etoiles"] = et

    # ---------- macaron WEEKLY JUMP (étoile à 20 pointes, elliptique) ----------
    cx, cy, rx, ry, n = 10.25, 80.85, 7.3, 6.35, 20
    pts = []
    for k in range(2 * n):
        a = math.radians(-99 + 180 * k / n)
        f = 1.0 if k % 2 == 0 else 0.835
        pts.append([round(cx + rx * f * math.cos(a), 3), round(cy + ry * f * math.sin(a), 3)])
    G["macaron"] = pts
    G["macaron_ombre"] = [0.35, 0.3]
    return G


if __name__ == "__main__":
    G = construire()
    json.dump(G, open(sys.argv[1], "w"), ensure_ascii=False)
    print({k: (len(v) if isinstance(v, list) else v) for k, v in G.items()})
