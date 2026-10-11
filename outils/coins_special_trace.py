#!/usr/bin/env python3
"""Vectorise les coins droits (haut et bas) du cadre SPECIAL CARDDASS à partir des gros plans fournis.

  python3 outils/coins_special_trace.py haut_80.png haut_m80.png bas_80.png bas_m80.png sortie.json

Entrées : gros plans recalés sur la carte (80 px/mm, repère page finie 65 × 90, déjà recentré),
avec leur masque de validité. Classes de couleur : gris (fond), bleu, noir, image. Chaque pixel
douteux (anticrénelage, reflet) prend la classe connue la plus proche. Les zones sont prolongées
dans le fond perdu par réplication du bord. Sortie : anneaux (mm) des formes noires et bleues,
par zone, prêts à être réunis à la géométrie du cadre (outils/special_carddass.py).
"""
import json, sys
import cv2, numpy as np
from shapely.geometry import Polygon, box
from shapely.ops import unary_union

K = 80
BL = 3.0
ZONES = {  # zone de remplacement (mm, repère page) : (x0, y0, x1, y1)
    "haut": [(57.7, -BL, 65 + BL, 16.3)],
    "bas": [(55.6, 79.0, 65 + BL, 90 + BL), (49.5, 86.95, 55.6, 90 + BL)],
}


def classes(im):
    im = cv2.GaussianBlur(im, (5, 5), 0).astype(int)
    b, g, r = im[:, :, 0], im[:, :, 1], im[:, :, 2]
    mx, mn = im.max(2), im.min(2)
    c = np.zeros(b.shape, np.uint8)
    c[(mx - mn < 50) & (mx > 130)] = 1          # gris
    c[(b > 140) & (b - r > 60)] = 2             # bleu
    c[(mx < 100) & ~((b - r) > 60)] = 3         # noir
    c[(r > 140) & (r - b > 60)] = 2             # image → bleu (la fenêtre est posée par-dessus)
    return c


def remplir(c, valide):
    """Pixels inconnus ou hors gros plan : classe connue la plus proche."""
    from scipy import ndimage
    conn = (c > 0) & valide
    _, (iy, ix) = ndimage.distance_transform_edt(~conn, return_indices=True)
    return c[iy, ix]


def polys(mask, ox, oy, eps=0.012):
    mask = cv2.medianBlur(mask.astype(np.uint8) * 255, 7)
    cnt, hier = cv2.findContours(mask, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    if hier is None:
        return Polygon()
    out = []
    for i, c in enumerate(cnt):
        if hier[0][i][3] != -1 or cv2.contourArea(c) < (0.06 * K) ** 2:
            continue
        def mm(cc):
            a = cv2.approxPolyDP(cc, eps * K, True).reshape(-1, 2).astype(float)
            return [(ox + (x + 0.5) / K, oy + (y + 0.5) / K) for x, y in a]
        ext = mm(c)
        if len(ext) < 3:
            continue
        trous = []
        j = hier[0][i][2]
        while j != -1:
            if cv2.contourArea(cnt[j]) > (0.06 * K) ** 2:
                h = mm(cnt[j])
                if len(h) >= 3:
                    trous.append(h)
            j = hier[0][j][0]
        p = Polygon(ext, trous).buffer(0)
        if not p.is_empty:
            out.append(p)
    return unary_union(out)


def tracer(f_img, f_msk, zones):
    im = cv2.imread(f_img); msk = cv2.imread(f_msk, 0) > 127
    msk = cv2.erode(msk.astype(np.uint8), np.ones((9, 9), np.uint8)) > 0   # bord du gros plan : flou
    c = classes(im)
    # toile étendue au fond perdu
    P = int(BL * K)
    c = cv2.copyMakeBorder(c, P, P, P, P, cv2.BORDER_CONSTANT, value=0)
    v = cv2.copyMakeBorder(msk.astype(np.uint8), P, P, P, P, cv2.BORDER_CONSTANT, value=0) > 0
    res = {"noir": [], "bleu": []}
    for (x0, y0, x1, y1) in zones:
        X0, Y0 = max(0, int((x0 - 0.6 + BL) * K)), max(0, int((y0 - 0.6 + BL) * K))
        X1, Y1 = min(c.shape[1], int((x1 + 0.6 + BL) * K)), min(c.shape[0], int((y1 + 0.6 + BL) * K))
        sub = remplir(c[Y0:Y1, X0:X1], v[Y0:Y1, X0:X1])
        ox, oy = X0 / K - BL, Y0 / K - BL
        z = box(x0, y0, x1, y1)
        res["noir"].append(polys(sub == 3, ox, oy).intersection(z))
        res["bleu"].append(polys(sub == 2, ox, oy).intersection(z))
    return {k: unary_union(v) for k, v in res.items()}


def anneaux(g, nd=3):
    out = []
    for p in getattr(g, "geoms", [g]):
        if p.is_empty or p.geom_type != "Polygon":
            continue
        for ring in [p.exterior] + list(p.interiors):
            out.append([[round(x, nd), round(y, nd)] for x, y in list(ring.coords)[:-1]])
    return out


if __name__ == "__main__":
    hi, hm, bi, bm, sortie = sys.argv[1:6]
    H = tracer(hi, hm, ZONES["haut"]); B = tracer(bi, bm, ZONES["bas"])
    json.dump({"zones": ZONES, "haut": {k: anneaux(v) for k, v in H.items()},
               "bas": {k: anneaux(v) for k, v in B.items()}}, open(sortie, "w"))
    print({z: {k: len(anneaux(v)) for k, v in d.items()} for z, d in (("haut", H), ("bas", B))})
