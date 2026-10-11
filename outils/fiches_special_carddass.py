#!/usr/bin/env python3
"""Écrit les fiches recto / verso de la carte SPECIAL CARDDASS (géométrie : outils/special_carddass.py)."""
import json, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
import special_carddass as sc

D = pathlib.Path(__file__).resolve().parent.parent / "creations" / "2026-10_carte-special-carddass"
D.mkdir(parents=True, exist_ok=True)


def garder_calage(nom, F):
    p = D / nom
    if p.exists():
        F["calage"] = json.loads(p.read_text(encoding="utf-8")).get("calage", {})
    p.write_text(json.dumps(F, ensure_ascii=False, indent=1), encoding="utf-8")


G = sc.construire()
G.update({"logo": [33.125, 74.9, 53.925, 82.9], "wj_contour": 0.09})
fen = [(0, "#c63c48"), (1, "#c8404a"), (12.6, "#ca4c4c"), (18.3, "#d07040"), (24.1, "#d8b030"), (29.9, "#dad024"),
       (38.5, "#dcd812"), (47.2, "#dac424"), (53, "#d8b434"), (58.7, "#d6a840"), (64.5, "#d49040"), (70.3, "#cc7c44"),
       (76, "#c6623f"), (81.8, "#c44e3e"), (93.4, "#c03a3e"), (100, "#be363e")]
recto = {
    "modele": "carte-special-carddass", "titre_fichier": "Carte SPECIAL CARDDASS — recto 65x90",
    "format": {"largeur": 65, "hauteur": 90}, "fond_perdu": 3, "securite": 2.5, "rayon": 2.5,
    "geo": G,
    "couleurs": {"argent": "#b9c3cf", "noir": "#1c202b", "bleu": "#1e98e2", "cerclage": "#2a3140", "disque": "#e3e7ed",
                 "rouge": "#d4403c", "texte": "#22252f", "marine": "#2e3c88", "creme": "#f2edd6", "or": "#d6c15e",
                 "fenetre": fen},
    "images": {"personnage": "images/personnage.png", "logo": "images/logo_dragon_ball.png"},
    "libelles_calques": {"fond": "Fond argent", "cadre": "Cadre, piliers, bandeau", "image:personnage": "Personnage",
                         "texte": "Macaron & copyright", "image:logo": "Logo DRAGON BALL"},
    "textes": {"bandeau": "SPECIAL CARDDASS", "weekly": "WEEKLY", "jump": "JUMP",
               "copyright": ["©バードスタジオ/集英社", "・フジテレビ・東映動画"]},
    "cibles": {".bandeau": [11.875, 3.65, 53.125, 7.88],
               ".wj-weekly": [5.5, 78.55, 14.6, 80.0], ".wj-jump": [5.45, 80.95, 14.6, 83.95],
               ".copy-1": [30.7, 83.1, 55.4, 84.8], ".copy-2": [34.125, 85.2, 55.325, 86.9]},
    "calage": {},
}
verso = {
    "modele": "carte-verso-damier", "titre_fichier": "Carte SPECIAL CARDDASS — verso JUMP MUSEUM 65x90",
    "format": {"largeur": 65, "hauteur": 90}, "fond_perdu": 3, "securite": 2.5, "rayon": 2.5,
    "geo": {"damier": {"y": 86.35, "h": 1.95, "rangs": 2, "x0": -2.6, "w": 2.2, "n": 32}, "visuel": [-3, -3, 68, 86.35]},
    "couleurs": {"jaune": "#f2e600", "blanc": "#f4f4f0", "noir": "#15161a"},
    "images": {"visuel": "images/jump_museum.png"},
    "libelles_calques": {"fond": "Fond jaune & damier", "image:visuel": "Illustration JUMP MUSEUM"},
    "calage": {},
}
garder_calage("carte_special_carddass_recto.json", recto)
garder_calage("carte_special_carddass_verso.json", verso)
print("ok")
