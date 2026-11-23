#!/usr/bin/env python3
"""Fiche du logo « VHS — The future is here — 1976 » adapté en japonais.

  python3 outils/fiche_logo_vhs_japon.py

Image de référence 828 × 756 px ramenée à 124,2 × 113,4 mm (0,15 mm/px). Tout est recentré sur
l'axe de la page (x = 62,1) : sur la référence, le bloc est décalé d'environ 0,7 mm vers la gauche.
"""
import json, pathlib

D = pathlib.Path(__file__).resolve().parent.parent / "creations" / "2026-11_logo-vhs-japon"
p = D / "logo_vhs_japon.json"
ancien = json.loads(p.read_text(encoding="utf-8")) if p.exists() else {}
k = 0.15
L, H = 828 * k, 756 * k
AX = L / 2


def r(v): return round(v, 3)


def centre_x(x0, x1):
    d = AX - (x0 + x1) / 2
    return x0 + d, x1 + d


# VHS : encre totale (liseré compris) 45–772 × 133–430 px
vx0, vx1 = centre_x(45 * k, 772 * k)
vy0, vy1 = 133 * k, 430 * k
LIS, FIL = 1.25, 0.22        # largeur du liseré argent, du filet sombre (mm)
HW, HY0, HY1 = 27.0, 10.0, 16.8    # largeur des lettres HI-FI, haut et bas de son encre (mm)
CX, CY = 0.0, 0.0             # correction résiduelle mesurée sur le rendu

# bande : segments au milieu de la hauteur (y = 493,5 px), décalés pour centrer l'ensemble
seg = [(42, 232, "#feed09"), (246, 346, "#fe8211"), (361, 447, "#fb0430"), (467, 492, "#f40676"),
       (506, 531, "#e506b4"), (545, 569, "#b615d0"), (582, 606, "#792fda"), (621, 643, "#047cf9"),
       (658, 682, "#03b8fc"), (697, 773, "#08f1ee")]
dx = AX - (42 + 773) / 2 * k
segments = [[r(a * k + dx), r(b * k + dx), c] for a, b, c in seg]

# filets de l'année : 42–276 et 548–777 px, y 629,5–636,5 px, recentrés
fd = AX - (42 + 777) / 2 * k
filets = [[r(42 * k + fd), 94.45, r(276 * k + fd), 95.35], [r(548 * k + fd), 94.45, r(777 * k + fd), 95.35]]

fiche = {
    "modele": "logo-vhs-chrome", "titre_fichier": "Logo VHS chromé — version japonaise",
    "format": {"largeur": r(L), "hauteur": r(H)}, "fond_perdu": 3, "securite": 0,
    "geo": {
        "vhs_fs": 50, "vhs_ls": -2.6, "liseret": LIS, "filet_sombre": FIL,
        "etincelles": [[r(303 * k + 0.1), r(150 * k), 4.2], [r(742 * k), r(151 * k), 3.2],
                       [r(150 * k), r(412 * k), 2.4], [r(560 * k), r(414 * k), 2.0]],
        "bande": {"y": [r(459 * k), r(528 * k)], "pente": 0.38, "segments": segments},
        "filets": filets,
        "hifi_liseret": 0.4, "hifi_ls": 0.9, "acc_fs": 8.6, "acc_ls": 2.3,
        "an_fs": 6.0, "an_ls": 2.7,
    },
    "couleurs": {"fond": "#000000", "blanc": "#ffffff", "liseret": "#d6dade", "filet_sombre": "#30343a",
                 "chrome": [[0, "#ffffff"], [12, "#eef1f4"], [30, "#c2c8cf"], [44, "#6f7781"], [48, "#1c1f24"],
                            [56, "#3a4049"], [66, "#7f8892"], [80, "#e9edf1"], [88, "#ffffff"], [94, "#a9b0b8"], [100, "#e4e8ec"]]},
    "textes": {"vhs": "VHS", "hifi": "HI-FI", "accroche": "未来はもうここにある", "annee": "1976年"},
    "cibles": {
        # le calage mesure les lettres sans contour : liseré, filet et face partagent la même boîte de lettre,
        # le contour du liseré déborde de LIS jusqu'à l'encre totale relevée, celui du filet de FIL.
        **{s: [r(vx0 + LIS + CX + 0.25), r(vy0 + LIS + CY), r(vx1 - LIS - CX + 0.25), r(vy1 - LIS - CY)] for s in (".v-liseret", ".v-filet", ".v-face")},
        # HI-FI : au-dessus du S, calé à droite sur le bord du VHS
        **{s: [r(vx1 + 0.25 - 0.4 - HW), r(HY0 + 0.4), r(vx1 + 0.25 - 0.4), r(HY1 - 0.4)] for s in (".h-liseret", ".h-filet", ".h-face")},
        ".acc": {"bbox": [r(AX - 0.4), r((554 + 599) / 2 * k - 0.4), r(AX + 0.4), r((554 + 599) / 2 * k + 0.4)], "fixe": True},
        ".an": {"bbox": [r(AX - 0.4), r(94.9 - 0.4), r(AX + 0.4), r(94.9 + 0.4)], "fixe": True},
    },
    "calage": ancien.get("calage", {}),
}
D.mkdir(parents=True, exist_ok=True)
p.write_text(json.dumps(fiche, ensure_ascii=False, indent=1), encoding="utf-8")
print("ok")
