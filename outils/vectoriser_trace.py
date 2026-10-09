#!/usr/bin/env python3
"""Vectorise un tracé à la main (PNG à fond transparent) en Bézier propres, pour Illustrator.

  python3 outils/vectoriser_trace.py trace.png dossier_sortie [--mm-par-px 0.25] [--nom frise]
          [--queue x0,y0,x1,y1]

- Les traits fins (la plus grande composante) deviennent une ou plusieurs courbes lisses d'épaisseur constante :
  squelette → branches (les petits ergots sont supprimés) → lissage → ajustement de Bézier (Schneider) ;
  aux carrefours, les deux branches les mieux alignées forment une seule courbe continue.
- Toutes les autres taches (fleurs, pétales) sont gardées telles quelles : contour suréchantillonné,
  pointes conservées, ajusté en Bézier avec une tolérance très fine.
- --queue : zone (px de l'image) où le trait s'élargit en feuille ; elle est traitée comme une forme pleine.
Sorties : <nom>.svg, <nom>_illustrator.jsx, <nom>_600dpi.png (noir, fond transparent).
"""
import argparse, json, math, pathlib, sys
import numpy as np
from PIL import Image, ImageFilter
from scipy.ndimage import label, find_objects, distance_transform_edt, gaussian_filter1d, gaussian_filter
from skimage.morphology import skeletonize
from skimage.measure import find_contours

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))


# ------------------------------------------------------------------ ajustement de Bézier (Schneider, Graphics Gems)
def _bez(c, t):
    m = 1 - t
    return (m ** 3)[:, None] * c[0] + (3 * m * m * t)[:, None] * c[1] + (3 * m * t * t)[:, None] * c[2] + (t ** 3)[:, None] * c[3]


def _bez1(c, t):
    m = 1 - t
    return (3 * m * m)[:, None] * (c[1] - c[0]) + (6 * m * t)[:, None] * (c[2] - c[1]) + (3 * t * t)[:, None] * (c[3] - c[2])


def _bez2(c, t):
    return (6 * (1 - t))[:, None] * (c[2] - 2 * c[1] + c[0]) + (6 * t)[:, None] * (c[3] - 2 * c[2] + c[1])


def _unit(v):
    n = np.linalg.norm(v)
    return v / n if n > 1e-12 else v


def _param_corde(p):
    d = np.r_[0, np.cumsum(np.linalg.norm(np.diff(p, axis=0), axis=1))]
    return d / d[-1] if d[-1] > 0 else d


def _generer(p, u, t1, t2):
    A1 = t1[None, :] * (3 * u * (1 - u) ** 2)[:, None]
    A2 = t2[None, :] * (3 * u * u * (1 - u))[:, None]
    C = np.array([[np.sum(A1 * A1), np.sum(A1 * A2)], [np.sum(A1 * A2), np.sum(A2 * A2)]])
    base = _bez(np.array([p[0], p[0], p[-1], p[-1]]), u)
    X = np.array([np.sum(A1 * (p - base)), np.sum(A2 * (p - base))])
    det = C[0, 0] * C[1, 1] - C[0, 1] * C[1, 0]
    seg = np.linalg.norm(p[-1] - p[0])
    if abs(det) > 1e-12:
        a1 = (X[0] * C[1, 1] - X[1] * C[0, 1]) / det
        a2 = (C[0, 0] * X[1] - C[1, 0] * X[0]) / det
    else:
        a1 = a2 = seg / 3
    eps = 1e-6 * seg
    if a1 < eps or a2 < eps:
        a1 = a2 = seg / 3
    return np.array([p[0], p[0] + t1 * a1, p[-1] + t2 * a2, p[-1]])


def _reparam(c, p, u):
    d = _bez(c, u) - p
    d1, d2 = _bez1(c, u), _bez2(c, u)
    num = np.sum(d * d1, axis=1)
    den = np.sum(d1 * d1 + d * d2, axis=1)
    nu = u - np.where(np.abs(den) > 1e-12, num / den, 0)
    return np.clip(nu, 0, 1)


