#!/usr/bin/env python3
"""Fiches des cartes Dragon Ball « Visual Adventure » : n° 268 ベジータ et n° 219 悟飯.

  python3 outils/fiches_visual_adventure.py

Cotes en mm (page finie 65 × 90), relevées sur les photos redressées (40 px/mm), puis recentrées :
fenêtre, filets, pastilles et légende de Vegeta centrés sur l'axe de la carte (x = 32,5) — la photo
était décalée d'environ 0,25 mm. Rayons de Gohan : centre et angles mesurés sur la photo
(frontières rose / olive), rayons cachés par le personnage restitués au même pas.
"""
import json, math, pathlib

D = pathlib.Path(__file__).resolve().parent.parent / "creations" / "2026-10_cartes-visual-adventure"
AXE = 32.5


def ecrire(nom, F):
    p = D / nom
    if p.exists():
        F["calage"] = json.loads(p.read_text(encoding="utf-8")).get("calage", {})
    p.write_text(json.dumps(F, ensure_ascii=False, indent=1), encoding="utf-8")


def r3(v): return round(v, 3)


def lerp(c0, c1, t):
    a = [int(c0[i:i + 2], 16) for i in (1, 3, 5)]; b = [int(c1[i:i + 2], 16) for i in (1, 3, 5)]
    return "#" + "".join(f"{round(x + (y - x) * t):02x}" for x, y in zip(a, b))


def centre(b, cx, cy, d=0.5):
    return {"bbox": [r3(cx - d), r3(cy - d), r3(cx + d), r3(cy + d)], "fixe": True}


def clip_rect(poly, R):
    """Sutherland–Hodgman : polygone ∩ rectangle [x0, y0, x1, y1]."""
    x0, y0, x1, y1 = R
    def coupe(pts, dedans, inter):
        out = []
        for i, p in enumerate(pts):
            q = pts[i - 1]
            if dedans(p):
                if not dedans(q): out.append(inter(q, p))
                out.append(p)
            elif dedans(q): out.append(inter(q, p))
        return out
    def ix(x):  return lambda p, q: (x, p[1] + (q[1] - p[1]) * (x - p[0]) / (q[0] - p[0]))
    def iy(y):  return lambda p, q: (p[0] + (q[0] - p[0]) * (y - p[1]) / (q[1] - p[1]), y)
    pts = poly
    for d, f in ((lambda p: p[0] >= x0, ix(x0)), (lambda p: p[0] <= x1, ix(x1)),
                 (lambda p: p[1] >= y0, iy(y0)), (lambda p: p[1] <= y1, iy(y1))):
        pts = coupe(pts, d, f)
        if not pts: break
    return [[r3(x), r3(y)] for x, y in pts]


COMMUNS = {"format": {"largeur": 65, "hauteur": 90}, "fond_perdu": 3, "securite": 2.5, "rayon": 2.5,
           "libelles_calques": {"image:marbre": "Marbre", "fenetre": "Fenêtre", "image:fenetre": "Fond de fenêtre",
                                "filets": "Filets", "image:personnage": "Illustration", "medaille": "Médaille",
                                "image:embleme": "Emblème", "texte": "Logo, pastilles & légende"}}
KANA = ["ド", "ラ", "ゴ", "ン", "ボ", "ー", "ル"]

# =========================================================================== VEGETA n° 268
DXT = 0.35                     # logo + médaille : recentrage de l'ensemble
med = [r3(8.37 + DXT), 8.95]
fill = [15.575 + DXT, 3.75, 61.0 + DXT, 11.975]    # encre des lettres (sans le cerne)
OMB = [0.15, 0.15]
pas = 2.743; dsq = [[r3(AXE + (k - 3) * pas), 14.31] for k in range(7)]
haut = [{"b": [3.55, r3(19.98 + 1.053 * k - 0.2), 61.45, r3(19.98 + 1.053 * k + 0.2)],
         "c": lerp("#dc8ea6", "#f4f0ec", k / 8)} for k in range(9)]
bas = []
for k in range(9):
    h = 0.5 - 0.12 * k / 8; c = 74.47 + 1.06 * k
    bas.append({"b": [3.6, r3(c - h / 2), 61.4, r3(c + h / 2)], "c": lerp("#eef3f1", "#a4c5bb", k / 8)})
fen = [4.71, 38.55, 60.29, 69.5]
dc = -0.08                     # légende recentrée
num_c = [r3(21.69 + dc), 86.47]

