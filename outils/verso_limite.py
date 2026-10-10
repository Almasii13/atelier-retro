#!/usr/bin/env python3
"""Géométrie du verso Carddass « 限 » (WEEKLY JUMP) : 65 × 90 mm, symétrique par demi-tour autour du centre.

  python3 outils/verso_limite.py sortie.json

Toutes les cotes en mm (page finie), relevées sur la photo redressée puis recentrées. Les diagonales suivent
un angle unique (normale à 46,6° : coordonnée s = x·cos a + y·sin a − s0, nulle au centre de la carte).
Seule la moitié haut-gauche est décrite ; l'autre moitié est sa rotation de 180°.
"""
import json, math, sys
from shapely.geometry import Polygon, LineString, box, Point
from shapely.ops import unary_union
from shapely import affinity

L, H = 65.0, 90.0
CX, CY = L / 2, H / 2
A = math.radians(46.6)
N = (math.cos(A), math.sin(A))          # normale aux diagonales
D = (math.sin(A), -math.cos(A))         # direction des diagonales (vers le haut-droite)
S0 = CX * N[0] + CY * N[1]
W0 = CX * D[0] + CY * D[1]
GRAND = 200.0


def bande_s(s1, s2):
    """Bande diagonale entre s1 et s2 (très longue)."""
    pts = []
    for s, w in ((s1, -GRAND), (s1, GRAND), (s2, GRAND), (s2, -GRAND)):
        u = s + S0; ww = w + W0
        pts.append((u * N[0] + ww * D[0], u * N[1] + ww * D[1]))
    return Polygon(pts)


def tranche_w(w1, w2):
    pts = []
    for w, s in ((w1, -GRAND), (w1, GRAND), (w2, GRAND), (w2, -GRAND)):
        u = s + S0; ww = w + W0
        pts.append((u * N[0] + ww * D[0], u * N[1] + ww * D[1]))
    return Polygon(pts)


def point_s_x(s, x):  # point de la diagonale s d'abscisse x
    return (x, (s + S0 - x * N[0]) / N[1])


def point_s_y(s, y):
    return ((s + S0 - y * N[1]) / N[0], y)


def demi_tour(g):
    return affinity.rotate(g, 180, origin=(CX, CY))


def sym(g):
    return unary_union([g, demi_tour(g)])


def polys(g, nd=3):
    """Géométrie shapely → liste d'anneaux [[x, y], ...] (les trous sont des anneaux à part : remplissage pair-impair)."""
    out = []
    geoms = getattr(g, "geoms", [g])
    for p in geoms:
        if p.is_empty or p.geom_type != "Polygon":
            continue
        for ring in [p.exterior] + list(p.interiors):
            out.append([[round(x, nd), round(y, nd)] for x, y in list(ring.coords)[:-1]])
    return out


def trait(points, ep, coupe=None):
    """Filet d'épaisseur ep le long d'une polyligne (angles vifs), coupé par un polygone de garde."""
    g = LineString(points).buffer(ep / 2, cap_style=2, join_style=2, mitre_limit=10)
    return g.intersection(coupe) if coupe is not None else g


