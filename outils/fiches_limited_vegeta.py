#!/usr/bin/env python3
"""Fiches recto / verso de la carte LIMITED 3000 « 惑 » (ベジータ) et de son dos or « 限 / 七 ».

  python3 outils/fiches_limited_vegeta.py

Cotes en mm (page finie 65 × 90), relevées sur les photos redressées (40 px/mm). Les caractères au pinceau
(惑, 限, 七) et le chiffre 7 sont vectorisés depuis les photos : trace_recto.json / trace_verso.json.
"""
import json, math, pathlib

D = pathlib.Path(__file__).resolve().parent.parent / "creations" / "2026-10_carte-limited-vegeta"
TR = json.loads((D / "trace_recto.json").read_text())
TV = json.loads((D / "trace_verso.json").read_text())


def ecrire(nom, F):
    p = D / nom
    if p.exists():
        F["calage"] = json.loads(p.read_text(encoding="utf-8")).get("calage", {})
    p.write_text(json.dumps(F, ensure_ascii=False, indent=1), encoding="utf-8")


# =========================================================================== RECTO
recto = {
    "modele": "carte-limited-recto", "titre_fichier": "Carte LIMITED 3000 « 惑 » — recto 65x90",
    "format": {"largeur": 65, "hauteur": 90}, "fond_perdu": 3, "securite": 2.5, "rayon": 2.5,
    "geo": {
        "bande_x": 56.05,
        "cadre": {"ext": [5.25, 5.45, 54.05, 85.8], "blanc": [5.47, 5.67, 53.83, 85.58], "int": [6.42, 6.82, 52.82, 84.64]},
        "fenetre": [6.62, 7.02, 52.62, 84.44],
        "fanion": [[57.65, 3.75], [60.45, 3.75], [60.45, 5.85], [61.45, 5.8], [57.75, 8.95], [57.65, 8.95]],
        "plaque_kanji": {"boite": [3.1, 3.42, 19.9, 19.7], "rayon": 1.2, "trait": 0.35},
        "plaque_lim": {"boite": [21.75, 3.42, 50.95, 14.55], "rayon": 1.0, "trait": 0.42},
        "encadre": {"boite": [3.2, 71.3, 43.05, 87.0], "rayon": 1.3, "trait": 0.42},
        "pastille": {"c": [28.97, 8.69], "r": 1.73, "bord": 0.13},
        "waku": TR["waku"], "sept": TR["sept"],
        "biais_exclamation": -22,
    },
    "couleurs": {"noir": "#141214", "blanc": "#ebeaea", "blanc_pur": "#f6f2f0", "bande": "#ebebeb",
                 "rouge": "#d0262a", "rouge_bord": "#6e1416", "lavande": "#978fbf",
                 "prisme": [[0, "#7a4552"], [20, "#7c4a4c"], [40, "#58323f"], [70, "#47293a"], [100, "#442732"]],
                 "fenetre": [[0, "#5ec3c6"], [45, "#3aaab8"], [100, "#2d93a8"]]},
    "images": {"personnage": "images/personnage.png"},
    "libelles_calques": {"fond": "Fond (prisme, bande, fenêtre)", "image:personnage": "Illustration", "texte": "Textes & plaques"},
    "textes": {
        "v1": "「あ、", "v2": "最強の超戦だ！」", "r1": "かいさん", "r2": "ぼうせん",
        "limited": "LIMITED", "nombre": "3000", "bp": "BP8400",
        "lignes": [["スペシャルカードは"], ["∞カードとあわせて"], ["使って"], ["BPは"], ["＋200", ["！"]]],
        "furigana": ["つか", "バトルポイント", "プラス"],
    },
    "cibles": {
        ".v1": [58.68, 11.28, 62.18, 17.48], ".v2": [58.52, 20.07, 62.12, 47.12],
        ".r1": [62.45, 20.2, 63.7, 26.88], ".r2": [62.4, 31.38, 63.75, 38.05],
        ".lim1": [31.6, 5.1, 44.78, 8.1], ".lim2": [31.75, 9.65, 40.38, 12.73],
        ".bp": [7.32, 74.18, 39.55, 84.75],
        ".l1": [7.52, 73.0, 39.05, 76.38], ".l2": [7.88, 77.85, 38.9, 81.17], ".l3": [7.42, 82.55, 17.6, 85.6], ".l4": [18.27, 82.9, 27.45, 85.78], ".l5": [28.38, 83.1, 38.65, 86.0],
        ".f1": [7.82, 81.33, 10.38, 82.2], ".f2": [17.58, 81.28, 24.58, 82.43], ".f3": [28.0, 81.46, 30.88, 82.43],
    },
    "calage": {},
}
ecrire("carte_limited_recto.json", recto)

