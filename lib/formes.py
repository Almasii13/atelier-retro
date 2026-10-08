"""Atelier Retro — générateurs de formes SVG (coordonnées en mm, sans déformation).

Chaque fonction renvoie une chaîne SVG complète à poser dans un <div class="forme">.
Le texte ne se met PAS dans le SVG : il va dans le <div class="contenu"> voisin,
dont la zone est donnée par zone_texte_*() pour garantir un centrage exact.
"""
import math, random


def _svg(w, h, corps):
    return (f'<svg viewBox="0 0 {w:.3f} {h:.3f}" xmlns="http://www.w3.org/2000/svg">{corps}</svg>')


def etoile(w, h, pointes=20, creux=0.72, irregulier=0.0, couleur="#111", contour=None, ep=0.0, graine=1):
    """Explosion / étoile inscrite dans w×h mm. creux = rayon intérieur / rayon extérieur."""
    rnd = random.Random(graine)
    cx, cy = w / 2, h / 2
    rx, ry = w / 2 - ep, h / 2 - ep
    pts = []
    for i in range(pointes * 2):
        a = math.pi * i / pointes - math.pi / 2
        k = 1.0 if i % 2 == 0 else creux
        if i % 2 == 0:
            k *= 1 - rnd.uniform(0, irregulier)
        pts.append(f"{cx + math.cos(a) * rx * k:.3f},{cy + math.sin(a) * ry * k:.3f}")
    stroke = f' stroke="{contour}" stroke-width="{ep}" stroke-linejoin="miter"' if contour else ""
    return _svg(w, h, f'<polygon points="{" ".join(pts)}" fill="{couleur}"{stroke}/>')


def zone_texte_etoile(w, h, creux=0.72, marge=0.9):
    """Rectangle (left, top, width, height en mm) inscrit dans le creux de l'étoile."""
    rx, ry = w / 2 * creux * marge, h / 2 * creux * marge
    # plus grand rectangle inscrit dans une ellipse : côtés = r·√2
    zw, zh = rx * math.sqrt(2), ry * math.sqrt(2)
    return (w - zw) / 2, (h - zh) / 2, zw, zh


def zone_texte_cercle(d, marge=0.92):
    c = d / 2 * marge * math.sqrt(2)
    return (d - c) / 2, (d - c) / 2, c, c


def polygone(w, h, points_pct, couleur="#111"):
    """Polygone libre : points en % de w/h, ex. [(0,8),(100,0),(96,100),(2,100)]."""
    pts = " ".join(f"{x / 100 * w:.3f},{y / 100 * h:.3f}" for x, y in points_pct)
    return _svg(w, h, f'<polygon points="{pts}" fill="{couleur}"/>')


def clip_polygone(points_pct):
    """clip-path CSS pour découper une image (ou un bloc) en forme libre."""
    return "polygon(" + ", ".join(f"{x}% {y}%" for x, y in points_pct) + ")"


def texte_arc(d, texte, couleur="#e4007f", taille=2.6, depart=-150, fin=-30, famille="var(--f-gothic)", graisse=900, dx=0.0):
    """Texte courbé au-dessus d'un cercle de diamètre d (mm). Angles en degrés (0 = droite, -90 = haut)."""
    r = d / 2
    a0, a1 = math.radians(depart), math.radians(fin)
    x0, y0 = r + r * math.cos(a0), r + r * math.sin(a0)
    x1, y1 = r + r * math.cos(a1), r + r * math.sin(a1)
    gid = f"arc{abs(hash((d, texte, depart))) % 10**6}"
    corps = (f'<defs><path id="{gid}" d="M {x0:.3f} {y0:.3f} A {r:.3f} {r:.3f} 0 0 1 {x1:.3f} {y1:.3f}"/></defs>'
             f'<text fill="{couleur}" style="font: {graisse} {taille}px {famille}; font-feature-settings: \'palt\' 1" '
             f'text-anchor="middle"><textPath href="#{gid}" startOffset="50%" dx="{dx}">{texte}</textPath></text>')
    return _svg(d, d, corps)