def _erreur(c, p, u):
    d = np.sum((_bez(c, u) - p) ** 2, axis=1)
    i = int(np.argmax(d))
    return d[i], i


def ajuster(p, t1, t2, tol):
    """Liste de cubiques (4×2) approchant les points p (ordonnés), tangentes d'extrémité t1 (sortante) et t2 (entrante, vers l'intérieur)."""
    if len(p) == 2:
        d = np.linalg.norm(p[1] - p[0]) / 3
        return [np.array([p[0], p[0] + t1 * d, p[1] + t2 * d, p[1]])]
    u = _param_corde(p)
    c = _generer(p, u, t1, t2)
    err, i = _erreur(c, p, u)
    if err < tol * tol:
        return [c]
    if err < 4 * tol * tol:
        for _ in range(20):
            u = _reparam(c, p, u)
            c = _generer(p, u, t1, t2)
            err, i = _erreur(c, p, u)
            if err < tol * tol:
                return [c]
    i = min(max(i, 1), len(p) - 2)
    tc = _unit(p[i - 1] - p[i + 1])
    return ajuster(p[:i + 1], t1, tc, tol) + ajuster(p[i:], -tc, t2, tol)


def ajuster_ouvert(p, tol):
    t1 = _unit(p[min(2, len(p) - 1)] - p[0]); t2 = _unit(p[max(-3, -len(p))] - p[-1])
    return ajuster(p, t1, t2, tol)


def ajuster_ferme(p, tol, angle_coin=55):
    """Contour fermé : découpé aux coins (pointes de pétales) puis ajusté morceau par morceau."""
    n = len(p)
    k = max(2, n // 60)
    ang = np.zeros(n)
    for i in range(n):
        a = _unit(p[i] - p[(i - k) % n]); b = _unit(p[(i + k) % n] - p[i])
        ang[i] = math.degrees(math.acos(max(-1, min(1, float(a @ b)))))
    coins = [i for i in range(n) if ang[i] > angle_coin and ang[i] == ang[max(0, i - k):i + k + 1].max()]
    # pas deux coins trop proches
    filtres = []
    for i in coins:
        if not filtres or i - filtres[-1] > 2 * k:
            filtres.append(i)
    if len(filtres) >= 2 and (filtres[0] + n - filtres[-1]) <= 2 * k:
        filtres.pop()
    if not filtres:  # contour lisse : on coupe en deux et on impose des tangentes continues
        i0, i1 = 0, n // 2
        q1 = p[i0:i1 + 1]; q2 = np.r_[p[i1:], p[:1]]
        ta = _unit(p[1] - p[-1]); tb = _unit(p[i1 + 1] - p[i1 - 1])
        return ajuster(q1, ta, -tb, tol) + ajuster(q2, tb, -ta, tol)
    segs = []
    for a, b in zip(filtres, filtres[1:] + [filtres[0] + n]):
        q = np.array([p[j % n] for j in range(a, b + 1)])
        segs += ajuster_ouvert(q, tol)
    return segs


# ------------------------------------------------------------------ trait : squelette → branches
VOIS = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]


def branches(sk):
    ys, xs = np.nonzero(sk)
    pts = set(zip(ys.tolist(), xs.tolist()))
    def voisins(q):
        return [(q[0] + dy, q[1] + dx) for dy, dx in VOIS if (q[0] + dy, q[1] + dx) in pts]
    deg = {q: len(voisins(q)) for q in pts}
    noeuds = {q for q in pts if deg[q] != 2}
    vus = set(); out = []
    for n0 in noeuds:
        for v in voisins(n0):
            if (n0, v) in vus:
                continue
            chemin = [n0, v]; prec = n0; cur = v
            while cur not in noeuds:
                nx = [w for w in voisins(cur) if w != prec and w not in chemin[-3:]]
                if not nx:
                    break
                prec, cur = cur, nx[0]; chemin.append(cur)
            vus.add((n0, v)); vus.add((cur, prec))
            out.append(chemin)
    # dédoublonnage (chaque branche trouvée depuis ses deux bouts)
    uniq = {}
    for c in out:
        cle = tuple(sorted([c[0], c[-1]])) + (len(c),)
        uniq.setdefault(cle, c)
    return list(uniq.values()), noeuds, deg


