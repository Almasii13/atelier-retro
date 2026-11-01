#!/usr/bin/env python3
"""Fiches recto / verso du sachet Carddass France « Dragon Ball GT — Le Grand Combat, 9e partie »,
textes passés en japonais (Le Grand Combat → スーパーバトル).

  python3 outils/fiches_sachet_carddass_fr.py

Format 70,7 × 122,1 mm = zone verte (sans les soudures argentées). Cotes en mm relevées sur les photos
redressées (40 px/mm). Verso : les textes sont posés dans un repère tourné de −90° d'origine le coin
bas-gauche (u = 122,1 − y, v = x) ; les cibles de calage sont exprimées dans ce repère.
"""
import json, pathlib

D = pathlib.Path(__file__).resolve().parent.parent / "creations" / "2026-11_sachet-carddass-fr"
H = 122.1
REP = [0, H, -90]


def ecrire(nom, F):
    p = D / nom
    if p.exists():
        F["calage"] = json.loads(p.read_text(encoding="utf-8")).get("calage", {})
    p.write_text(json.dumps(F, ensure_ascii=False, indent=1), encoding="utf-8")


def fixe(cx, cy, bord=None, x0=None, lmax=None, d=0.4):
    b = {"bbox": [round((x0 if bord == "g" else cx - d), 3), round(cy - d, 3), round(cx + d, 3), round(cy + d, 3)], "fixe": True}
    if bord: b["bord"] = bord
    if lmax: b["lmax"] = lmax
    return b


def fixe_rot(u0, vc, d=0.3):
    """Ligne tournée : départ (bord gauche du repère) en u0, centre de l'encre en vc."""
    return {"bbox": [round(u0, 3), round(vc - d, 3), round(u0 + 2 * d, 3), round(vc + d, 3)], "repere": REP, "fixe": True, "bord": "g"}


def centre_rot(uc, vc, d=0.3):
    return {"bbox": [round(uc - d, 3), round(vc - d, 3), round(uc + d, 3), round(vc + d, 3)], "repere": REP, "fixe": True}


COMMUN = {"modele": "sachet-carddass-fr", "format": {"largeur": 70.7, "hauteur": H}, "fond_perdu": 3, "securite": 2.5}
COUL = {"vert": "#5cb43c", "blanc": "#ffffff", "nuit": "#1d1e36", "orange": "#c4632c", "argent_med": "#d9d4ca",
        "argent_onglet": "#d8d0bd", "argent": "#cfcbb8", "gris_fonce": "#464b42", "creme": "#f2ebcd",
        "blanc_cb": "#f7f6f2", "encre_cb": "#15152a",
        "soudure": "#5cb43c", "soudure_ombre": "#3f8a27", "soudure_reflet": "#7cc95c"}

# =========================================================================== RECTO
BX = 3.35
ycs = [5.17 + 2.89 * k for k in range(5)]
nb_y = [7.87, 11.23, 14.02, 16.83]
recto = {
    **COMMUN, "face": "recto", "titre_fichier": "Sachet Carddass DBGT スーパーバトル — recto 70,7x122,1",
    "geo": {
        "bloc_fs": 2.4,
        "cartouche": [51.62, 4.75, 65.05, 19.15],
        "medaillon": {"c": [55.9, 55.0], "r": 12.3, "anneau": [5.05, 0.35], "etoile": 2.65,
                      "points": [174, 4], "r_points": 8.7, "d_point": 1.3,
                      "fs": 3.3, "r_texte": 7.6, "haut": [214, 318], "bas": [128, 52]},
        "onglet": [-3, 85.7, 17.35, 93.72],
        "logo_carddass": [0.8, 19.3, 69.2, 37.6],
        "logo_dbgt": [2.8, 105.6, 36.0, 119.8],
        "logo_bandai": [55.95, 107.98, 65.7, 117.5],
    },
    "couleurs": COUL,
    "images": {},
    "libelles_calques": {"fond": "Fond vert", "image:illustration": "Illustration", "texte": "Textes & formes",
                         "image:logo_carddass": "Logo Carddass", "image:logo_dbgt": "Logo Dragon Ball GT", "image:logo_bandai": "Logo Bandai"},
    "textes": {
        "bloc": ["全46種類のカードを収録。", "プリズムカード7種を含む", "（ダブルプリズム2種、シークレット",
                 "プリズム2種、番外編プリズム1種）", "スペシャルフラッシュカード1種。"],
        "cartouche": ["5", "枚入り", "1パック", "あたり"],
        "arc_haut": "スーパー", "arc_bas": "バトル",
        "onglet": ["第", "9", "弾"],
    },
    "cibles": {
        **{f".b{k + 1}": fixe(BX + 10, ycs[k], "g", BX) for k in range(5)},
        **{f".n{k + 1}": fixe(58.33, nb_y[k]) for k in range(4)},
        ".o1": fixe(5.28, 90.58), ".o2": fixe(8.63, 89.71), ".o3": fixe(12.03, 90.58),
    },
    "calage": {},
}
ecrire("sachet_recto.json", recto)

# =========================================================================== VERSO
U0 = H - 114.0          # départ des mentions (bas, y = 114)
vd = [4.2, 7.35, 10.5, 13.6, 16.7, 19.85]
U1 = H - 56.8           # départ du bloc distributeur
vr = [42.5, 45.55, 48.65]
verso = {
    **COMMUN, "face": "verso", "titre_fichier": "Sachet Carddass DBGT スーパーバトル — verso 70,7x122,1",
    "geo": {
        "dos_fs": 2.5,
        "soudure": {"x": [24.0, 35.2], "ombre": 0.45},
        "encadre_cb": [42.4, 71.75, 65.05, 112.4],
        "barres": {"x": [45.0, 60.1], "x_garde": 61.6, "y": [105.0, 76.0]},
        "logo_recyclage": [55.45, 34.7, 63.85, 43.15],
        "logo_bandai": [54.75, 47.05, 64.62, 57.45],
    },
    "couleurs": COUL,
    "images": {},
    "libelles_calques": {"fond": "Fond vert", "soudure": "Soudure dorsale (relief du sachet)", "image:illustration": "Illustration",
                         "texte": "Textes & code-barres", "image:logo_recyclage": "Logo recyclage", "image:logo_bandai": "Logo Bandai"},
    "textes": {
        "dos": ["©バードスタジオ／集英社・東映アニメーション",
                "カードダスは株式会社バンダイの登録商標です。写真・",
                "イラストは予告なく変更する場合があります。",
                "プリズムカードの出現率は約1/20です。",
                "この確率は全生産数に対して算出したもので、各パックや",
                "ボックスでの出現を保証するものではありません。"],
        "distrib": ["販売元：株式会社バンダイ（フランス）", "インダストリー通り4番地", "95310 サン＝トゥアン＝ロモーヌ"],
        "ref": "品番 04014",
        "ean": "329658004014",
    },
    "cibles": {
        **{f".d{k + 1}": fixe_rot(U0, vd[k]) for k in range(6)},
        **{f".r{k + 1}": fixe_rot(U1, vr[k]) for k in range(3)},
        ".ref": fixe_rot(H - 31.5, 63.3),
        ".c0": centre_rot(H - 107.5, 62.4), ".c1": centre_rot(H - 97.7, 62.4), ".c2": centre_rot(H - 83.3, 62.4),
    },
    "calage": {},
}
ecrire("sachet_verso.json", verso)
print("ok")