# ---------------------------------------------------------------------------
# Motif « prisme pyramide » (cartes holographiques des années 90)
# ---------------------------------------------------------------------------
def _decoupe(poly, region):
    """Sutherland–Hodgman : découpe un polygone par une région convexe (sens quelconque)."""
    def aire(p):
        return sum(p[i][0] * p[(i + 1) % len(p)][1] - p[(i + 1) % len(p)][0] * p[i][1] for i in range(len(p))) / 2
    sens = 1 if aire(region) > 0 else -1
    sortie = poly
    for i in range(len(region)):
        a, b = region[i], region[(i + 1) % len(region)]
        dedans = lambda p: sens * ((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])) >= 0
        def inter(p, q):
            x1, y1, x2, y2 = p[0], p[1], q[0], q[1]
            x3, y3, x4, y4 = a[0], a[1], b[0], b[1]
            den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
            t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den
            return (x1 + t * (x2 - x1), y1 + t * (y2 - y1))
        entree, sortie = sortie, []
        if not entree:
            break
        for j in range(len(entree)):
            p, q = entree[j], entree[(j + 1) % len(entree)]
            if dedans(q):
                if not dedans(p):
                    sortie.append(inter(p, q))
                sortie.append(q)
            elif dedans(p):
                sortie.append(inter(p, q))
    return sortie


def prisme(region, periode, phase=(0, 0), couleurs=None, filet=0.0):
    """Losanges en damier (deux familles A et B), chacun coupé en 4 facettes N/E/S/O.
    Renvoie {cle_couleur: [polygones]} découpés dans la région convexe (mm)."""
    px, py = (periode, periode) if isinstance(periode, (int, float)) else periode
    p = max(px, py)
    hx, hy = px / 2, py / 2
    xs = [q[0] for q in region]; ys = [q[1] for q in region]
    x0, x1, y0, y1 = min(xs) - p, max(xs) + p, min(ys) - p, max(ys) + p
    out = {}
    def ajoute(cle, poly):
        c = _decoupe(poly, region)
        if len(c) >= 3:
            out.setdefault(cle, []).append([(round(x, 3), round(y, 3)) for x, y in c])
    i0 = math.floor((x0 - phase[0]) / px) - 1
    j0 = math.floor((y0 - phase[1]) / py) - 1
    for i in range(i0, i0 + int((x1 - x0) / px) + 3):
        for j in range(j0, j0 + int((y1 - y0) / py) + 3):
            for fam, (dx, dy) in (("A", (0, 0)), ("B", (hx, hy))):
                cx, cy = phase[0] + i * px + dx, phase[1] + j * py + dy
                if not (x0 <= cx <= x1 and y0 <= cy <= y1):
                    continue
                N, E, S, O, C = (cx, cy - hy), (cx + hx, cy), (cx, cy + hy), (cx - hx, cy), (cx, cy)
                ajoute(fam + "N", [O, N, C]); ajoute(fam + "E", [N, E, C])
                ajoute(fam + "S", [E, S, C]); ajoute(fam + "O", [S, O, C])
                if filet and fam == "B":
                    ajoute("filet", [(cx - filet / 2, cy - hy * .45), (cx + filet / 2, cy - hy * .45), (cx + filet / 2, cy + hy * .45), (cx - filet / 2, cy + hy * .45)])
    return out


def chemin_svg(polys):
    return " ".join("M " + " L ".join(f"{x},{y}" for x, y in p) + " Z" for p in polys)


