#!/usr/bin/env python3
"""Fiches des deux jaquettes VHS PREY (2022) : style « ALIEN 1979 » et style réédition « ALIEN: ROMULUS ».

  python3 outils/vhs_prey.py ref     → écrit les fiches de référence (textes d'origine, cibles complètes)
  python3 outils/vhs_prey.py prey    → écrit les fiches PREY : corps/étirements repris du calage de référence,
                                        seuls les centres sont calés (lignes centrées sur l'axe de la jaquette)

Cotes en mm (page finie 104,5 × 189), relevées sur la photo redressée (ALIEN) et le scan (ROMULUS).
"""
import json, pathlib, sys, copy
from fontTools.ttLib import TTFont

RACINE = pathlib.Path(__file__).resolve().parent.parent
DOSSIER = RACINE / "creations" / "2026-10_vhs-prey"
L, H = 104.5, 189.0
AXE = L / 2
FONTS = RACINE / "lib" / "fonts"
_cache = {}


def metriques(fichier):
    if fichier not in _cache:
        t = TTFont(FONTS / fichier)
        from fontTools.pens.boundsPen import BoundsPen
        gs, cm, upm = t.getGlyphSet(), t.getBestCmap(), t["head"].unitsPerEm
        d = {}
        for ch in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
            g = cm[ord(ch)]; bp = BoundsPen(gs); gs[g].draw(bp)
            x0, _, x1, _ = bp.bounds
            d[ch] = (gs[g].width / upm, x0 / upm, (gs[g].width - x1) / upm)
        _cache[fichier] = (d, t["OS/2"].sCapHeight / upm)
    return _cache[fichier]


def titre_espace(fichier, lettres, cap, sx, gap, x, top):
    """Titre à lettres espacées : corps (cap) et approche telle que l'écart d'encre moyen entre lettres = gap."""
    d, capr = metriques(fichier)
    fs = cap / capr
    lettres = lettres.replace(" ", "")
    sb = [(d[a][2] + d[b][1]) * fs for a, b in zip(lettres, lettres[1:])]
    ls = gap / sx - sum(sb) / len(sb)
    largeur = sx * (sum(d[c][0] * fs for c in lettres) + ls * (len(lettres) - 1) - d[lettres[0]][1] * fs - d[lettres[-1]][2] * fs)
    return {"x": x, "y": round(top - 0.3 * fs, 3), "fs": round(fs, 4), "ls": round(ls, 4), "sx": sx, "cap": cap,
            "largeur": round(largeur, 3), "top": top}


