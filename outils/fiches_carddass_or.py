#!/usr/bin/env python3
"""Fiches des deux cartes Carddass à cadre doré « 3D » et fenêtre à points SPECIAL.

  python3 outils/fiches_carddass_or.py

  A : carte custom 孫悟空 超サイヤ人 (portrait) — bande blanche + texte horizontal tourné de 90° à furigana,
      fenêtre prisme or, plaque 超, cadre doré SPECIAL, éclairs.
  B : carte n° 500 三大超サイヤ人 (dessin paysage dans une carte portrait) — bandeau prisme lavande + citation,
      fenêtre prisme bleue, étiquette ⑤⓪⓪, encadré violet + DP850, médaille 超, cadre doré à gorge, éclairs.

Cotes relevées sur les photos redressées à 40 px/mm (ref/). Le cadre doré et les éclairs sont échantillonnés
automatiquement sur la photo (outils/or_carddass.py) : chaque pièce reçoit le dégradé de reflets mesuré.
La carte B est mesurée dans son repère de lecture paysage (u, v) puis convertie en portrait : (x, y) = (v, 90 − u).
"""
import json, math, pathlib, sys
import numpy as np
import cv2
from shapely.geometry import Polygon, Point

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from or_carddass import (K, rrect, cadre, echantillonner, masque, hexa, vers_portrait)  # noqa: E402

D = pathlib.Path(__file__).resolve().parent.parent / "creations" / "2026-11_cartes-carddass-or"
REF = D / "ref"
(D / "images").mkdir(exist_ok=True)
IMG_A = cv2.imread(str(REF / "a_redressee.png"))
IMG_B = cv2.imread(str(REF / "b_redressee_paysage.png"))


def med(img, b, filtre=None):
    """Couleur médiane d'une zone [x0, y0, x1, y1] (mm)."""
    c = img[int(b[1] * K):int(b[3] * K), int(b[0] * K):int(b[2] * K)].reshape(-1, 3)[:, ::-1].astype(float)
    if filtre is not None:
        c = c[filtre(c)]
    return hexa(np.median(c, 0))


def r3(p):
    return [round(float(p[0]), 3), round(float(p[1]), 3)]


# --------------------------------------------------------------------------- éclairs (zigzag à facettes)
# Gabarit relevé sur l'éclair bas-droit de la carte A : A (pointe), Un/Uo (coude haut : creux / saillant),
# B (pointe), Ln/Lo (coude bas). Les autres éclairs en sont des similitudes (A, B mesurés), « ecrase »
# amincit perpendiculairement à l'axe.
GAB_1 = [(45.54, 84.61), (48.0, 85.53), (48.43, 85.39), (50.65, 87.65), (47.86, 86.85), (47.43, 86.71)]
GAB_2 = [(48.36, 84.19), (50.65, 85.05), (51.14, 84.87), (53.95, 87.6), (50.85, 86.72), (50.4, 86.88)]


def similitude(P, A2, B2, ecrase=1.0):
    A, B = complex(*P[0]), complex(*P[3])
    a2, b2 = complex(*A2), complex(*B2)
    s = (b2 - a2) / (B - A)
    out = []
    for p in P:
        z = complex(*p) - A
        if ecrase != 1:  # amincissement dans le repère de l'axe
            ax = (B - A) / abs(B - A)
            w = z / ax
            z = complex(w.real, w.imag * ecrase) * ax
        q = z * s + a2
        out.append((q.real, q.imag))
    return out


def facettes(P):
    """4 facettes : lame 1 (claire / sombre), lame 2 (claire / sombre). Arête de la lame 1 : A → K1 ; arête de la
    lame 2 : K1 → B (le coude appartient à la lame 2). Retour : [(nom, pts, direction du dégradé)]"""
    A, Un, Uo, B, Ln, Lo = [np.array(p) for p in P]
    K1 = (Un + Lo) / 2
    return [("lame 1 – face claire", [A, Un, K1], (A, K1)), ("lame 1 – face sombre", [A, K1, Lo], (A, K1)),
            ("lame 2 – face claire", [Un, Uo, B, K1], (K1, B)), ("lame 2 – face sombre", [K1, B, Ln, Lo], (K1, B))]