def ean13(code):
    """Code EAN-13 → (13 chiffres avec clé, chaîne de 95 modules '1' barre / '0' espace)."""
    L = {'0': '0001101', '1': '0011001', '2': '0010011', '3': '0111101', '4': '0100011', '5': '0110001', '6': '0101111', '7': '0111011', '8': '0110111', '9': '0001011'}
    G = {'0': '0100111', '1': '0110011', '2': '0011011', '3': '0100001', '4': '0011101', '5': '0111001', '6': '0000101', '7': '0010001', '8': '0001001', '9': '0010111'}
    R = {k: ''.join('1' if c == '0' else '0' for c in v) for k, v in L.items()}
    PAR = {'0': 'LLLLLL', '1': 'LLGLGG', '2': 'LLGGLG', '3': 'LLGGGL', '4': 'LGLLGG', '5': 'LGGLLG', '6': 'LGGGLL', '7': 'LGLGLG', '8': 'LGLGGL', '9': 'LGGLGL'}
    d = code[:12]
    s = sum(int(c) * (3 if i % 2 else 1) for i, c in enumerate(d))
    full = d + str((10 - s % 10) % 10)
    bits = '101' + ''.join((L if p == 'L' else G)[c] for p, c in zip(PAR[full[0]], full[1:7])) + '01010' + ''.join(R[c] for c in full[7:]) + '101'
    return full, bits


def barres(bits):
    """Groupes de modules noirs consécutifs → [(début, largeur)] en modules."""
    out, i = [], 0
    while i < len(bits):
        if bits[i] == '1':
            j = i
            while j < len(bits) and bits[j] == '1':
                j += 1
            out.append((i, j - i)); i = j
        else:
            i += 1
    return out


def eclaboussures(zone, densite=1.0, graine=7, taille=1.0):
    """Taches de peinture (grosses taches irrégulières, gouttes satellites, petits points, traînées)
    réparties dans le rectangle zone = (x0, y0, x1, y1) en mm. Renvoie une liste de polygones découpés à la zone."""
    rnd = random.Random(graine)
    x0, y0, x1, y1 = zone
    aire = (x1 - x0) * (y1 - y0)
    polys = []

    def tache(cx, cy, r, n=30, rugosite=0.32, pointes=0):
        harm = [(rnd.uniform(0, 2 * math.pi), rnd.uniform(0.3, 1) / k) for k in range(2, 7)]
        pics = [rnd.uniform(0, 2 * math.pi) for _ in range(pointes)]
        pts = []
        for i in range(n):
            a = 2 * math.pi * i / n
            f = 1 + rugosite * sum(amp * math.sin(k * a + ph) for k, (ph, amp) in enumerate(harm, start=2))
            for p in pics:
                d = math.atan2(math.sin(a - p), math.cos(a - p))
                f += 0.5 * math.exp(-(d / 0.2) ** 2)
            pts.append((cx + math.cos(a) * r * f, cy + math.sin(a) * r * f * rnd.uniform(.92, 1.08)))
        return pts

    def ajoute(pts):
        c = _decoupe(pts, [(x0, y0), (x1, y0), (x1, y1), (x0, y1)])
        if len(c) >= 3:
            polys.append([[round(x, 2), round(y, 2)] for x, y in c])

    n_grosses = max(1, int(aire / 140 * densite))
    for _ in range(n_grosses):
        cx, cy = rnd.uniform(x0 - 2, x1 + 2), rnd.uniform(y0 - 2, y1 + 2)
        r = rnd.uniform(1.6, 4.2) * taille
        ajoute(tache(cx, cy, r, n=40, rugosite=.38, pointes=rnd.randint(0, 3)))
        # gouttes satellites et traînée
        ang = rnd.uniform(0, 2 * math.pi)
        for k in range(rnd.randint(3, 9)):
            a = ang + rnd.gauss(0, .7)
            d = r * rnd.uniform(1.2, 2.8)
            ajoute(tache(cx + math.cos(a) * d, cy + math.sin(a) * d, rnd.uniform(.18, .65) * taille, n=16, rugosite=.2))
    for _ in range(int(aire / 22 * densite)):  # petits points isolés
        ajoute(tache(rnd.uniform(x0, x1), rnd.uniform(y0, y1), rnd.uniform(.12, .45) * taille, n=12, rugosite=.15))
    for _ in range(int(aire / 260 * densite)):  # traînées allongées
        cx, cy = rnd.uniform(x0, x1), rnd.uniform(y0, y1)
        a = rnd.uniform(0, math.pi); L = rnd.uniform(2, 6) * taille; e = rnd.uniform(.25, .6) * taille
        pts = []
        for i in range(24):
            t = 2 * math.pi * i / 24
            u, v = math.cos(t) * L / 2, math.sin(t) * e / 2 * (1 + .5 * math.cos(t))
            pts.append((cx + u * math.cos(a) - v * math.sin(a), cy + u * math.sin(a) + v * math.cos(a)))
        ajoute(pts)
    return polys


