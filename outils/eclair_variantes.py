#!/usr/bin/env python3
"""4 variantes de l'éclair doré bas-droit de la carte Goku : même géométrie (4 facettes en losange),
reflets dorés différents. Variante 1 = reflets relevés sur la photo ; 2 à 4 = reflets générés : profil de
luminosité (bandes claires / sombres) passé dans la gamme d'ors relevée sur la photo.

  python3 outils/eclair_variantes.py
"""
import json, pathlib, copy
import numpy as np
from shapely.geometry import Polygon

D = pathlib.Path(__file__).resolve().parent.parent / "creations" / "2026-11_cartes-carddass-or"
BASE = json.loads((D / "eclair_goku_bas_droite_x10.json").read_text(encoding="utf-8"))

# gamme d'ors (sombre → reflet), relevée sur les facettes de la photo
GAMME = [(0.00, "#5e3f1c"), (0.14, "#744e2b"), (0.28, "#8f612c"), (0.42, "#b47a2c"), (0.55, "#c99038"),
         (0.68, "#dcaa55"), (0.80, "#f2cd8c"), (0.90, "#f7e2b6"), (1.00, "#fbf3d8")]
GV = np.array([g[0] for g in GAMME]); GC = np.array([[int(c[i:i + 2], 16) for i in (1, 3, 5)] for _, c in GAMME], float)


def couleur(l, chaud=0.0):
    c = np.array([np.interp(l, GV, GC[:, i]) for i in range(3)])
    c += np.array([10, 2, -10]) * chaud  # légère variation de teinte (plus cuivré / plus jaune)
    return "#%02x%02x%02x" % tuple(int(round(min(255, max(0, v)))) for v in c)


def profil(rng, base, n_clairs, n_sombres):
    t = np.linspace(0, 1, 101)
    l = np.full_like(t, base)
    for _ in range(n_clairs):
        c, w, a = rng.uniform(0.05, 0.95), rng.uniform(0.03, 0.07), rng.uniform(0.40, 0.60)
        l += a * np.exp(-((t - c) / w) ** 2)
    for _ in range(n_sombres):
        c, w, a = rng.uniform(0.05, 0.95), rng.uniform(0.04, 0.09), rng.uniform(0.30, 0.48)
        l -= a * np.exp(-((t - c) / w) ** 2)
    return t, np.clip(l, 0.02, 1.0)


def arrets(t, l, chaud):
    # arrêts tous les 4 % + extrêmes locaux (reflets nets)
    idx = set(range(0, 101, 4)) | {100}
    for i in range(1, 100):
        if (l[i] - l[i - 1]) * (l[i + 1] - l[i]) < 0:
            idx.add(i)
    return [[round(float(t[i]) * 100, 1), couleur(l[i], chaud)] for i in sorted(idx)]


# réglages par variante : (graine, décalage d'angle, chaleur, [base, clairs, sombres] par facette)
VARIANTES = {
    2: (11, 18, 0.6, [(0.50, 3, 2), (0.55, 2, 2), (0.40, 2, 3), (0.45, 3, 2)]),
    3: (27, -14, -0.4, [(0.55, 2, 3), (0.48, 3, 2), (0.42, 3, 2), (0.36, 2, 3)]),
    4: (53, 32, 0.2, [(0.45, 3, 2), (0.52, 3, 3), (0.38, 2, 2), (0.48, 3, 3)]),
}


def sans_joint(e, d=0.15):
    """Facettes très légèrement élargies (0,025 mm réels) : plus de filet clair aux arêtes ni au centre."""
    g = Polygon(e["p"]).buffer(d, join_style=2, mitre_limit=1.5)
    e["p"] = [[round(x, 3), round(y, 3)] for x, y in list(g.exterior.coords)[:-1]]
    e["b"] = [round(v, 3) for v in g.bounds]


def main():
    for v in (1, 2, 3, 4):
        F = copy.deepcopy(BASE)
        el = F["geo"]["calques"][0]["el"]
        if v > 1:
            graine, dang, chaud, reg = VARIANTES[v]
            rng = np.random.default_rng(graine)
            for e, (b, nc, ns) in zip(el, reg):
                t, l = profil(rng, b, nc, ns)
                e["s"] = arrets(t, l, chaud)
                e["a"] = round(e["a"] + dang + rng.uniform(-6, 6), 2)
        for e in el:
            sans_joint(e)
            e["n"] = e["n"].replace("Éclair 2", f"Éclair v{v}")
        F["titre_fichier"] = f"Éclair doré — variante {v}"
        F["libelles_calques"] = {"cadre": f"Éclair v{v}"}
        (D / f"eclair_variante_{v}.json").write_text(json.dumps(F, ensure_ascii=False, indent=1), encoding="utf-8")
        print("ok", v)


if __name__ == "__main__":
    main()