# ======================================================================= A : ALIEN 1979
def fiche_a(prey):
    F = {
        "modele": "vhs-classique",
        "titre_fichier": "Jaquette VHS PREY — style ALIEN 1979 (104,5 × 189)" if prey else "Référence ALIEN 1979",
        "format": {"largeur": L, "hauteur": H}, "fond_perdu": 3, "securite": 3,
        "couleurs": {"noir": "#121718", "creme": "#efe4cb", "encre": "#262321", "blanc": "#f3ede2", "titre": "#efe7d4"},
        "images": {"visuel": "images/visuel.png", "classification": "images/classification.png", "logo": "images/logo_studio.png"},
        "libelles_calques": {"fond": "Fond (noir, panneau crème)", "image:visuel": "Visuel", "texte": "Textes & filets",
                             "image:classification": "Classification", "image:logo": "Logo studio"},
    }
    G = {"noir_bas": 152.9, "visuel": [-3, -3, L + 3, 152.9], "filet": 0.22,
         "encadres": [[32.55, 176.15, 79.45, 179.2], [80.6, 176.15, 96.7, 179.2]],
         "classification": [38.0, 180.2, 57.3, 184.2], "logo": [58.6, 180.2, 64.7, 184.0]}
    # titres espacés (Archivo Black) : écart d'encre entre lettres relevé sur l'original
    G["titre"] = titre_espace("ArchivoBlack-Regular.ttf", "PREY" if prey else "ALIEN", 3.95, 0.87, 15.2, AXE, 8.65)
    G["titre_petit"] = titre_espace("ArchivoBlack-Regular.ttf", "PREY" if prey else "ALIEN", 2.2, 0.95, 3.35, AXE if prey else AXE + 0.45, 156.28)
    sp = lambda s: " ".join(s)  # lettres espacées par l'approche : texte sans espaces
    T = {"titre": "PREY" if prey else "ALIEN", "titre_petit": "PREY" if prey else "ALIEN"}
    # lignes : (clé, cible encre d'origine, corps initial, classe)
    ref = {
        "accroche": ([18.4, 103.2, 88.9, 106.85], 4.0, "clair gras"),
        "copyright": ([88.5, 153.2, 103.9, 154.2], 0.95, ""),
        "presente": ([20.2, 156.2, 40.2, 156.95], 1.0, ""),
        "cast1": ([8.6, 160.9, 95.9, 162.8], 2.6, ""),
        "cast2": ([5.1, 163.5, 98.0, 165.5], 2.6, ""),
        "g3": ([3.0, 166.95, 103.5, 168.05], 1.5, ""),
        "g4": ([15.9, 169.2, 89.7, 170.4], 1.5, ""),
        "g5": ([18.7, 171.3, 87.6, 172.5], 1.5, ""),
        "g6": ([30.25, 173.8, 76.25, 175.0], 1.5, ""),
        "encadre1": ([33.35, 177.45, 78.65, 178.1], 0.85, "gras"),
        "encadre2": ([81.6, 177.45, 95.7, 178.1], 0.85, "gras"),
        "duree": ([36.4, 185.6, 65.8, 188.3], 2.9, ""),
    }
    if not prey:
        T["lignes"] = {
            "accroche": [["In space no one can hear you scream."]],
            "copyright": [["© 1979 TWENTIETH CENTURY-FOX"]],
            "presente": [["TWENTIETH CENTURY-FOX PRESENTS"]],
            "cast1": [["TOM SKERRITT  SIGOURNEY WEAVER  VERONICA CARTWRIGHT"]],
            "cast2": [["HARRY DEAN STANTON  JOHN HURT  IAN HOLM ", {"p": "and"}, " YAPHET KOTTO"], {"l": ["AS", "PARKER"], "haut": True}],
            "g3": [["EXECUTIVE PRODUCER RONALD SHUSETT   PRODUCED BY GORDON CARROLL, DAVID GILER ", {"p": "and"}, " WALTER HILL"]],
            "g4": [["DIRECTED BY RIDLEY SCOTT   STORY BY DAN O’BANNON ", {"p": "and"}, " RONALD SHUSETT"]],
            "g5": [["SCREENPLAY BY DAN O’BANNON MUSIC JERRY GOLDSMITH  PANAVISION®"]],
            "g6": [["EASTMAN KODAK COLOR®    PRINTS BY DELUXE®"]],
            "encadre1": [["MOTION PICTURE SOUNDTRACK AVAILABLE ON 20TH CENTURY-FOX RECORDS & TAPES"]],
            "encadre2": [["READ THE WARNER BOOK"]],
            "duree": [["Running Time: 116 Min."]],
        }
    else:
        T["lignes"] = {
            "accroche": [["In 1719, the hunter became the hunted."]],
            "copyright": [["© 2022 20TH CENTURY STUDIOS"]],
            "presente": [["20TH CENTURY STUDIOS PRESENTS"]],
            "cast1": [["AMBER MIDTHUNDER  DAKOTA BEAVERS  MICHELLE THRUSH"]],
            "cast2": [["STORMEE KIPP  JULIAN BLACK ANTELOPE ", {"p": "and"}, " DANE DILIEGRO"], {"l": ["AS", "PREDATOR"], "haut": True}],
            "g3": [["EXECUTIVE PRODUCER LAWRENCE GORDON   PRODUCED BY JOHN DAVIS, JHANE MYERS ", {"p": "and"}, " MARTY EWING"]],
            "g4": [["DIRECTED BY DAN TRACHTENBERG   STORY BY PATRICK AISON ", {"p": "and"}, " DAN TRACHTENBERG"]],
            "g5": [["SCREENPLAY BY PATRICK AISON MUSIC SARAH SCHACHNER  DIRECTOR OF PHOTOGRAPHY JEFF CUTTER"]],
            "g6": [["BASED ON CHARACTERS CREATED BY JIM THOMAS ", {"p": "and"}, " JOHN THOMAS"]],
            "encadre1": [["MOTION PICTURE SOUNDTRACK AVAILABLE ON HOLLYWOOD RECORDS"]],
            "encadre2": [["A HULU ORIGINAL FILM"]],
            "duree": [["Running Time: 99 Min."]],
        }
    lignes, cibles = {}, {}
    for cle, (bb, fs, cls) in ref.items():
        lignes[cle] = {"x": round((bb[0] + bb[2]) / 2, 3), "y": round(bb[1] - 0.25 * fs, 3), "fs": fs, "cls": cls,
                       "ls": {"g3": .12, "g4": .12, "g5": .12, "g6": .12, "presente": .06, "encadre1": .08, "encadre2": .08}.get(cle, 0),
                       "groupe": "Accroche" if cle == "accroche" else ("Encadrés" if cle.startswith("encadre") else "Générique")}
        cibles[f".ln-{cle}"] = bb
    # axes des lignes de la version PREY : centrées sur la jaquette, sauf éléments décentrés d'origine
    axes = {"copyright": None, "encadre1": (32.55 + 79.45) / 2, "encadre2": (80.6 + 96.7) / 2, "duree": (36.4 + 65.8) / 2,
            "presente": None}
    lmax = {"accroche": 82, "cast1": 92, "cast2": 92, "g3": 96, "g4": 92, "g5": 92, "g6": 92, "encadre1": 45.6, "encadre2": 15.0,
            "copyright": 18}
    G["lignes"] = lignes
    F["geo"], F["textes"] = G, T
    for cle in ("titre", "titre_petit"):
        t = G[cle]; cy = t["top"] + t["cap"] / 2
        cibles[f".tt-{cle}"] = {"bbox": [t["x"] - t["largeur"] / 2, cy - t["cap"] / 2, t["x"] + t["largeur"] / 2, cy + t["cap"] / 2], "fixe": True}
    F["cibles"] = cibles
    F["calage"] = {f".tt-{c}": {"fs": 1, "sx": G[c]["sx"], "dx": 0, "dy": 0} for c in ("titre", "titre_petit")}
    return F, axes, lmax