def fusionner_noeuds(br, deg, rayon=6):
    """Regroupe les nœuds proches (carrefours de quelques pixels) ; renvoie les branches avec un id de nœud par bout."""
    bouts = [c[0] for c in br] + [c[-1] for c in br]
    ids = {}; centres = []
    for b in bouts:
        for i, cc in enumerate(centres):
            if abs(cc[0] - b[0]) <= rayon and abs(cc[1] - b[1]) <= rayon:
                ids[b] = i; break
        else:
            ids[b] = len(centres); centres.append(b)
    res = [(ids[c[0]], ids[c[-1]], c) for c in br]
    # brindilles internes d'un carrefour (deux bouts dans le même nœud, quelques pixels) : supprimées
    res = [r for r in res if not (r[0] == r[1] and len(r[2]) <= 2 * rayon)]
    return res, centres


def chaines(br_ids, ergot_max):
    """Supprime les ergots (branches courtes à bout libre), puis enchaîne les branches à travers les carrefours
    en appariant les plus alignées. Renvoie des listes de points (y, x)."""
    from collections import Counter
    br = list(br_ids)
    while True:
        cpt = Counter([a for a, b, c in br] + [b for a, b, c in br])
        ergots = [i for i, (a, b, c) in enumerate(br) if len(c) < ergot_max and (cpt[a] == 1 or cpt[b] == 1) and cpt[a] + cpt[b] > 2]
        if not ergots:
            break
        br = [x for i, x in enumerate(br) if i not in ergots]
    cpt = Counter([a for a, b, c in br] + [b for a, b, c in br])
    def dir_depuis(c, n):  # direction de départ de la branche c depuis son bout n
        pts = c if n == 0 else c[::-1]
        # direction prise loin du carrefour (les pixels du nœud sont déformés par le squelette)
        i0 = min(6, len(pts) - 1); i1 = min(22, len(pts) - 1)
        a = np.array(pts[i0], float); b = np.array(pts[i1], float)
        if i1 == i0:
            a = np.array(pts[0], float)
        return _unit(b - a)
    restants = [[a, b, [tuple(q) for q in c]] for a, b, c in br]
    # appariements aux carrefours
    paires = {}
    for n, k in cpt.items():
        if k < 2:
            continue
        inc = [(i, 0 if r[0] == n else 1) for i, r in enumerate(restants) if r[0] == n or r[1] == n]
        libres = list(inc)
        while len(libres) >= 2:
            best = None
            for x in range(len(libres)):
                for y in range(x + 1, len(libres)):
                    i, ei = libres[x]; j, ej = libres[y]
                    if i == j:
                        continue
                    da = dir_depuis(restants[i][2], ei); db = dir_depuis(restants[j][2], ej)
                    s = float(da @ db)  # -1 = parfaitement aligné
                    if best is None or s < best[0]:
                        best = (s, x, y)
            if best is None or best[0] > -0.3:
                break
            _, x, y = best
            paires[libres[x]] = libres[y]; paires[libres[y]] = libres[x]
            libres = [l for k_, l in enumerate(libres) if k_ not in (x, y)]
    def parcours(k, depuis):  # points de la branche k parcourue depuis son bout « depuis »
        pts = restants[k][2]
        return pts if depuis == 0 else pts[::-1]
    vus = set(); res = []
    for i in range(len(restants)):
        if i in vus:
            continue
        # remonter jusqu'au début de la chaîne
        b, e = i, 0
        dejà = {i}
        while (b, e) in paires:
            j, ej = paires[(b, e)]
            if j in dejà:
                break
            dejà.add(j); b, e = j, 1 - ej
        # parcourir : branche b depuis son bout e, puis enchaîner
        chaine = []
        while b is not None and b not in vus:
            vus.add(b)
            pts = parcours(b, e)
            chaine += pts if not chaine else pts[1:]
            fin = (b, 1 - e)
            if fin in paires and paires[fin][0] not in vus:
                b, e = paires[fin]
            else:
                b = None
        res.append(chaine)
    return res