vegeta = {
    **COMMUNS, "modele": "carte-visual-adventure", "titre_fichier": "Carte Visual Adventure 268 Vegeta — recto 65x90",
    "geo": {
        "vertical": False,
        "fenetre": {"ext": fen, "ep": 0.82, "image": "fenetre"},
        "rayures": haut + bas,
        "medaille": {"c": med, "r": 5.45},
        "titre": {"x": fill[0], "y": 2.0, "rot": 0, "fs": 10.4, "ls": 0.3, "trait": 0.28, "ombre": OMB,
                  "coupe": [[-5, -5], [70, -5], [70, 8.025], [-5, 8.025]]},
        "disques": {"centres": dsq, "d": 2.52, "ep": 0.15, "fs": 1.75, "police": "MR Bold", "verticaux": []},
        "numero": {"c": num_c, "d": 2.58, "fs": 1.95},
        "legende_fs": 2.6, "furi_fs": 0.8,
    },
    "couleurs": {"cadre": "#e24c55", "fond_fenetre": "#fdfcf6", "trait": "#3b3631", "titre_haut": "#f9dcb4",
                 "titre_bas": "#5ef0e2", "medaille": "#efbf45", "encre": "#1d1a17", "pastille": "#f8c81c",
                 "numero": "#2c4a40", "blanc": "#fbfbf8"},
    "images": {"marbre": "images/marbre_vegeta.png", "fenetre": "images/fenetre_vegeta.png"},
    "textes": {"titre": "DRAGON BALL", "kana": KANA, "numero": "268",
               "legende": ["見よ", ["!"], " オレの力を", ["!!"]], "furigana": ["み", "パワー"]},
    "cibles": {
        ".db": [r3(fill[0]), fill[1], r3(fill[2] + OMB[0]), r3(fill[3] + OMB[1])],
        **{f".k{k + 1}": centre(None, *dsq[k]) for k in range(7)},
        ".num": {**centre(None, *num_c), "lmax": 1.95},
        ".leg": [r3(23.12 + dc), 85.05, r3(44.75 + dc), 87.55],
        ".f1": [r3(23.78 + dc), 84.02, r3(24.8 + dc), 84.72],
        ".f2": [r3(37.75 + dc), 84.02, r3(40.7 + dc), 84.72],
    },
    "calage": {},
}
ecrire("carte_va_vegeta.json", vegeta)

# =========================================================================== GOHAN n° 219
gfill = [3.675, 31.6, 12.15, 74.85]            # encre des lettres (page) — logo tourné de 90°
GO = [0.15, 0.15]                              # ombre dans le repère des lettres (bas-droite) → page : (-0.15, +0.15)
gdsq = [[14.42, r3(45.15 + 2.64 * k)] for k in range(7)]
gfen = [11.75, 2.75, 60.05, 85.2]; gep = 0.95
inner = [gfen[0] + gep, gfen[1] + gep, gfen[2] - gep, gfen[3] - gep]
C0 = (21.4, 87.75)
roses = [(-171.3, -161.8), (-152.31, -143.06), (-133.38, -123.69), (-115.75, -109.44), (-104.19, -99.19),
         (-94.44, -88.56), (-83.5, -78.19), (-72.28, -66.38), (-60.47, -54.56), (-49.5, -43.94),
         (-38.81, -32.44), (-27.06, -21.44), (-16.56, -11.75), (-6.6, -1.5)]
rayons = []
for a0, a1 in roses:
    tri = [C0] + [(C0[0] + 200 * math.cos(math.radians(a)), C0[1] + 200 * math.sin(math.radians(a))) for a in (a0, a1)]
    p = clip_rect(tri, inner)
    if len(p) >= 3: rayons.append(p)

gohan = {
    **COMMUNS, "modele": "carte-visual-adventure", "titre_fichier": "Carte Visual Adventure 219 Gohan — recto 65x90",
    "geo": {
        "vertical": True,
        "fenetre": {"ext": gfen, "ep": gep},
        "rayons": rayons,
        "barres": [[3.3, 17.93, 11.75, 20.0], [3.3, 21.03, 11.75, 22.6], [3.3, 23.65, 11.75, 24.73], [3.3, 25.15, 11.75, 25.75]],
        "medaille": {"c": [8.45, 80.7], "r": 5.45},
        "titre": {"x": 12.9, "y": 31.0, "rot": 90, "fs": 10.8, "ls": 0.3, "trait": 0.28, "ombre": GO,
                  "coupe": [[7.93, -5], [70, -5], [70, 95], [7.93, 95]]},
        "disques": {"centres": gdsq, "d": 2.5, "ep": 0.15, "fs": 1.75, "police": "MR Bold", "verticaux": ["ー"]},
        "numero": {"c": [5.95, 4.33], "d": 2.45, "fs": 1.85},
        "legende_fs": 2.6, "furi_fs": 0.8,
    },
    "couleurs": {"cadre": "#f7f6f1", "fond_fenetre": "#979d43", "rayon": "#b86682", "or_barres": "#c89703",
                 "trait": "#33302c", "titre_haut": "#86a6e0", "titre_bas": "#36e0d6", "medaille": "#1f211b",
                 "encre": "#1d1a17", "pastille": "#f7b81c", "numero": "#2a3b36", "blanc": "#fbfbf8"},
    "images": {"marbre": "images/marbre_gohan.png"},
    "textes": {"titre": "DRAGON BALL", "kana": KANA, "numero": "219",
               "legende": ["悟飯怒る"], "furigana": ["ごはん", "いか"]},
    "cibles": {
        ".db": {"bbox": [gfill[1], -gfill[2], gfill[3] + GO[0], -(gfill[0] - GO[1])], "repere": [0, 0, 90]},
        **{f".k{k + 1}": centre(None, *gdsq[k]) for k in range(7)},
        ".num": {**centre(None, 5.95, 4.33), "lmax": 1.9},
        ".leg": [4.5, 5.67, 7.1, 15.68],
        ".f1": [7.38, 7.05, 8.28, 10.55],
        ".f2": [7.38, 11.05, 8.28, 12.95],
    },
    "calage": {},
}
ecrire("carte_va_gohan.json", gohan)
print("ok", len(rayons), "rayons")