# =========================================================================== VERSO
TH, TN, TM = 1.05, 0.4, 0.6            # filets : épais, fins, cadres des médaillons
DX, DY = 0.13, -0.40                   # recentrage du motif (carré central sur le centre de la carte)
R = []                                  # rectangles noirs [x0, y0, x1, y1, nom]


def hseg(y0, y1, x0, x1, nom): R.append([x0, y0, x1, y1, nom])
def vseg(x0, x1, y0, y1, nom): R.append([x0, y0, x1, y1, nom])


# --- bloc haut-gauche : contour épais à décrochement
vseg(6.85, 7.95, 11.0, 55.15, "Bloc gauche – montant")
hseg(11.0, 11.95, 6.85, 10.95, "Bloc gauche – décrochement")
vseg(10.0, 10.95, 7.0, 11.95, "Bloc gauche – décrochement montant")
hseg(7.0, 7.9, 10.0, 36.4, "Bloc haut – traverse")
vseg(24.48, 25.55, 7.0, 31.4, "Colonne haut – montant gauche")
vseg(35.28, 36.4, 7.0, 31.4, "Colonne haut – montant droit")
hseg(54.1, 55.15, 6.85, 17.5, "Bloc gauche – pied")
# --- filets fins du bloc gauche
vseg(15.3, 15.65, 7.5, 15.5, "Équerre 1 – montant"); hseg(15.15, 15.5, 7.5, 15.65, "Équerre 1 – traverse")
vseg(19.45, 19.85, 7.5, 19.72, "Équerre 2 – montant"); hseg(19.3, 19.72, 7.5, 19.85, "Équerre 2 – traverse")
hseg(26.68, 27.12, 7.5, 24.6, "Bloc gauche – filet 1"); hseg(29.22, 29.68, 7.5, 24.6, "Bloc gauche – filet 2")
hseg(31.8, 32.28, 7.5, 17.5, "Bloc gauche – filet 3"); hseg(34.42, 34.9, 7.5, 17.5, "Bloc gauche – filet 4")
# --- colonne haut
for k, (a, b) in enumerate(((11.2, 11.58), (13.8, 14.12), (16.38, 16.7))):
    hseg(a, b, 25.0, 35.8, f"Colonne haut – filet {k + 1}")
# --- carré central
hseg(30.35, 31.4, 16.85, 47.85, "Carré central – haut"); hseg(59.38, 60.42, 16.85, 47.85, "Carré central – bas")
vseg(16.85, 18.05, 30.35, 60.42, "Carré central – gauche"); vseg(46.75, 47.85, 30.35, 60.42, "Carré central – droite")
# --- cadre haut-droit (boule à 7 étoiles)
hseg(9.75, 10.33, 41.05, 59.3, "Cadre étoiles – haut"); hseg(26.6, 27.25, 41.05, 59.3, "Cadre étoiles – bas")
vseg(41.05, 41.63, 9.75, 27.25, "Cadre étoiles – gauche"); vseg(58.75, 59.3, 9.75, 27.25, "Cadre étoiles – droite")
# --- bloc bas-droit (pendant du bloc gauche)
vseg(57.02, 58.12, 35.8, 80.55, "Bloc droit – montant")
hseg(35.78, 36.8, 47.4, 58.12, "Bloc droit – tête")
hseg(79.5, 80.53, 53.62, 58.12, "Bloc droit – décrochement")
vseg(53.62, 54.65, 79.5, 83.5, "Bloc droit – décrochement descendant")
hseg(82.62, 83.48, 25.42, 54.65, "Bloc bas – traverse")
vseg(25.42, 26.42, 59.9, 83.48, "Colonne bas – montant gauche")
vseg(40.5, 41.52, 59.9, 83.48, "Colonne bas – montant droit")
hseg(55.9, 56.25, 47.4, 57.5, "Bloc droit – filet 1"); hseg(58.45, 58.8, 47.4, 57.5, "Bloc droit – filet 2")
hseg(60.98, 61.36, 41.0, 57.5, "Bloc droit – filet 3"); hseg(63.52, 63.92, 41.0, 57.5, "Bloc droit – filet 4")
vseg(44.85, 45.22, 70.75, 83.0, "Équerre 3 – montant"); hseg(70.75, 71.18, 44.85, 57.5, "Équerre 3 – traverse")
vseg(48.95, 49.3, 74.92, 83.0, "Équerre 4 – montant"); hseg(74.92, 75.27, 48.95, 57.5, "Équerre 4 – traverse")
# --- colonne bas
for k, (a, b) in enumerate(((73.88, 74.3), (76.47, 76.77), (79.05, 79.35))):
    hseg(a, b, 26.0, 41.0, f"Colonne bas – filet {k + 1}")