def angle_css(a, b):
    v = np.array(b) - np.array(a)
    return math.degrees(math.atan2(v[0], -v[1]))


def eclairs(img, liste, nom, conv=None, contour=None):
    """Éléments « deg » des facettes (+ contour sombre éventuel) ; conv : conversion vers le portrait."""
    el = []
    for i, P in enumerate(liste):
        if contour:
            g = Polygon(P).buffer(contour[0], join_style=2, mitre_limit=3)
            pc = [r3(p) for p in list(g.exterior.coords)[:-1]]
            el.append({"k": "poly", "g": nom, "n": f"{nom} {i + 1} – contour", "c": contour[1],
                       "p": conv(pc) if conv else pc})
        for fn, pts, (a, b) in facettes(P):
            pts = [r3(p) for p in pts]
            ang = angle_css(a, b)
            _, _, stops = echantillonner(img, pts, ang, None, pas=0.08, larg=0.14, erosion=1, tol=9)
            if conv:
                pts, ang = conv(pts), ang - 90
            bx = [round(v, 3) for v in Polygon(pts).bounds]
            el.append({"k": "deg", "g": nom, "n": f"{nom} {i + 1} – {fn}", "b": bx, "p": pts, "a": round(ang, 2), "s": stops})
    return el


def pieces_el(pieces, nom, conv=None):
    el = []
    for p in pieces:
        pts, ang = p["pts"], p["angle"]
        if conv:
            pts, ang = conv(pts), ang - 90
        # léger débord (0,04 mm) : les pièces voisines se recouvrent, pas de filet sombre d'anticrénelage aux joints
        g = Polygon(pts).buffer(0.04, join_style=2, mitre_limit=2)
        pts = [r3(q) for q in list(g.exterior.coords)[:-1]]
        bx = [round(v, 3) for v in Polygon(pts).bounds]
        el.append({"k": "deg", "g": nom, "n": p["nom"], "b": bx, "p": pts, "a": ang, "s": p["stops"]})
    return el


def points(chemin, larg, haut, pas_x, pas_y, phase, d, coul, fond, z=40, rot_ccw=False):
    """Trame de points en quinconce (PNG). larg/haut en mm, phase = un centre de point (mm, repère de l'image)."""
    S = 4  # sur-échantillonnage (anticrénelage)
    W, H = int(round(larg * z)), int(round(haut * z))
    im = np.zeros((H * S, W * S, 3), np.uint8); im[:] = fond[::-1]
    r = d / 2 * z * S
    j0 = math.floor((0 - phase[1]) / pas_y) - 1
    j1 = math.ceil((haut - phase[1]) / pas_y) + 1
    for j in range(j0, j1 + 1):
        y = phase[1] + j * pas_y
        dx = (pas_x / 2) if j % 2 else 0
        i0 = math.floor((0 - phase[0] - dx) / pas_x) - 1
        i1 = math.ceil((larg - phase[0] - dx) / pas_x) + 1
        for i in range(i0, i1 + 1):
            x = phase[0] + dx + i * pas_x
            cv2.circle(im, (int(round(x * z * S)), int(round(y * z * S))), int(round(r)), tuple(int(v) for v in coul[::-1]), -1, cv2.LINE_AA)
    im = cv2.resize(im, (W, H), interpolation=cv2.INTER_AREA)
    if rot_ccw:
        im = cv2.rotate(im, cv2.ROTATE_90_COUNTERCLOCKWISE)
    cv2.imwrite(str(chemin), im)


def rgb(h):
    return [int(h[i:i + 2], 16) for i in (1, 3, 5)]