# ======================================================================= B : ALIEN: ROMULUS
def fiche_b(prey):
    F = {
        "modele": "vhs-reedition",
        "titre_fichier": "Jaquette VHS PREY — style réédition ROMULUS (104,5 × 189)" if prey else "Référence ALIEN: ROMULUS",
        "format": {"largeur": L, "hauteur": H}, "fond_perdu": 3, "securite": 3,
        "couleurs": {"creme": "#e6e2d9", "encre": "#2b2a29", "titre": "#f6f5f1", "fond_visuel": "#0e1820",
                     "fondu": ["rgba(14,24,32,0)", "rgba(14,24,32,1)"], "pastille": "#e2d82a", "encre_pastille": "#24231f",
                     "cartouche": "#77736d"},
        "images": {"visuel": "images/visuel.png", "logo_vhs": "images/logo_vhs.png", "logo": "images/logo_studio.png",
                   "mini_logo_1": "images/mini_logo_1.png", "mini_logo_2": "images/mini_logo_2.png"},
        "libelles_calques": {"fond": "Fond (crème, cadre visuel)", "image:visuel": "Visuel", "fondu": "Fondu sombre (bas du visuel)",
                             "texte": "Textes & pastille", "cartouche": "Cartouche mention",
                             "image:logo_vhs": "Logo VHS", "image:logo": "Logo studio",
                             "image:mini_logo_1": "Mini-logo gauche", "image:mini_logo_2": "Mini-logo droite"},
    }
    v = [7.875, 7.25, 96.625, 158.1]
    G = {"visuel": v, "fondu": [116.0, 158.1],
         "pastille": {"c": [82.6, 14.4], "r": 11.1, "angle": 10,
                      "lim": [-6.6, -4.6, 4.3], "edi": [-9.0, -0.8, 4.4]},
         "cartouche": [45.35, 173.55, 52.4, 174.45],
         "logo_vhs": [3.95, 178.3, 16.65, 184.7], "logo": [89.6, 174.9, 101.15, 184.5],
         "mini_logo_1": [40.55, 173.0, 44.4, 174.5], "mini_logo_2": [60.05, 173.35, 61.4, 174.5]}
    G["titre"] = titre_espace("ArchivoBlack-Regular.ttf", "PREY" if prey else "ALIEN", 6.2, 0.92, 12.55, AXE, 138.9)
    G["sous_titre"] = titre_espace("MonaSans-SemiBold.ttf", "PREDATOR" if prey else "ROMULUS", 4.25, 1.0, 5.0, AXE, 148.6)
    T = {"titre": "PREY" if prey else "ALIEN", "sous_titre": "PREDATOR" if prey else "ROMULUS",
         "pastille": ["LIMITED", "EDITION"]}
    ref = {
        "b1": ([14.95, 162.1, 87.95, 163.75], 1.86),
        "b2": ([20.25, 164.15, 82.95, 165.8], 1.86),
        "b3": ([10.6, 166.15, 92.1, 167.8], 1.86),
        "b4": ([9.6, 168.15, 94.6, 169.85], 1.86),
        "b5": ([16.75, 170.15, 87.4, 171.8], 1.86),
    }
    dessus = {
        "cartouche_txt": ([45.75, 173.85, 52.0, 174.15], 0.4, "sur-cartouche"),
        "copyright": ([53.35, 174.05, 59.5, 174.45], 0.55, "mini"),
    }
    if not prey:
        T["lignes"] = {
            "b1": [["20TH CENTURY STUDIOS ", {"p": "PRESENTS"}, " ", {"p": "A"}, " SCOTT FREE/BRANDYWINE ", {"p": "PRODUCTION"}, " ", {"p": "A"},
                    " FEDE ALVAREZ ", {"p": "FILM"}, " “ALIEN: ROMULUS”"]],
            "b2": [["CAILEE SPAENY  DAVID JONSSON  ARCHIE RENAUX  ISABELA MERCED  SPIKE FEARN  AILEEN WU"]],
            "b3": [{"l": ["VISUAL EFFECTS", "SUPERVISOR"]}, ["ERIC BARBA"], {"l": ["MUSIC", "BY"]}, ["BENJAMIN WALLFISCH ", {"p": "EDITOR"}, " JAKE ROBERTS, ", {"p": "ACE"}],
                   {"l": ["PRODUCTION", "DESIGNER"]}, ["NAAMAN MARSHALL"], {"l": ["DIRECTOR OF", "PHOTOGRAPHY"]}, ["GALO OLIVARES"]],
            "b4": [{"l": ["EXECUTIVE", "PRODUCERS"]}, ["FEDE ALVAREZ  ELIZABETH CANTILLON  BRENT O’CONNOR  TOM MORAN"], {"l": ["PRODUCED", "BY"]},
                   ["RIDLEY SCOTT  MICHAEL PRUSS  WALTER HILL"]],
            "b5": [{"l": ["BASED ON CHARACTERS", "CREATED BY"]}, ["DAN O’BANNON ", {"p": "AND"}, " RONALD SHUSETT"], {"l": ["WRITTEN", "BY"]},
                   ["FEDE ALVAREZ ", {"p": "&"}, " RODO SAYAGUES"], {"l": ["DIRECTED", "BY"]}, ["FEDE ALVAREZ"]],
            "cartouche_txt": [["SOUNDTRACK AVAILABLE ON HOLLYWOOD RECORDS"]],
            "copyright": [["© 2024 20th Century Studios"]],
        }
    else:
        T["lignes"] = {
            "b1": [["20TH CENTURY STUDIOS ", {"p": "PRESENTS"}, " ", {"p": "A"}, " DAVIS ENTERTAINMENT/LAWRENCE GORDON ", {"p": "PRODUCTION"}, " ", {"p": "A"},
                    " DAN TRACHTENBERG ", {"p": "FILM"}, " “PREY”"]],
            "b2": [["AMBER MIDTHUNDER  DAKOTA BEAVERS  DANE DILIEGRO  STORMEE KIPP  MICHELLE THRUSH  JULIAN BLACK ANTELOPE"]],
            "b3": [{"l": ["COSTUME", "DESIGNER"]}, ["STEPHANIE PORTER"], {"l": ["MUSIC", "BY"]}, ["SARAH SCHACHNER"], {"l": ["EDITED", "BY"]},
                   ["ANGELA M. CATANZARO  CLAUDIA CASTELLO"], {"l": ["DIRECTOR OF", "PHOTOGRAPHY"]}, ["JEFF CUTTER"]],
            "b4": [{"l": ["EXECUTIVE", "PRODUCERS"]}, ["LAWRENCE GORDON  BEN ROSENBLATT  MARC TOBEROFF"], {"l": ["PRODUCED", "BY"]},
                   ["JOHN DAVIS  JHANE MYERS  MARTY EWING"]],
            "b5": [{"l": ["BASED ON CHARACTERS", "CREATED BY"]}, ["JIM THOMAS ", {"p": "AND"}, " JOHN THOMAS"], {"l": ["STORY", "BY"]},
                   ["PATRICK AISON ", {"p": "&"}, " DAN TRACHTENBERG"], {"l": ["SCREENPLAY", "BY"]}, ["PATRICK AISON"], {"l": ["DIRECTED", "BY"]},
                   ["DAN TRACHTENBERG"]],
            "cartouche_txt": [["SOUNDTRACK ON HOLLYWOOD RECORDS"]],
            "copyright": [["© 2022 20th Century Studios"]],
        }
    lignes, cibles = {}, {}
    for cle, (bb, fs) in ref.items():
        lignes[cle] = {"x": round((bb[0] + bb[2]) / 2, 3), "y": round(bb[1] - 0.2 * fs, 3), "fs": fs}
        cibles[f".ln-{cle}"] = bb
    G["lignes"] = lignes
    G["lignes_dessus"] = {}
    for cle, (bb, fs, cls) in dessus.items():
        G["lignes_dessus"][cle] = {"x": round((bb[0] + bb[2]) / 2, 3), "y": round(bb[1] - 0.2 * fs, 3), "fs": fs, "cls": cls}
        cibles[f".ln-{cle}"] = bb
    # pastille (texte identique à l'original) : cotes d'encre dans le repère tourné de la pastille
    cibles[".lim"] = {"bbox": [-6.3, -3.7, 6.65, -0.55], "repere": [82.6, 14.4, 10]}
    cibles[".edi"] = {"bbox": [-8.7, 0.15, 9.0, 3.35], "repere": [82.6, 14.4, 10]}
    for cle in ("titre", "sous_titre"):
        t = G[cle]; cy = t["top"] + t["cap"] / 2
        cibles[f".tt-{cle}"] = {"bbox": [t["x"] - t["largeur"] / 2, cy - t["cap"] / 2, t["x"] + t["largeur"] / 2, cy + t["cap"] / 2], "fixe": True}
    F["geo"], F["textes"], F["cibles"] = G, T, cibles
    F["calage"] = {f".tt-{c}": {"fs": 1, "sx": G[c]["sx"], "dx": 0, "dy": 0} for c in ("titre", "sous_titre")}
    axes = {"cartouche_txt": (45.35 + 52.4) / 2, "copyright": (53.35 + 59.5) / 2}
    lmax = {"b1": 88, "b2": 88, "b3": 88, "b4": 88, "b5": 88, "cartouche_txt": 6.4, "copyright": 6.6}
    return F, axes, lmax