def prisme_carre(region, periode, phase=(0, 0)):
    """Damier de carrés alignés (prisme « carré » des cartes 90s) : chaque carré est coupé en 4 facettes
    triangulaires N/E/S/O par ses diagonales ; familles A (i+j pair) et B (impair).
    Renvoie {cle: [polygones]} découpés dans la région convexe (mm)."""
    px, py = (periode, periode) if isinstance(periode, (int, float)) else periode
    xs = [q[0] for q in region]; ys = [q[1] for q in region]
    out = {}
    i0 = math.floor((min(xs) - phase[0]) / px) - 1
    j0 = math.floor((min(ys) - phase[1]) / py) - 1
    for i in range(i0, i0 + int((max(xs) - min(xs)) / px) + 3):
        for j in range(j0, j0 + int((max(ys) - min(ys)) / py) + 3):
            x0, y0 = phase[0] + i * px, phase[1] + j * py
            x1, y1, cx, cy = x0 + px, y0 + py, x0 + px / 2, y0 + py / 2
            fam = "A" if (i + j) % 2 == 0 else "B"
            for cle, tri in (("N", [(x0, y0), (x1, y0), (cx, cy)]), ("E", [(x1, y0), (x1, y1), (cx, cy)]),
                             ("S", [(x1, y1), (x0, y1), (cx, cy)]), ("O", [(x0, y1), (x0, y0), (cx, cy)])):
                c = _decoupe(tri, region)
                if len(c) >= 3:
                    out.setdefault(fam + cle, []).append([(round(x, 3), round(y, 3)) for x, y in c])
    return out


def prisme_carre_multi(regions, periode, phase=(0, 0)):
    """prisme_carre sur plusieurs régions convexes (fenêtre non convexe découpée en morceaux convexes)."""
    out = {}
    for r in regions:
        for k, v in prisme_carre(r, periode, phase).items():
            out.setdefault(k, []).extend(v)
    return out


def arrondi(pts, rayons, n=10):
    """Polygone à coins arrondis (congés circulaires), échantillonné : [(x, y), ...] en mm.
    rayons : un nombre ou une liste (un rayon par sommet, 0 = angle vif)."""
    k = len(pts)
    rs = rayons if isinstance(rayons, (list, tuple)) else [rayons] * k
    out = []
    for i in range(k):
        p0, p1, p2 = pts[i - 1], pts[i], pts[(i + 1) % k]
        r = rs[i]
        if not r:
            out.append((round(p1[0], 3), round(p1[1], 3))); continue
        u = (p0[0] - p1[0], p0[1] - p1[1]); v = (p2[0] - p1[0], p2[1] - p1[1])
        lu, lv = math.hypot(*u), math.hypot(*v)
        u = (u[0] / lu, u[1] / lu); v = (v[0] / lv, v[1] / lv)
        theta = math.acos(max(-1, min(1, u[0] * v[0] + u[1] * v[1])))  # angle intérieur
        t = r / math.tan(theta / 2)  # recul du point de tangence
        a = (p1[0] + u[0] * t, p1[1] + u[1] * t); b = (p1[0] + v[0] * t, p1[1] + v[1] * t)
        bis = (u[0] + v[0], u[1] + v[1]); lb = math.hypot(*bis); bis = (bis[0] / lb, bis[1] / lb)
        dc = r / math.sin(theta / 2)
        c = (p1[0] + bis[0] * dc, p1[1] + bis[1] * dc)
        a0 = math.atan2(a[1] - c[1], a[0] - c[0]); a1 = math.atan2(b[1] - c[1], b[0] - c[0])
        da = (a1 - a0 + math.pi) % (2 * math.pi) - math.pi
        for j in range(n + 1):
            an = a0 + da * j / n
            out.append((round(c[0] + r * math.cos(an), 3), round(c[1] + r * math.sin(an), 3)))
    return out