# --- cadre bas-gauche (七)
hseg(63.18, 63.8, 5.3, 23.72, "Cadre 七 – haut"); hseg(80.07, 80.7, 5.3, 23.72, "Cadre 七 – bas")
vseg(5.3, 5.95, 63.18, 80.7, "Cadre 七 – gauche"); vseg(23.05, 23.72, 63.18, 80.7, "Cadre 七 – droite")

def dec(pts): return [[round(x + DX, 3), round(y + DY, 3)] for x, y in pts]

etoiles = []
cs = (50.37, 18.62)
for dx, dy in ((-1.79, -2.71), (1.92, -2.71), (-3.12, 0.1), (0.0, 0.0), (3.13, -0.02), (-1.69, 2.66), (1.81, 2.67)):
    cx, cy = cs[0] + dx, cs[1] + dy
    pts = []
    for k in range(10):
        r = 1.15 if k % 2 == 0 else 0.46
        a = math.radians(-107 + 36 * k)
        pts.append([cx + r * math.cos(a), cy + r * math.sin(a)])
    etoiles.append(dec(pts))

verso = {
    "modele": "carte-verso-or", "titre_fichier": "Carte LIMITED 3000 — verso or « 限 » 65x90",
    "format": {"largeur": 65, "hauteur": 90}, "fond_perdu": 3, "securite": 2.5, "rayon": 2.5,
    "geo": {
        "or": [3.95, 3.98, 61.05, 86.02], "encoche": [3.6, 3.42],
        "filets": [[round(x0 + DX, 3), round(y0 + DY, 3), round(x1 + DX, 3), round(y1 + DY, 3), n] for x0, y0, x1, y1, n in R],
        "boule": {"c": [round(50.25 + DX, 3), round(18.52 + DY, 3)], "r": 7.35},
        "disque": {"c": [round(14.44 + DX, 3), round(71.85 + DY, 3)], "r": 7.35, "anneau": 0.12},
        "etoiles": etoiles,
        "gen": [dec(r) for r in TV["gen"]], "nana": [dec(r) for r in TV["nana"]],
    },
    "couleurs": {"cadre": "#2b2528", "or": "#a08653", "noir": "#1e1a1a", "blanc": "#f6f3f4", "texte_blanc": "#ece9ee"},
    "textes": {"made": "MADE IN JAPAN", "copyright": "©バードスタジオ/集英社・フジテレビ・東映動画",
               "bird": "BIRD.S STUDIO", "toriyama": "鳥山", "weekly": "WEEKLY JUMP"},
    "cibles": {".made": [47.1, 4.55, 55.2, 5.28], ".copy": [7.98, 84.6, 34.52, 85.6],
               ".bird": [2.5, 86.95, 17.9, 88.5], ".tori": [19.8, 86.75, 24.3, 88.55], ".weekly": [46.55, 86.62, 62.0, 88.45]},
    "calage": {},
}
ecrire("carte_limited_verso.json", verso)
print("ok", len(R), "filets")