def ecrire(nom, F):
    DOSSIER.mkdir(parents=True, exist_ok=True)
    (DOSSIER / nom).write_text(json.dumps(F, ensure_ascii=False, indent=1), encoding="utf-8")


def version_prey(nom_ref, F_prey, axes, lmax):
    """Reprend corps/étirements calés sur la référence ; cibles = centres seulement (axe de la jaquette)."""
    R = json.loads((DOSSIER / nom_ref).read_text(encoding="utf-8"))
    cal = {}
    for sel, cib in R["cibles"].items():
        c = copy.deepcopy(R["calage"].get(sel, {"fs": 1, "sx": 1, "dx": 0, "dy": 0}))
        bb = cib["bbox"] if isinstance(cib, dict) else cib
        if isinstance(cib, dict) and cib.get("repere"):
            cal[sel] = c; F_prey["cibles"][sel] = cib; continue      # texte inchangé (pastille)
        if sel in (".tt-titre", ".tt-titre_petit", ".tt-sous_titre"):
            cal[sel] = {"fs": 1, "sx": c["sx"], "dx": 0, "dy": 0}; continue   # cible déjà recalculée pour PREY
        cle = sel.replace(".ln-", "")
        ax = axes.get(cle, AXE)
        c["dx"] = 0; c["dy"] = 0
        cal[sel] = c
        cy = (bb[1] + bb[3]) / 2
        if ax is None:   # aligné à droite : © sur la marge droite, « présente » contre le petit titre
            if cle == "presente":
                tp = F_prey["geo"]["titre_petit"]; xd = tp["x"] - tp["largeur"] / 2 - 1.1
            else:
                xd = L - 2.5
            F_prey["cibles"][sel] = {"bbox": [xd - 2, cy - 0.5, xd, cy + 0.5], "fixe": True, "bord": "d", "lmax": lmax.get(cle)}
        else:
            F_prey["cibles"][sel] = {"bbox": [ax - 1, cy - 0.5, ax + 1, cy + 0.5], "fixe": True, "lmax": lmax.get(cle)}
    # lignes d'un même niveau : même corps et même chasse (moyenne des lignes fiables de la référence)
    familles = [([".ln-cast1", ".ln-cast2"], [".ln-cast1", ".ln-cast2"]),
                ([".ln-g3", ".ln-g4", ".ln-g5", ".ln-g6"], [".ln-g4", ".ln-g5", ".ln-g6"]),
                ([".ln-encadre1", ".ln-encadre2"], [".ln-encadre1", ".ln-encadre2"]),
                ([".ln-b1", ".ln-b2", ".ln-b3", ".ln-b4", ".ln-b5"], [".ln-b1", ".ln-b2", ".ln-b3", ".ln-b4", ".ln-b5"])]
    for cibles_f, sources in familles:
        src = [R["calage"][s] for s in sources if s in R["calage"]]
        if not src:
            continue
        fs = round(sum(c["fs"] for c in src) / len(src), 4); sx = round(sum(c["sx"] for c in src) / len(src), 4)
        for s in cibles_f:
            if s in cal: cal[s].update(fs=fs, sx=sx)
    F_prey["calage"] = cal
    return F_prey


if __name__ == "__main__":
    mode = sys.argv[1]
    if mode == "ref":
        ecrire("ref_alien1979.json", fiche_a(False)[0])
        ecrire("ref_romulus.json", fiche_b(False)[0])
    else:
        Fa, axa, lma = fiche_a(True); ecrire("jaquette_prey_alien1979.json", version_prey("ref_alien1979.json", Fa, axa, lma))
        Fb, axb, lmb = fiche_b(True); ecrire("jaquette_prey_romulus.json", version_prey("ref_romulus.json", Fb, axb, lmb))