def lisser(pts, sigma):
    p = np.array(pts, float)
    if len(p) < 5:
        return p
    q = np.c_[gaussian_filter1d(p[:, 0], sigma, mode="nearest"), gaussian_filter1d(p[:, 1], sigma, mode="nearest")]
    q[0], q[-1] = p[0], p[-1]
    return q


# ------------------------------------------------------------------ export
def svg_d(segs, ferme):
    d = f"M {segs[0][0][0]:.3f},{segs[0][0][1]:.3f} "
    for s in segs:
        d += f"C {s[1][0]:.3f},{s[1][1]:.3f} {s[2][0]:.3f},{s[2][1]:.3f} {s[3][0]:.3f},{s[3][1]:.3f} "
    return d + ("Z" if ferme else "")


def main():
    a = argparse.ArgumentParser()
    a.add_argument("image"); a.add_argument("sortie"); a.add_argument("--mm-par-px", type=float, default=0.25)
    a.add_argument("--nom", default="frise"); a.add_argument("--queue", default="")
    a.add_argument("--sur", type=int, default=8, help="suréchantillonnage des contours")
    o = a.parse_args()
    out = pathlib.Path(o.sortie); out.mkdir(parents=True, exist_ok=True)
    im = Image.open(o.image)
    alpha = np.asarray(im.getchannel("A") if "A" in im.getbands() else im.convert("L").point(lambda v: 255 - v)).astype(float)
    m = alpha > 100
    lab, n = label(m, structure=np.ones((3, 3)))
    tailles = np.bincount(lab.ravel())[1:]
    i_trait = int(np.argmax(tailles)) + 1
    trait = lab == i_trait
    queue = np.zeros_like(trait)
    if o.queue:
        x0, y0, x1, y1 = [int(v) for v in o.queue.split(",")]
        queue[y0:y1, x0:x1] = trait[y0:y1, x0:x1]
    # épaisseur du trait : mesurée sur le squelette, hors queue
    dt = distance_transform_edt(trait)
    # le trait se prolonge dans la queue (recouvert par la forme pleine) : raccord invisible
    from scipy.ndimage import binary_dilation as _dil
    sk = skeletonize(trait)
    ep = float(np.median(2 * dt[sk & ~_dil(queue, iterations=4)] - 1)) if sk.any() else 2.0   # 2·distance − 1 px (centre du pixel)
    br, noeuds, deg = branches(sk)
    br_ids, centres = fusionner_noeuds(br, deg)
    ch = chaines(br_ids, ergot_max=max(6, int(4 * ep)))
    lisses = []
    for c in ch:
        if len(c) < 4:
            continue
        lisses.append(lisser([(x + .5, y + .5) for y, x in c], sigma=max(1.5, ep * 0.9)))
    # bouts libres arrivant sur un autre trait (embranchement) : raccordés exactement sur la courbe voisine
    for i, p in enumerate(lisses):
        autres = [q for j, q in enumerate(lisses) if j != i]
        if not autres:
            break
        tous = np.concatenate(autres)
        for bout, sens in ((0, 1), (-1, -1)):
            d = np.linalg.norm(tous - p[bout], axis=1)
            k_ = int(np.argmin(d))
            if d[k_] < 2.5 * ep:
                rog = min(len(p) // 4, int(2.5 * ep))
                p = p[rog:] if sens == 1 else p[:len(p) - rog]
                lisses[i] = p
                # prolonger le bout dans sa propre direction jusqu'à la courbe voisine (raccord tangent, sans coude)
                q = p if sens == 1 else p[::-1]
                o_ = q[0]; dvec = _unit(q[0] - q[min(len(q) - 1, int(2 * ep) + 2)])
                rel = tous - o_
                avant = rel @ dvec; perp = np.abs(rel[:, 0] * dvec[1] - rel[:, 1] * dvec[0])
                ok_ = (avant > 0) & (avant < 6 * ep)
                if ok_.any():
                    k2 = int(np.argmin(np.where(ok_, perp + 0.05 * avant, 1e9)))
                    fin_ = o_ + dvec * avant[k2]
                    m_ = max(2, int(avant[k2] / 0.5))
                    ext = np.array([o_ + (fin_ - o_) * (t_ / m_) for t_ in range(m_, 0, -1)])
                    q = np.concatenate([ext, q])
                    lisses[i] = q if sens == 1 else q[::-1]
                    p = lisses[i]

    traits = [[s.tolist() for s in ajuster_ouvert(p, tol=0.35)] for p in lisses]
    # queue : forme pleine construite le long de la même ligne médiane, largeur mesurée puis lissée
    # (elle part de l'épaisseur du trait : raccord sans marche)
    queues = []
    if queue.any():
        from scipy.ndimage import map_coordinates, binary_dilation as _d2
        zone_q = _d2(queue, iterations=2)
        for p in lisses:
            dedans = zone_q[np.clip(p[:, 1].astype(int), 0, zone_q.shape[0] - 1), np.clip(p[:, 0].astype(int), 0, zone_q.shape[1] - 1)]
            if dedans.sum() < 4:
                continue
            idx = np.nonzero(dedans)[0]
            sens_q = 1 if idx.mean() > len(p) / 2 else -1   # la queue est-elle en fin ou en début de trait ?
            q = p if sens_q == 1 else p[::-1]
            i0 = max(0, (np.nonzero(dedans if sens_q == 1 else dedans[::-1])[0].min()) - int(3 * ep))
            q = q[i0:]
            w = 2 * map_coordinates(dt, [q[:, 1] - .5, q[:, 0] - .5], order=1) - 1
            w = np.maximum(gaussian_filter1d(w, 2.5, mode="nearest"), ep)
            w[: int(2 * ep)] = ep
            w = gaussian_filter1d(w, 1.5, mode="nearest")
            t_ = np.gradient(q, axis=0); t_ = t_ / np.maximum(np.linalg.norm(t_, axis=1)[:, None], 1e-9)
            nrm = np.c_[-t_[:, 1], t_[:, 0]]
            gauche = q + nrm * (w[:, None] / 2); droite = q - nrm * (w[:, None] / 2)
            # bout de la queue : demi-cercle
            ang = math.atan2(t_[-1, 1], t_[-1, 0]); r = w[-1] / 2
            cap = [q[-1] + r * np.array([math.cos(ang + math.pi / 2 - math.pi * k / 12), math.sin(ang + math.pi / 2 - math.pi * k / 12)]) for k in range(13)]
            cap0 = [q[0] + (w[0] / 2) * np.array([math.cos(ang0 - math.pi / 2 - math.pi * k / 12), math.sin(ang0 - math.pi / 2 - math.pi * k / 12)])
                    for ang0 in [math.atan2(t_[0, 1], t_[0, 0])] for k in range(13)]
            contour = np.concatenate([gauche, cap[1:-1], droite[::-1], cap0[1:-1]])
            queues.append([s_.tolist() for s_ in ajuster_ferme(contour, tol=0.12)])

    # formes pleines : toutes les autres composantes + la queue
    formes = []
    S = o.sur
    big = np.asarray(Image.fromarray(alpha.astype(np.uint8)).resize((alpha.shape[1] * S, alpha.shape[0] * S), Image.BICUBIC)).astype(float)
    big = gaussian_filter(big, S * 0.35)
    masques = [lab == k for k in range(1, n + 1) if k != i_trait and tailles[k - 1] >= 3]

    for mk in masques:
        ys, xs = np.nonzero(mk)
        y0, y1, x0, x1 = max(0, ys.min() - 2), ys.max() + 3, max(0, xs.min() - 2), xs.max() + 3
        zone = big[y0 * S:y1 * S, x0 * S:x1 * S].copy()
        mz = np.asarray(Image.fromarray((mk[y0:y1, x0:x1] * 255).astype(np.uint8)).resize(((x1 - x0) * S, (y1 - y0) * S), Image.NEAREST)) > 0
        from scipy.ndimage import binary_dilation
        zone[~binary_dilation(mz, iterations=S)] = 0       # isoler cette tache de ses voisines
        zone = np.pad(zone, 1)
        for cont in find_contours(zone, 128):
            if len(cont) < 8:
                continue
            p = np.c_[(cont[:, 1] - 1) / S + x0, (cont[:, 0] - 1) / S + y0]
            if np.linalg.norm(p[0] - p[-1]) < 1e-6:
                p = p[:-1]
            # sous-échantillonnage régulier (≈ 0,25 px)
            d = np.r_[0, np.cumsum(np.linalg.norm(np.diff(np.r_[p, p[:1]], axis=0), axis=1))]
            L = d[-1]
            if L < 2:
                continue
            k = max(12, int(L / 0.25))
            ts = np.linspace(0, L, k, endpoint=False)
            pr = np.c_[np.interp(ts, d, np.r_[p[:, 0], p[0, 0]]), np.interp(ts, d, np.r_[p[:, 1], p[0, 1]])]
            formes.append([s.tolist() for s in ajuster_ferme(pr, tol=0.12)])

    H, W = alpha.shape
    k = o.mm_par_px
    def mm(segs):
        return [[[round(q[0] * k, 4), round(q[1] * k, 4)] for q in s] for s in segs]
    T = [mm(t) for t in traits]; F = [mm(f) for f in formes + queues]
    largeur, hauteur = W * k, H * k
    epaisseur = ep * k
    corps = [f'<path d="{svg_d(t, False)}" fill="none" stroke="#000" stroke-width="{epaisseur:.4f}" stroke-linecap="round" stroke-linejoin="round"/>' for t in T]
    corps += [f'<path d="{svg_d(f, True)}" fill="#000"/>' for f in F]
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{largeur:.3f}mm" height="{hauteur:.3f}mm" viewBox="0 0 {largeur:.4f} {hauteur:.4f}">\n'
           + "\n".join(corps) + "\n</svg>\n")
    (out / f"{o.nom}.svg").write_text(svg, encoding="utf-8")
    import frise
    D = {"largeur": round(largeur, 3), "hauteur": round(hauteur, 3), "trait": round(epaisseur, 4),
         "groupes": [{"nom": o.nom.replace("_", " ").capitalize(), "traits": T, "formes": F}]}
    s = frise.JSX.replace("/*__DONNEES__*/null", json.dumps(D))
    s = "".join(c if ord(c) < 128 else f"\\u{ord(c):04x}" for c in s).replace("\n", "\r\n")
    (out / f"{o.nom}_illustrator.jsx").write_bytes(s.encode("ascii"))
    print(f"OK : {len(T)} trait(s) (épaisseur {epaisseur:.3f} mm), {len(F)} forme(s), {largeur:.1f} × {hauteur:.1f} mm, "
          f"{sum(len(t) for t in T)} + {sum(len(f) for f in F)} segments de Bézier")


if __name__ == "__main__":
    main()
