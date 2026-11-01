#!/usr/bin/env python3
"""Fiche de la carte « Super Battle » Dragon Ball Z n° 181 (孫悟空), textes adaptés :
Goku dit au revoir en partant pour le paradis.

  python3 outils/fiche_dbz_181.py

Même modèle que la carte GT n° 749 (carte-power-level). Cotes en mm (page finie 65 × 90), relevées sur la
photo redressée sur le liseré noir de la fenêtre (40 px/mm). Bandeau : repère tourné de −12,4°.
"""
import json, pathlib

D = pathlib.Path(__file__).resolve().parent.parent / "creations" / "2026-11_carte-dbz-181"
p = D / "carte_dbz_181.json"
ancien = json.loads(p.read_text(encoding="utf-8")) if p.exists() else {}

ANG = -12.4
X0, X1, W, G = 31.98, 61.05, 4.637, 0.25          # échelle 1–5 + case barrée
cases = [[round(X0 + k * (W + G), 3), 83.35, round(X0 + k * (W + G) + W, 3), 86.4] for k in range(6)]


def centre(b, d=0.4):
    cx, cy = (b[0] + b[2]) / 2, (b[1] + b[3]) / 2
    return {"bbox": [round(cx - d, 3), round(cy - d, 3), round(cx + d, 3), round(cy + d, 3)], "fixe": True}


fiche = {
    "modele": "carte-power-level", "titre_fichier": "Carte Super Battle DBZ n°181 — Goku part au paradis — recto 65x90",
    "format": {"largeur": 65, "hauteur": 90}, "fond_perdu": 3, "securite": 2.5, "rayon": 2.5,
    "geo": {
        "cadre": [3.05, 3.03, 61.95, 87.2], "cadre_ep": 0.48,
        "damier": {"periode": [3.4, 3.4], "phase": [0, 0]},
        "panneau": [3.05, 76.27, 61.95, 87.2],
        "encadre": [3.95, 76.72, 31.3, 86.4],
        "jaune": [31.98, 76.72, 61.05, 82.78],
        "cases": cases, "niveau": 5, "barre_ep": 0.2, "chiffre_contour": 0.18,
        "octogone": {"blanc": [50.15, 2.1, 61.77, 13.2], "chanfrein": 1.75, "bord_noir": 0.5, "bord_blanc": 0.4},
        "angle_bandeau": ANG,
        "bandeau": {"u_debut": -25, "noir": [68.85, 71.72], "rouge": [71.72, 76.7], "coupe_noir": [7.93, 6.07],
                    "coupe_rouge": [25.8, 20.6], "liseret": 0.01, "pastille": [-11.95, 75.05, 1.08]},
        "ruby_ecart": 0.6, "ruby_ecart_bandeau": 0.99, "ruby_decalage_bandeau": 0.5,
        "logo": [4.3, 3.6, 27.6, 14.6],
        "police_11": '"Heros Cn BI"', "ls_11": -1.0,
        "police_badge": '400 8mm/1 "Black Ops One"', "biais_badge": True,
        "police_nom": '400 2.2mm/1 "MR Medium"',
        "police_attaque": '400 2.6mm/1 "MR Bold"',
        "police_rt_bandeau": '400 1.0mm/1 "MR Medium"',
        "police_tb": '400 2.5mm/1 "MR Medium"',
        "police_rt": '400 1.0mm/1 "MR Medium"',
    },
    "couleurs": {"noir": "#18161a", "blanc": "#ece8e4", "texte_blanc": "#f7f1ef", "texte_fonce": "#1d1c1c",
                 "encadre": "#d9d8ce", "jaune": "#f2d417", "gris": "#5d5c60", "vert": "#2f9a3f",
                 "rouge_chiffre": "#e0261f", "power_haut": "#151314", "power_bas": "#151314",
                 "or_haut": "#f2cf56", "or_bas": "#c08f22", "bande_noire": "#1c1a1e", "bande_rouge": "#e2321f",
                 "liseret": "#1c1a1e", "damier": {},
                 # fenêtre : l'illustration (salle, sol rouge) fait partie de l'image à poser ; fond indicatif
                 "fenetre": [[0, "#dfe9f3"], [55, "#c9d7e6"], [57, "#c42a26"], [100, "#a5201d"]]},
    "images": {"fond": "images/fond_bleu.png"},
    "libelles_calques": {"image:fond": "Fond bleu marbré", "cadre": "Cadre & fenêtre", "image:personnages": "Illustration",
                         "texte": "Textes & formes", "image:logo": "Logo"},
    "textes": {
        "nom_lecture": "そんごくう", "nom": "孫悟空",
        "attaque": ["またな", ["!", "it"], " ", ["天国", "てんごく"], "へ", ["旅立", "たびだ"], "ちっ", ["!!", "it"]],
        "numero": "181",
        "encadre": [["みんな、", ["元気", "げんき"], "でな", ["!", "it"]],
                    ["オラは", ["天国", "てんごく"], "へ", ["行", "い"], "くぞ", ["!!", "it"]]],
        "power": ["POWER", "LEVEL"], "niveau_power": "7", "echelle": ["1", "2", "3", "4", "5"], "badge": "Z",
    },
    "cibles": {
        **{f".cel{k + 1}": centre(cases[k]) for k in range(5)},
        ".ban-num": {"bbox": [-12.65, 74.45, -11.25, 75.65], "repere": [0, 0, ANG]},
        ".ban-nom2": {"bbox": [-11.85, 69.18, -4.43, 71.32], "repere": [0, 0, ANG]},
        ".ban-nom1": {"bbox": [-4.0, 69.9, 2.65, 71.0], "repere": [0, 0, ANG]},
        ".ban-l2": {"bbox": [-10.12, 73.4, 21.08, 76.12], "repere": [0, 0, ANG]},
        ".tb1": [5.8, 79.45, 26.3, 81.4],
        ".tb2": [6.0, 82.6, 29.7, 84.75],
        ".pw-power": [32.42, 77.45, 48.92, 79.65],
        ".pw-level": [32.42, 80.2, 47.6, 82.5],
        ".pw-11": [51.1, 72.1, 60.0, 81.3],
        ".octo-da": [52.5, 4.05, 59.8, 11.2],
    },
    "calage": ancien.get("calage", {}),
}
p.write_text(json.dumps(fiche, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok", p)