def ecrire(nom, F):
    cadre_seul(nom, F)
    p = D / nom
    if p.exists():
        F["calage"] = json.loads(p.read_text(encoding="utf-8")).get("calage", {})
    p.write_text(json.dumps(F, ensure_ascii=False, indent=1), encoding="utf-8")
    print("ok", p)


def cadre_seul(nom, F):
    G = json.loads(json.dumps(F))
    G["titre_fichier"] = F["titre_fichier"].replace("— recto", "— cadre doré seul —")
    G["geo"]["calques"] = [{"id": "cadre", "el": [e for e in c["el"] if e["k"] != "texte"]} for c in F["geo"]["calques"] if c.get("id") == "cadre"]
    G["images"], G["cibles"], G["calage"] = {}, {}, {}
    G["libelles_calques"] = {"cadre": "Cadre doré & éclairs"}
    (D / nom.replace(".json", "_cadre.json")).write_text(json.dumps(G, ensure_ascii=False, indent=1), encoding="utf-8")


def rel(b, pts):
    return [[round(x, 3), round(y, 3)] for x, y in pts]


# =========================================================================== CARTE A (portrait)
def carte_a():
    img = IMG_A
    noir = med(img, [0.6, 30, 3.2, 60])
    blanc = med(img, [62.5, 70, 64.3, 86])
    # --- fenêtre prisme : dégradé du fond deviné derrière le prisme (orange → or → orange)
    prisme = [[0, "#b84c05"], [10.5, "#ba7408"], [20, "#c19c08"], [43, "#c0b406"], [62.5, "#bba205"], [76, "#b98a05"], [87, "#b26a05"], [100, "#b44a04"]]
    FEN = [3.9, 2.35, 54.3, 75.4]
    # --- cadre doré
    O = ([18.25, 73.65, 51.95, 87.75], 2.0); M = ([18.88, 74.47, 51.28, 86.98], 1.85); W = ([19.85, 75.45, 50.30, 86.05], 1.65)
    bolts = [GAB_1, GAB_2,
             [(16.71, 74.07), (19.1, 74.88), (19.55, 74.8), (21.56, 76.94), (19.05, 76.27), (18.6, 76.15)],
             [(19.9, 74.07), (22.2, 75.0), (22.6, 74.98), (24.06, 76.75), (21.75, 76.1), (21.4, 76.15)]]
    ex = masque(img.shape, bolts)
    ex = cv2.dilate(ex.astype(np.uint8), np.ones((17, 17), np.uint8)) > 0
    pieces = cadre(img, [(O[0], O[1], 2), (M[0], M[1], 3), W], ex, nom="Cadre doré")
    # --- trame de points (fenêtre du cadre, débord 0,15 mm sous le cadre)
    Wb = [W[0][0] - 0.15, W[0][1] - 0.15, W[0][2] + 0.15, W[0][3] + 0.15]
    points(D / "images" / "points_a.png", Wb[2] - Wb[0], Wb[3] - Wb[1], 0.506, 0.368,
           (21.23 - Wb[0], 77.37 - Wb[1]), 0.31, rgb("#7e1222"), rgb("#fde9ee"))
    # --- plaque 超 : dégradé mesuré sur l'or (le bras de l'illustration et le glyphe noir sont exclus)
    PL = [4.75, 77.0, 15.45, 87.15]
    pl_pts = [r3(p) for p in rrect(PL, 0.6, 6)]
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    pas_or = ~((hsv[:, :, 0] > 12) & (hsv[:, :, 0] < 35) & (hsv[:, :, 1] > 120) & (hsv[:, :, 2] > 120))
    _, _, st_pl = echantillonner(img, pl_pts, 180, pas_or, pas=0.25, larg=0.4, erosion=3, tol=10)

    el_fond = [
        {"k": "rect", "g": "Fond", "n": "Fond noir", "b": [-3, -3, 68, 93], "c": noir},
        {"k": "rect", "g": "Fond", "n": "Bande blanche", "b": [56.15, -3, 68, 93], "c": blanc},
        {"k": "rect", "g": "Fenêtre", "n": "Fenêtre – filet crème", "b": [3.66, 2.14, 54.56, 75.61], "c": "#e3e0a0"},
        {"k": "rect", "g": "Fenêtre", "n": "Fenêtre – liseré noir", "b": [3.78, 2.26, 54.44, 75.49], "c": noir},
        {"k": "deg", "g": "Fenêtre", "n": "Fond de fenêtre (dégradé derrière le prisme)", "b": FEN, "a": 180, "s": prisme},
    ]
    el_plaque = [
        {"k": "deg", "g": "Plaque 超", "n": "Plaque 超 – or", "b": [round(v, 3) for v in Polygon(pl_pts).bounds], "p": pl_pts, "a": 180, "s": st_pl},
        {"k": "texte", "g": "Plaque 超", "cls": "cho", "s": ["超"]},
    ]
    el_cadre = [{"k": "texte", "g": "Fenêtre à points", "cls": "special", "s": ["SPECIAL"]}]
    el_cadre += pieces_el(pieces, "Cadre doré")
    el_cadre += eclairs(img, bolts, "Éclair")
    el_texte = [
        {"k": "poly", "g": "Fanion", "n": "Fanion noir", "c": "#121012",
         "p": [[57.75, 2.2], [60.17, 2.2], [60.17, 4.68], [61.3, 4.68], [57.77, 7.75]]},
        {"k": "texte", "g": "Citation", "rot": True, "cls": "a-o", "s": ["「"]},
        {"k": "texte", "g": "Citation", "rot": True, "cls": "a-l",
         "s": [["宇", "う"], ["宙", "ちゅう"], ["最", "さい"], ["強", "きょう"], "の", ["戦", "せん"], ["士", "し"], "・",
               ["超", "スーパー"], "サイヤ", ["人", "じん"], "の", ["力", "ちから"], ["見", "み"], "せてやる"]},
        {"k": "texte", "g": "Citation", "rot": True, "cls": "a-x", "s": ["!"]},
        {"k": "texte", "g": "Citation", "rot": True, "cls": "a-f", "s": ["」"]},
    ]
    win = rrect(Wb, [W[1] + 0.15] * 4, 8)
    F = {
        "modele": "carte-carddass-or", "titre_fichier": "Carte custom 孫悟空 超サイヤ人 — cadre doré SPECIAL — recto 65x90",
        "format": {"largeur": 65, "hauteur": 90}, "fond_perdu": 3, "securite": 2.5, "rayon": 2.5,
        "geo": {
            "repere": [65, 0, 90],
            "calques": [
                {"id": "fond", "el": el_fond},
                {"id": "plaque", "el": el_plaque},
                {"slot": {"cle": "illustration", "label": "ILLUSTRATION DÉTOURÉE", "detoure": True, "b": [-3, -3, 68, 93]}},
                {"slot": {"cle": "points", "label": "TRAME DE POINTS", "detoure": False, "b": [round(v, 3) for v in Wb], "p": rel(Wb, win)}},
                {"id": "cadre", "el": el_cadre},
                {"id": "texte", "el": el_texte},
                {"slot": {"cle": "logo", "label": "LOGO DRAGON BALL", "detoure": True, "b": [4.4, 4.9, 26.4, 11.0]}},
                {"slot": {"cle": "logo_carddass", "label": "LOGO", "detoure": True, "b": [40.2, 67.1, 51.3, 71.3]}},
            ],
            "styles": {
                "a-l": 'font: 400 2.6mm/1 "MP1 Medium", sans-serif; color: #141214; --ruby-ecart: 0.2mm;',
                "a-l .rt": 'font: 400 1.05mm/1 "MP1 Medium", sans-serif; color: #141214; letter-spacing: .04mm;',
                "a-o": 'font: 400 2.6mm/1 "MP1 Medium", sans-serif; color: #141214;',
                "a-f": 'font: 400 2.6mm/1 "MP1 Medium", sans-serif; color: #141214;',
                "a-x": 'font: 400 2.6mm/1 "MP1 Medium", sans-serif; color: #141214; transform: skewX(-29deg);',
                "cho": 'font: 400 9mm/1 "Zen Maru Black", sans-serif; color: #0c0a08; -webkit-text-stroke: .32mm #0c0a08;',
                "special": 'font: 400 5mm/1 "Didact Gothic", sans-serif; color: #b9b7dc; letter-spacing: 1.1mm; opacity: .72;',
            },
        },
        "images": {"points": "images/points_a.png"},
        "libelles_calques": {"fond": "Fond, bande & fenêtre prisme", "plaque": "Plaque 超", "image:illustration": "Illustration",
                             "image:points": "Trame de points", "cadre": "Cadre doré & éclairs", "texte": "Fanion & citation",
                             "image:logo": "Logo DRAGON BALL", "image:logo_carddass": "Logo カードダス"},
        "cibles": {
            ".a-o": {"bbox": [7.95, 3.8, 8.95, 5.55], "repere": [65, 0, 90]},
            ".a-l": {"bbox": [9.25, 4.4, 62.27, 7.05], "repere": [65, 0, 90]},
            ".a-x": {"bbox": [62.85, 4.2, 64.15, 6.65], "repere": [65, 0, 90]},
            ".a-f": {"bbox": [64.45, 5.15, 65.55, 7.0], "repere": [65, 0, 90]},
            ".cho": [6.01, 78.11, 14.49, 86.49],
            ".special": [22.4, 78.1, 47.75, 82.6],
        },
        "calage": {},
    }
    ecrire("carte_a_goku_ssj.json", F)