def construire():
    G = {}
    EP = 0.86  # filets blancs
    # ---------------- cadre or (contour à crans), intérieur noir avec languettes or
    o = (3.3, 3.45, 61.7, 86.55); cr = (2.2, 2.05)
    ext = Polygon([(o[0] + cr[0], o[1]), (o[2] - cr[0], o[1]), (o[2] - cr[0], o[1] + cr[1]), (o[2], o[1] + cr[1]),
                   (o[2], o[3] - cr[1]), (o[2] - cr[0], o[3] - cr[1]), (o[2] - cr[0], o[3]), (o[0] + cr[0], o[3]),
                   (o[0] + cr[0], o[3] - cr[1]), (o[0], o[3] - cr[1]), (o[0], o[1] + cr[1]), (o[0] + cr[0], o[1] + cr[1])])
    inner = box(6.25, 6.4, L - 6.25, H - 6.4)
    S_A, S_C = -25.1, -18.9                       # étendue des trois bandes
    tab = bande_s(S_A, S_C).intersection(unary_union([box(0, 0, L, 8.0), box(0, 0, 8.1, H)]))
    trou = inner.difference(sym(tab))
    G["or"] = polys(ext.difference(trou))

    # ---------------- panneau crème (coin haut-gauche) + trame de points
    X0, Y0 = 7.85, 7.5
    zone = box(X0, Y0, L, H)
    creme = bande_s(-37.89, -26.54).intersection(zone)
    G["creme"] = polys(sym(creme))
    pts = []
    pas, rot = 0.5, math.radians(15)
    for gc in (creme, demi_tour(creme)):
        mini = gc.buffer(-0.12)
        x0, y0, x1, y1 = gc.bounds
        for i in range(-200, 200):
            for j in range(-200, 200):
                x = x0 + 0.13 + (i * math.cos(rot) - j * math.sin(rot)) * pas
                y = y0 + 0.17 + (i * math.sin(rot) + j * math.cos(rot)) * pas
                if x0 <= x <= x1 and y0 <= y <= y1 and mini.contains(Point(x, y)):
                    pts.append((round(x, 3), round(y, 3)))
    G["trame"] = pts

    # ---------------- coin : triangle orange + bande rouge
    coin = box(X0, Y0, 30, 30)
    G["coin_orange"] = polys(sym(bande_s(-80, -41.68).intersection(coin)))
    G["coin_rouge"] = polys(sym(bande_s(-40.99, -39.55).intersection(coin)))

    # ---------------- trois bandes à damier rouge / orange
    region = box(10.18, 9.4, L, H).difference(box(15.35, 28.9, L, H))
    region = region.intersection(box(0, 0, L, CY + 5))
    bandes = {"A": ((-25.1, -23.3), [-13.6, -5.38, -1.45, 7.9, 15.03], "o"),
              "B": ((-22.9, -21.1), [-16.08, -9.5, 0.17, 5.62, 11.38], "r"),
              "C": ((-20.75, -18.9), [-13.6, -1.45, 7.9, 13.78], "r")}
    dw = 0.893 - W0  # mesures (repère photo) → coordonnée w centrée
    rouge, orange = [], []
    for nom, ((s1, s2), bornes, debut) in bandes.items():
        b = bande_s(s1, s2).intersection(region)
        cuts = [-GRAND] + [x + dw for x in bornes] + [GRAND]
        c = debut
        for w1, w2 in zip(cuts, cuts[1:]):
            cell = b.intersection(tranche_w(w1, w2))
            if not cell.is_empty:
                (rouge if c == "r" else orange).append(cell)
            c = "o" if c == "r" else "r"
    G["bandes_rouge"] = polys(sym(unary_union(rouge)))
    G["bandes_orange"] = polys(sym(unary_union(orange)))

    # ---------------- filets blancs
    XV, YH = L - 7.97, 7.75                 # verticale droite, horizontale haute (axes des filets)
    S_W, S_2 = -17.15, -1.0                 # diagonales des filets
    car = (15.9, 29.45, L - 15.9, H - 29.45)  # carré blanc (bord extérieur)
    jeu = 0.55
    # W1 : diagonale S_W → horizontale → verticale → diagonale S_2, extrémités coupées à y = car[1] − jeu
    p1 = point_s_y(S_W, car[1]); c1 = point_s_y(S_W, YH); c2 = (XV, YH); c3 = point_s_x(S_2, XV); p4 = point_s_y(S_2, car[1])
    def prolonge(a, b, k=3.0):
        dx, dy = a[0] - b[0], a[1] - b[1]; n = math.hypot(dx, dy); return (a[0] + dx / n * k, a[1] + dy / n * k)
    w1 = trait([prolonge(p1, c1), c1, c2, c3, prolonge(p4, c3)], EP, box(0, 0, L, car[1] - jeu))
    # W2 (+ demi-tour de W3) : diagonale +1 depuis le carré → verticale droite → diagonale S_W (miroir) vers le carré
    q0 = point_s_x(-S_2, car[2] + jeu); q1 = point_s_x(-S_2, XV)
    q2 = point_s_x(-S_W, XV); q3 = point_s_x(-S_W, car[2] + jeu)
    w2 = trait([prolonge(q0, q1), q1, q2, prolonge(q3, q2)], EP, box(car[2] + jeu, 0, L, H))
    cadre = box(*car).difference(box(car[0] + EP, car[1] + EP, car[2] - EP, car[3] - EP))
    G["blanc"] = polys(unary_union([sym(w1), sym(w2), cadre]))
    G["carre_or"] = [18.17, 31.72, L - 18.17, H - 31.72]

    # ---------------- boule à deux étoiles (haut droite) et disque « 二 » (bas gauche)
    G["boule"] = {"c": [48.83, 17.1], "r": 6.2}
    G["disque"] = {"c": [L - 48.83, H - 17.1], "r": 6.2}
    etoiles = []
    for cy in (17.1 - 2.37, 17.1 + 2.37):
        R, r = 1.6, 0.62
        pts = [(48.83 + (R if k % 2 == 0 else r) * math.cos(math.radians(-90 + 36 * k)),
                (R if k % 2 == 0 else r) * math.sin(math.radians(-90 + 36 * k))) for k in range(10)]
        ys = [p[1] for p in pts]; dy = cy - (min(ys) + max(ys)) / 2   # centrage sur la boîte d'encre
        etoiles.append([[round(x, 3), round(y + dy, 3)] for x, y in pts])
    G["etoiles"] = etoiles
    return G


if __name__ == "__main__":
    G = construire()
    json.dump(G, open(sys.argv[1], "w"), ensure_ascii=False)
    print({k: (len(v) if isinstance(v, list) else v) for k, v in G.items()})