# =========================================================================== n° 190 西遊記
# Fenêtre à filet bleu (centrée : −0,05 mm), fond en dégradé blanc → ocre relevé sur les zones visibles ;
# médaille + logo + pastilles recentrés ensemble (−0,10 mm).
DW, DL = -0.05, -0.10
wfen = [r3(3.1 + DW), 2.75, r3(62.0 + DW), 74.72]
wfill = [15.95 + DL, 75.575, 61.225 + DL, 83.875]
wdsq = [[r3(38.6 + DL + (k - 3) * 2.777), 85.84] for k in range(7)]
wnum = [r3(49.94 + DW), 7.0]
WOMB = [0.1, 0.1]
saiyuki = {
    **COMMUNS, "modele": "carte-visual-adventure", "titre_fichier": "Carte Visual Adventure 190 Saiyuki — recto 65x90",
    "geo": {
        "vertical": False,
        "fenetre": {"ext": wfen, "ep": 0.4},
        "medaille": {"c": [r3(9.2 + DL), 81.55], "r": 5.45},
        "titre": {"x": wfill[0], "y": 74.0, "rot": 0, "fs": 10.4, "ls": 0.3, "trait": 0.22, "ombre": WOMB,
                  "coupe": [[-5, -5], [70, -5], [70, 79.6], [-5, 79.6]]},
        "disques": {"centres": wdsq, "d": 2.5, "ep": 0.1, "fs": 1.75, "police": "MR Bold", "verticaux": []},
        "numero": {"c": wnum, "d": 2.45, "fs": 1.8},
        "legende_fs": 2.5, "furi_fs": 1.2, "legende_police": "MP1 Medium", "furi_police": "MP1 Medium",
    },
    "couleurs": {"cadre": "#4a6fc0", "fond_fenetre": "#f4ead0",
                 "fond_degrade": [[0, "#ffffff"], [6, "#ffffff"], [10, "#fefdf1"], [18, "#faf6d9"], [26, "#f3e7c5"],
                                  [35, "#ebdbb0"], [43, "#e6d09e"], [63, "#d9bb6f"], [100, "#cfac5f"]],
                 "trait": "#1e2127", "titre_haut": "#5473c4", "titre_bas": "#73d8cb", "medaille": "#e8b947",
                 "encre": "#3b2414", "pastille": "#f2cc2a", "numero": "#ffffff", "pastille_num": "#1d1b1b",
                 "legende": "#1d1b1b", "blanc": "#ffffff"},
    "images": {"marbre": "images/marbre_190.png"},
    "textes": {"titre": "DRAGON BALL", "kana": KANA, "numero": "190",
               "legende": ["西遊記"], "furigana": ["さい", "ゆう", "き"]},
    "cibles": {
        ".db": [r3(wfill[0]), wfill[1], r3(wfill[2] + WOMB[0]), r3(wfill[3] + WOMB[1])],
        **{f".k{k + 1}": centre(None, *wdsq[k]) for k in range(7)},
        ".num": {**centre(None, *wnum), "lmax": 1.85},
        ".leg": [r3(52.02 + DW), 5.85, r3(60.0 + DW), 8.2],
        ".f1": [r3(51.85 + DW), 4.22, r3(53.7 + DW), 5.45],
        ".f2": [r3(54.8 + DW), 4.25, r3(57.28 + DW), 5.5],
        ".f3": [r3(58.08 + DW), 4.18, r3(59.22 + DW), 5.42],
    },
    "calage": {},
}
ecrire("carte_va_190.json", saiyuki)
print("ok 190")