# =========================================================================== CARTE B (paysage → portrait)
def carte_b():
    img = IMG_B
    P = vers_portrait

    def rb(b):  # boîte paysage → portrait
        return [round(b[1], 3), round(90 - b[2], 3), round(b[3], 3), round(90 - b[0], 3)]
    noir = "#151317"  # noir imprimé (la photo, éclairée, le rend gris)
    # --- bandeau prisme lavande : couleur de fond derrière le prisme (sans texte ni reflets blancs)
    lav = []
    for u0 in (0.5, 22, 45, 67, 89):
        c = img[int(0.4 * K):int(8.3 * K), int(max(0, u0 - 6) * K):int(min(90, u0 + 6) * K)].reshape(-1, 3)[:, ::-1].astype(float)
        s = c.sum(1); c = c[(s > 250) & (s < 520)]
        lav.append(hexa(np.median(c, 0)))
    band_stops = [[round(k * 25, 1), lav[k]] for k in range(5)]
    # --- fenêtre bleue : du bleu profond (gauche) au cyan (droite)
    FB = [5.95, 11.1, 85.15, 48.35]
    # pixels bleu saturé seulement (ni reflets blancs du prisme, ni illustration), éclaircis de 12 % (photo sombre)
    hsv0 = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    fen_stops = []
    for k, u in enumerate(np.linspace(FB[0] + 1, FB[2] - 1, 9)):
        sl = (slice(int((FB[1] + 0.2) * K), int((FB[3] - 0.2) * K)), slice(int((u - 1.2) * K), int((u + 1.2) * K)))
        hh = hsv0[sl].reshape(-1, 3); cc = img[sl].reshape(-1, 3)[:, ::-1].astype(float)
        m = (hh[:, 0] > 95) & (hh[:, 0] < 125) & (hh[:, 1] > 140) & (hh[:, 2] > 90)
        if m.sum() > 200:
            fen_stops.append([round((u - FB[0]) / (FB[2] - FB[0]) * 100, 1), hexa(np.median(cc[m], 0) * 1.12)])
    fen_stops[0][0], fen_stops[-1][0] = 0, 100
    # --- cadre doré à gorge
    O = ([16.42, 47.08, 48.5, 61.38], 1.8)
    Mo = ([17.33, 47.88, 47.67, 60.47], 1.35); Mi = ([17.48, 48.03, 47.52, 60.32], 1.25)
    W = ([18.15, 48.78, 46.85, 59.5], 0.9)
    bolts = [similitude(GAB_1, (14.63, 46.88), (20.5, 50.5), 0.55), similitude(GAB_2, (17.38, 47.25), (22.6, 50.4), 0.55),
             similitude(GAB_1, (42.4, 57.9), (47.1, 61.1), 0.55), similitude(GAB_2, (44.25, 57.75), (50.5, 61.4), 0.55)]
    ex = masque(img.shape, bolts)
    ex = cv2.dilate(ex.astype(np.uint8), np.ones((15, 15), np.uint8)) > 0
    pieces = cadre(img, [(O[0], O[1], 2), (Mo[0], Mo[1], 1), (Mi[0], Mi[1], 2), W], ex, nom="Cadre doré")
    # --- trame de points (générée en paysage puis tournée)
    Wb = [W[0][0] - 0.15, W[0][1] - 0.15, W[0][2] + 0.15, W[0][3] + 0.15]
    points(D / "images" / "points_b.png", Wb[2] - Wb[0], Wb[3] - Wb[1], 0.6, 0.353, (0.3, 0.2), 0.27,
           rgb("#b52b4f"), rgb("#f6e6ea"), rot_ccw=True)
    win = P(rrect(Wb, W[1] + 0.15, 8))
    # --- médaille 超
    MC, MR = (8.9, 56.4), 5.45
    disque = [r3(p) for p in list(Point(*MC).buffer(MR, 32).exterior.coords)[:-1]]
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    pas_or = ~((hsv[:, :, 0] > 12) & (hsv[:, :, 0] < 38) & (hsv[:, :, 1] > 90) & (hsv[:, :, 2] > 110))
    _, _, st_m = echantillonner(img, disque, 180, pas_or, pas=0.3, larg=0.5, erosion=3, tol=10)
    caisse = med(img, [55, 46.0, 57, 47.0])
    violet = med(img, [60, 61.45, 80, 61.7])
    el_fond = [
        {"k": "rect", "g": "Fond", "n": "Fond noir", "b": [-3, -3, 68, 93], "c": noir},
        {"k": "deg", "g": "Bandeau", "n": "Bandeau – fond derrière le prisme", "b": rb([-3, -3, 93, 8.65]), "a": 0, "s": band_stops},
        {"k": "deg", "g": "Fenêtre", "n": "Fenêtre – fond derrière le prisme", "b": rb(FB), "p": P(rrect(FB, 0.25, 4)), "a": 0, "s": fen_stops},
    ]
    el_cadre = pieces_el(pieces, "Cadre doré", P)
    el_cadre += eclairs(img, bolts, "Éclair", P, (0.07, "#3b2311"))
    el_med = [
        {"k": "cercle", "g": "Médaille 超", "n": "Médaille – liseré", "o": P([MC])[0], "r": MR + 0.14, "c": "#17110d"},
        {"k": "deg", "g": "Médaille 超", "n": "Médaille – or", "b": rb([MC[0] - MR, MC[1] - MR, MC[0] + MR, MC[1] + MR]), "p": P(disque), "a": 90, "s": st_m},
        {"k": "texte", "g": "Médaille 超", "rot": True, "cls": "cho", "s": ["超"]},
    ]
    CB = [50.6, 45.1, 87.35, 61.8]
    el_texte = [
        {"k": "poly", "g": "Fanion", "n": "Fanion noir", "c": "#121012", "p": P([(3.6, 4.5), (5.62, 4.5), (5.62, 3.22), (9.0, 7.27), (3.6, 7.27)])},
        {"k": "texte", "g": "Citation", "rot": True, "cls": "q1", "s": ["「", ["三大超", "さんだいスーパー"], "サイヤ", ["人集結", "じんしゅうけつ"]]},
        {"k": "texte", "g": "Citation", "rot": True, "cls": "qx1", "s": ["!"]},
        {"k": "texte", "g": "Citation", "rot": True, "cls": "q2", "s": ["トリプル", ["攻撃", "こうげき"], "をくらえっ"]},
        {"k": "texte", "g": "Citation", "rot": True, "cls": "qx2", "s": ["!!"]},
        {"k": "texte", "g": "Citation", "rot": True, "cls": "qf", "s": ["」"]},
        # étiquette ⑤⓪⓪ 三大超サイヤ人
        {"k": "cercle", "g": "Étiquette", "n": "Pastille 500 – halo", "o": P([(58.68, 41.45)])[0], "r": 1.98, "c": "#dad9d9"},
        {"k": "cercle", "g": "Étiquette", "n": "Pastille 500 – cercle", "o": P([(58.68, 41.45)])[0], "r": 1.66, "c": "#151313"},
        {"k": "cercle", "g": "Étiquette", "n": "Pastille 500 – fond", "o": P([(58.68, 41.45)])[0], "r": 1.53, "c": "#f2f0ee"},
        {"k": "texte", "g": "Étiquette", "rot": True, "cls": "n500", "s": ["500"]},
        {"k": "texte", "g": "Étiquette", "rot": True, "cls": "lab", "s": [["三大超", "さんだいスーパー"], "サイヤ", ["人", "じん"]]},
        # encadré
        {"k": "rect", "g": "Encadré", "n": "Encadré – bord violet", "b": rb(CB), "r": 1.6, "c": violet},
        {"k": "rect", "g": "Encadré", "n": "Encadré – fond", "b": rb([CB[0] + 0.33, CB[1] + 0.33, CB[2] - 0.33, CB[3] - 0.33]), "r": 1.3, "c": caisse},
        {"k": "texte", "g": "Encadré", "rot": True, "cls": "dp", "s": ["DP850"]},
        {"k": "texte", "g": "Encadré – texte", "rot": True, "cls": "c1", "s": ["ヤツらが", ["修業", "しゅぎょう"], "を", ["終", "お"], "え"]},
        {"k": "texte", "g": "Encadré – texte", "rot": True, "cls": "c2", "s": ["た", ["時", "とき"], "、", ["超", "スーパー"], "サイヤ", ["人", "じん"], "の"]},
        {"k": "texte", "g": "Encadré – texte", "rot": True, "cls": "c3", "s": [["逆襲", "ぎゃくしゅう"], "が", ["始", "はじ"], "まる……", ["!!", "it"]]},
    ]
    REP = [0, 90, -90]
    gothique = '"MP1 Medium", sans-serif'
    F = {
        "modele": "carte-carddass-or", "titre_fichier": "Carte n°500 三大超サイヤ人 — cadre doré SPECIAL — recto 65x90",
        "format": {"largeur": 65, "hauteur": 90}, "fond_perdu": 3, "securite": 2.5, "rayon": 2.5,
        "geo": {
            "repere": REP, "biais": -24,
            "calques": [
                {"id": "fond", "el": el_fond},
                {"slot": {"cle": "illustration", "label": "ILLUSTRATION DÉTOURÉE (PAYSAGE)", "detoure": True, "b": [-3, -3, 68, 93]}},
                {"slot": {"cle": "points", "label": "TRAME DE POINTS", "detoure": False, "b": rb(Wb), "p": win}},
                {"id": "cadre", "el": el_cadre},
                {"id": "medaille", "el": el_med},
                {"id": "texte", "el": el_texte},
                {"slot": {"cle": "logo", "label": "LOGO DRAGON BALL Z", "detoure": True, "b": rb([8.3, 12.8, 28.3, 21.6])}},
            ],
            "styles": {
                "q1": f"font: 400 2.9mm/1 {gothique}; color: #121014; --ruby-ecart: 0.2mm;",
                "q2": f"font: 400 2.9mm/1 {gothique}; color: #121014; --ruby-ecart: 0.2mm;",
                "q1 .rt": f"font: 400 1.3mm/1 {gothique}; color: #121014; letter-spacing: .05mm;",
                "q2 .rt": f"font: 400 1.3mm/1 {gothique}; color: #121014; letter-spacing: .05mm;",
                "qx1": f"font: 400 2.9mm/1 {gothique}; color: #121014; transform: skewX(-24deg);",
                "qx2": f"font: 400 2.9mm/1 {gothique}; color: #121014; transform: skewX(-24deg);",
                "qf": f"font: 400 2.9mm/1 {gothique}; color: #121014;",
                "n500": 'font: 400 2.4mm/1 "Oswald M", sans-serif; color: #151313;',
                "lab": f'font: 400 4mm/1 "MP1 Bold", sans-serif; color: #151313; -webkit-text-stroke: .6mm #dad9d9; paint-order: stroke fill; --ruby-ecart: 0.4mm;',
                "lab .rt": f'font: 400 1.25mm/1 {gothique}; color: #151313; -webkit-text-stroke: .5mm #dad9d9; paint-order: stroke fill; letter-spacing: .06mm;',
                "dp": 'font: 400 10mm/1 "Anton", sans-serif; color: #e47f45; -webkit-text-stroke: .16mm #c4552a; paint-order: stroke fill;',
                "c1": f"font: 400 3.4mm/1 {gothique}; color: #121014; --ruby-ecart: 0.45mm;",
                "c2": f"font: 400 3.4mm/1 {gothique}; color: #121014; --ruby-ecart: 0.45mm;",
                "c3": f"font: 400 3.4mm/1 {gothique}; color: #121014; --ruby-ecart: 0.45mm;",
                "c1 .rt": f"font: 400 1.42mm/1 {gothique}; color: #121014; letter-spacing: .12mm;",
                "c2 .rt": f"font: 400 1.42mm/1 {gothique}; color: #121014; letter-spacing: .12mm;",
                "c3 .rt": f"font: 400 1.42mm/1 {gothique}; color: #121014; letter-spacing: .12mm;",
                "cho": 'font: 400 8mm/1 "Zen Maru Black", sans-serif; color: #0d0b09; -webkit-text-stroke: .3mm #0d0b09;',
            },
        },
        "images": {"points": "images/points_b.png"},
        "libelles_calques": {"fond": "Fond, bandeau & fenêtre prisme", "image:illustration": "Illustration", "image:points": "Trame de points",
                             "cadre": "Cadre doré & éclairs", "medaille": "Médaille 超", "texte": "Textes, étiquette & encadré",
                             "image:logo": "Logo DRAGON BALL Z"},
        "cibles": {
            ".q1": {"bbox": [9.5, 3.62, 38.45, 6.72], "repere": REP},
            ".qx1": {"bbox": [39.6, 3.95, 41.05, 6.55], "repere": REP},
            ".q2": {"bbox": [45.4, 3.65, 78.35, 6.72], "repere": REP},
            ".qx2": {"bbox": [78.95, 3.88, 81.6, 6.6], "repere": REP},
            ".qf": {"bbox": [81.98, 5.1, 83.05, 6.82], "repere": REP},
            ".n500": {"bbox": [57.5, 40.34, 59.95, 42.55], "repere": REP},
            ".lab": {"bbox": [60.97, 39.25, 83.0, 42.85], "repere": REP},
            ".dp": {"bbox": [55.85, 48.97, 81.97, 58.9], "repere": REP},
            ".c1": {"bbox": [53.78, 47.2, 83.9, 50.88], "repere": REP},
            ".c2": {"bbox": [53.9, 52.5, 83.95, 55.98], "repere": REP},
            ".c3": {"bbox": [53.8, 57.8, 83.65, 61.0], "repere": REP},
            ".cho": {"bbox": [5.1, 52.3, 12.6, 60.15], "repere": REP},
        },
        "calage": {},
    }
    ecrire("carte_b_500.json", F)


if __name__ == "__main__":
    quoi = sys.argv[1:] or ["a", "b"]
    if "a" in quoi:
        carte_a()
    if "b" in quoi:
        carte_b()
