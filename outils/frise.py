#!/usr/bin/env python3
"""Frise « vague + palmettes » (bordure de carte Carddass Dragon Ball), redessinée en courbes de Bézier.

  python3 outils/frise.py dossier_sortie [--bande 5] [--periodes 6]

Géométrie normalisée sur la hauteur de bande H = 1 (repère écran, y vers le bas) :
  - vague : demi-ondes cubiques creux (y = 0,88) ↔ crête (y = 0,12), tangentes horizontales aux sommets
    (courbure continue d'une demi-onde à l'autre), demi-période 0,82 ;
  - palmette à 5 pétales enracinée dans chaque creux (ouverte vers le haut) ; la même, retournée à 180°,
    sous chaque crête — la frise est symétrique par demi-tour comme l'original ;
  - angle : la vague verticale et la vague horizontale se rejoignent en J (crête commune, coin intérieur),
    d'où part une volute qui s'enroule vers le coin extérieur, garnie d'une palmette.
Sorties : SVG (Bézier exactes), script Illustrator (.jsx) qui trace les mêmes Bézier, aperçus PNG.
"""
import argparse, json, math, pathlib

# ---------------------------------------------------------------- paramètres (H = 1)
Y_CRETE, Y_CREUX = 0.12, 0.88
DEMI = 0.82              # demi-période
K = 0.24                 # longueur des poignées aux sommets (fraction de la demi-période)
TRAIT = 0.05             # épaisseur du trait de la vague


def cub(p0, p1, p2, p3, t):
    m = 1 - t
    return (m**3 * p0[0] + 3 * m * m * t * p1[0] + 3 * m * t * t * p2[0] + t**3 * p3[0],
            m**3 * p0[1] + 3 * m * m * t * p1[1] + 3 * m * t * t * p2[1] + t**3 * p3[1])


def dcub(p0, p1, p2, p3, t):
    m = 1 - t
    return (3 * m * m * (p1[0] - p0[0]) + 6 * m * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0]),
            3 * m * m * (p1[1] - p0[1]) + 6 * m * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1]))


def norm(v):
    l = math.hypot(*v) or 1
    return (v[0] / l, v[1] / l)


def ajuste_cubique(pts, t0, t1):
    """Cubique passant par pts[0] et pts[-1], tangentes t0 / t1 imposées, poignées ajustées aux moindres carrés."""
    p0, p3 = pts[0], pts[-1]
    n = len(pts)
    ts = [i / (n - 1) for i in range(n)]
    # résoudre a, b dans  B(t) = p0 B0 + (p0 + a t0) B1 + (p3 - b t1) B2 + p3 B3
    A11 = A12 = A22 = X1 = X2 = 0.0
    for t, q in zip(ts, pts):
        m = 1 - t
        b0, b1, b2, b3 = m**3, 3 * m * m * t, 3 * m * t * t, t**3
        base = (p0[0] * (b0 + b1) + p3[0] * (b2 + b3), p0[1] * (b0 + b1) + p3[1] * (b2 + b3))
        c1 = (t0[0] * b1, t0[1] * b1)
        c2 = (-t1[0] * b2, -t1[1] * b2)
        r = (q[0] - base[0], q[1] - base[1])
        A11 += c1[0] ** 2 + c1[1] ** 2; A12 += c1[0] * c2[0] + c1[1] * c2[1]; A22 += c2[0] ** 2 + c2[1] ** 2
        X1 += c1[0] * r[0] + c1[1] * r[1]; X2 += c2[0] * r[0] + c2[1] * r[1]
    det = A11 * A22 - A12 * A12
    d = math.dist(p0, p3)
    if abs(det) < 1e-12:
        a = b = d / 3
    else:
        a = (X1 * A22 - X2 * A12) / det; b = (A11 * X2 - A12 * X1) / det
        if a <= 0 or b <= 0:
            a = b = d / 3
    return [p0, (p0[0] + a * t0[0], p0[1] + a * t0[1]), (p3[0] - b * t1[0], p3[1] - b * t1[1]), p3]


def arc_cubiques(c, r, a0, a1):
    """Arc de cercle (angles en radians, sens quelconque) en cubiques de ≤ 90°."""
    n = max(1, math.ceil(abs(a1 - a0) / (math.pi / 2) - 1e-9))
    out = []
    for i in range(n):
        u0 = a0 + (a1 - a0) * i / n; u1 = a0 + (a1 - a0) * (i + 1) / n
        k = 4 / 3 * math.tan((u1 - u0) / 4)
        p0 = (c[0] + r * math.cos(u0), c[1] + r * math.sin(u0)); p3 = (c[0] + r * math.cos(u1), c[1] + r * math.sin(u1))
        p1 = (p0[0] - k * r * math.sin(u0), p0[1] + k * r * math.cos(u0))
        p2 = (p3[0] + k * r * math.sin(u1), p3[1] - k * r * math.cos(u1))
        out.append([p0, p1, p2, p3])
    return out


def petale(spine, w_racine, w_tete, bosse=0.0, racine_ronde=True):
    """Pétale effilé le long d'une épine cubique : fin à la racine, tête arrondie. Renvoie une liste de cubiques
    formant un contour fermé. bosse : renflement au milieu (fraction de w_tete)."""
    N = 24
    def larg(t):
        return w_racine + (w_tete - w_racine) * t ** 1.3 + bosse * w_tete * math.sin(math.pi * t)
    gauche, droite = [], []
    for i in range(N + 1):
        t = i / N
        p = cub(*spine, t); d = norm(dcub(*spine, t)); nx, ny = -d[1], d[0]
        w = larg(t) / 2
        gauche.append((p[0] + nx * w, p[1] + ny * w)); droite.append((p[0] - nx * w, p[1] - ny * w))
    def tangente(pts, i):
        a, b = pts[max(0, i - 1)], pts[min(len(pts) - 1, i + 1)]
        return norm((b[0] - a[0], b[1] - a[1]))
    # deux cubiques par côté (racine → milieu → tête)
    m = N // 2
    segs = []
    segs.append(ajuste_cubique(gauche[:m + 1], tangente(gauche, 0), tangente(gauche, m)))
    segs.append(ajuste_cubique(gauche[m:], tangente(gauche, m), tangente(gauche, N)))
    # tête : demi-cercle
    pt = cub(*spine, 1); d = norm(dcub(*spine, 1)); r = larg(1) / 2
    ang = math.atan2(d[1], d[0])
    segs += arc_cubiques(pt, r, ang + math.pi / 2, ang - math.pi / 2)
    dr = list(reversed(droite))
    segs.append(ajuste_cubique(dr[:m + 1], tangente(dr, 0), tangente(dr, m)))
    segs.append(ajuste_cubique(dr[m:], tangente(dr, m), tangente(dr, N)))
    # racine : petit arrondi
    p0 = cub(*spine, 0); d0 = norm(dcub(*spine, 0)); r0 = larg(0) / 2
    a0 = math.atan2(d0[1], d0[0])
    if racine_ronde and r0 > 1e-4:
        segs += arc_cubiques(p0, r0, a0 - math.pi / 2, a0 - 3 * math.pi / 2)
    return segs


def pique(points_profil):
    """Pétale central « pique » : profil droit (u, demi-largeur) symétrisé ; renvoie un contour de cubiques.
    points_profil : liste de (u, w) du bas (racine) au sommet (pointe)."""
    droite = [(w, -u) for u, w in points_profil]
    gauche = [(-w, -u) for u, w in reversed(points_profil)]
    pts = droite + gauche[1:]
    # lissage : spline de Catmull-Rom fermée → cubiques
    n = len(pts)
    segs = []
    for i in range(n):
        p0, p1, p2, p3 = pts[i - 1], pts[i], pts[(i + 1) % n], pts[(i + 2) % n]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        segs.append([p1, c1, c2, p2])
    return segs


# ---------------------------------------------------------------- palmette (repère local : racine en (0,0), u vers le haut = -y)
def palmette():
    """Palmette ouverte vers le haut, racine au centre du trait de la vague (creux). Coordonnées en H."""
    formes = []
    # pique central : pied arrondi, tige pleine, tête large en goutte, pointe
    formes.append(pique([(0.20, 0.000), (0.207, 0.022), (0.235, 0.028), (0.32, 0.027), (0.39, 0.034),
                         (0.46, 0.068), (0.535, 0.103), (0.61, 0.092), (0.68, 0.048), (0.735, 0.0)]))
    for s in (1, -1):
        # pétale intérieur : épais, légèrement cintré, s'écarte vers le haut
        sp = [(s * 0.085, -0.345), (s * 0.105, -0.47), (s * 0.150, -0.59), (s * 0.228, -0.695)]
        formes.append(petale(sp, 0.030, 0.064, bosse=0.10))
        # feuille extérieure : le long de la pente de la vague
        sp = [(s * 0.240, -0.43), (s * 0.270, -0.50), (s * 0.300, -0.56), (s * 0.345, -0.635)]
        formes.append(petale(sp, 0.024, 0.052, bosse=0.10))
    return formes


def transformer(segs, f):
    return [[f(p) for p in s] for s in segs]


# ---------------------------------------------------------------- vague
def demi_onde(x0, y0, y1):
    return [(x0, y0), (x0 + K * DEMI, y0), (x0 + DEMI - K * DEMI, y1), (x0 + DEMI, y1)]


def frise_droite(n_demi, depart_creux=True):
    """Vague + palmettes pour n_demi demi-ondes, depuis x = 0 (sommet au départ). Repère bande : y ∈ [0, 1]."""
    vague = []
    palm = palmette()
    formes = []
    y = Y_CREUX if depart_creux else Y_CRETE
    for i in range(n_demi + 1):
        x = i * DEMI
        creux = (y == Y_CREUX)
        if creux:   # palmette ouverte vers le haut
            formes += [transformer(f, lambda p, x=x: (x + p[0], Y_CREUX + p[1])) for f in palm]
        else:       # retournée (demi-tour)
            formes += [transformer(f, lambda p, x=x: (x - p[0], Y_CRETE - p[1])) for f in palm]
        if i < n_demi:
            y2 = Y_CRETE if creux else Y_CREUX
            vague.append(demi_onde(x, y, y2))
            y = y2
    return vague, formes


# ---------------------------------------------------------------- angle
def cubique_tangente(p0, d0, p3, d3, f=0.40):
    l = math.dist(p0, p3) * f
    d0, d3 = norm(d0), norm(d3)
    return [p0, (p0[0] + d0[0] * l, p0[1] + d0[1] * l), (p3[0] - d3[0] * l, p3[1] - d3[1] * l), p3]


def angle(n_demi):
    """Angle bas-gauche : bande horizontale y ∈ [0, 1] (x ≥ 0) et bande verticale x ∈ [0, 1] (y ≤ 1).
    Coin extérieur (0, 1), coin intérieur (1, 0). Les deux vagues partent de J = (0,88 ; 0,12)."""
    traits, formes = [], []
    # bras horizontal : vague qui part de J par une crête
    vague_h, formes_h = frise_droite(n_demi, depart_creux=False)
    nb_palm = len(palmette())
    formes_h = formes_h[nb_palm:]            # pas de palmette sous la crête J (place de la volute)
    dx = 1 - Y_CREUX                          # J : x = 0,12 + … → crête en x = 0,88
    dx = 0.88
    tr_h = lambda p: (p[0] + dx, p[1])
    vague_h = transformer(vague_h, tr_h); formes_h = [transformer(f, tr_h) for f in formes_h]
    # bras vertical : symétrique du bras horizontal par rapport à la diagonale du coin
    miroir = lambda p: (1 - p[1], 1 - p[0])
    vague_v = transformer(vague_h, miroir); formes_v = [transformer(f, miroir) for f in formes_h]
    # volute : prolonge la vague verticale (qui arrive en J vers le bas) et s'enroule vers le coin extérieur
    J = (0.88, Y_CRETE)
    pts = [(J, (0, 1)), ((0.905, 0.50), (0, 1)), ((0.52, 0.875), (-1, 0)), ((0.135, 0.50), (0, -1)),
           ((0.34, 0.175), (1, -0.15))]
    volute = [cubique_tangente(a[0], a[1], b[0], b[1], 0.40 if i < 3 else 0.42) for i, (a, b) in enumerate(zip(pts, pts[1:]))]
    # trait 1 : vague verticale (du haut vers J) puis volute ; trait 2 : vague horizontale depuis J
    v_inverse = [list(reversed(sg)) for sg in reversed(vague_v)]
    traits.append(v_inverse + volute)
    traits.append(vague_h)
    # palmette dans la volute : racine sur le flanc droit, ouverte vers le coin extérieur (gauche)
    e = 0.78
    racine = (0.905, 0.50)
    for f in palmette()[:3]:   # pique + 2 pétales intérieurs (les feuilles extérieures encombreraient la volute)
        formes.append(transformer(f, lambda p: (racine[0] + p[1] * e, racine[1] - p[0] * e)))
    return traits, formes_h + formes_v + formes


# ---------------------------------------------------------------- export
def svg_chemin(segs, ferme):
    d = f"M {segs[0][0][0]:.4f},{segs[0][0][1]:.4f} "
    for s in segs:
        d += f"C {s[1][0]:.4f},{s[1][1]:.4f} {s[2][0]:.4f},{s[2][1]:.4f} {s[3][0]:.4f},{s[3][1]:.4f} "
    return d + ("Z" if ferme else "")


def ecrire_svg(chemin, traits, formes, boite, mm, couleur="#000"):
    x0, y0, x1, y1 = boite
    w, h = (x1 - x0) * mm, (y1 - y0) * mm
    corps = []
    for t in traits:
        corps.append(f'<path d="{svg_chemin(t, False)}" fill="none" stroke="{couleur}" stroke-width="{TRAIT}" stroke-linecap="round" stroke-linejoin="round"/>')
    for f in formes:
        corps.append(f'<path d="{svg_chemin(f, True)}" fill="{couleur}"/>')
    pathlib.Path(chemin).write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{w:.3f}mm" height="{h:.3f}mm" viewBox="{x0} {y0} {x1 - x0} {y1 - y0}">\n'
        + "\n".join(corps) + "\n</svg>\n", encoding="utf-8")


JSX = r"""#target illustrator
/*  ATELIER RETRO — frise « vague + palmettes » en Bézier (noir, fond transparent).
    Illustrator > Fichier > Scripts > Autre script…  Le .ai est enregistré à côté du script. */
(function () {
 try {
  var D = /*__DONNEES__*/null;
  var MM = 72 / 25.4;
  var doc = app.documents.add(DocumentColorSpace.RGB, D.largeur * MM, D.hauteur * MM);
  app.coordinateSystem = CoordinateSystem.DOCUMENTCOORDINATESYSTEM;
  var AB = doc.artboards[0].artboardRect;
  function P(p) { return [AB[0] + p[0] * MM, AB[1] - p[1] * MM]; }
  var noir = new RGBColor(); noir.red = 0; noir.green = 0; noir.blue = 0;
  function chemin(conteneur, segs, ferme) {
    var p = conteneur.pathItems.add(), n = segs.length;
    var pts = [];
    for (var i = 0; i < n; i++) pts.push(segs[i][0]);
    if (!ferme) pts.push(segs[n - 1][3]);
    p.setEntirePath((function () { var t = []; for (var k = 0; k < pts.length; k++) t.push(P(pts[k])); return t; })());
    for (var j = 0; j < p.pathPoints.length; j++) {
      var pp = p.pathPoints[j];
      var avant = ferme ? segs[(j - 1 + n) % n] : (j > 0 ? segs[j - 1] : null);
      var apres = (ferme || j < n) ? segs[j % n] : null;
      pp.leftDirection = avant ? P(avant[2]) : pp.anchor;
      pp.rightDirection = apres ? P(apres[1]) : pp.anchor;
      pp.pointType = PointType.SMOOTH;
    }
    p.closed = ferme;
    return p;
  }
  for (var g = 0; g < D.groupes.length; g++) {
    var G = D.groupes[g];
    var calque = doc.layers.add(); calque.name = G.nom;
    var grp = calque.groupItems.add(); grp.name = G.nom;
    for (var a = 0; a < G.traits.length; a++) {
      var t = chemin(grp, G.traits[a], false);
      t.name = "Vague"; t.filled = false; t.stroked = true; t.strokeColor = noir;
      t.strokeWidth = D.trait * MM; t.strokeCap = StrokeCap.ROUNDENDCAP; t.strokeJoin = StrokeJoin.ROUNDENDJOIN;
    }
    for (var b = 0; b < G.formes.length; b++) {
      var f = chemin(grp, G.formes[b], true);
      f.name = "Pétale"; f.filled = true; f.fillColor = noir; f.stroked = false;
    }
  }
  try { if (doc.layers[doc.layers.length - 1].pageItems.length === 0) doc.layers[doc.layers.length - 1].remove(); } catch (e) {}
  var fichier = new File(File($.fileName).parent.fsName + "/" + File($.fileName).name.replace(/\.jsx$/i, "").replace(/_illustrator$/i, "") + ".ai");
  try { var o = new IllustratorSaveOptions(); o.pdfCompatible = true; doc.saveAs(fichier, o); } catch (e2) {}
  alert("Atelier Retro — frise construite.\n\nFichier : " + fichier.fsName +
        "\n\nLa vague est un tracé avec contour (Objet > Tracé > Vectoriser le contour pour l'aplatir).");
 } catch (err) {
  alert("Atelier Retro — erreur\n\nLigne " + err.line + " : " + err.message + "\n\nEnvoie une capture de ce message a Claude.");
 }
})();
"""


def ecrire_jsx(chemin, groupes, largeur, hauteur, mm):
    def mise(segs):
        return [[[round(p[0] * mm, 4), round(p[1] * mm, 4)] for p in s] for s in segs]
    D = {"largeur": round(largeur * mm, 3), "hauteur": round(hauteur * mm, 3), "trait": round(TRAIT * mm, 4),
         "groupes": [{"nom": g["nom"], "traits": [mise(t) for t in g["traits"]], "formes": [mise(f) for f in g["formes"]]} for g in groupes]}
    s = JSX.replace("/*__DONNEES__*/null", json.dumps(D))
    s = "".join(c if ord(c) < 128 else f"\\u{ord(c):04x}" for c in s).replace("\n", "\r\n")
    pathlib.Path(chemin).write_bytes(s.encode("ascii"))


def decaler(segs, dx, dy):
    return [[(p[0] + dx, p[1] + dy) for p in s] for s in segs]


if __name__ == "__main__":
    a = argparse.ArgumentParser()
    a.add_argument("sortie"); a.add_argument("--bande", type=float, default=5.0, help="hauteur de bande en mm")
    a.add_argument("--periodes", type=int, default=6)
    o = a.parse_args()
    out = pathlib.Path(o.sortie); out.mkdir(parents=True, exist_ok=True)
    n = 2 * o.periodes
    vague, formes = frise_droite(n)
    marge = 0.1
    L = n * DEMI
    boite = (-0.45, -marge, L + 0.45, 1 + marge)
    ecrire_svg(out / "frise_droite.svg", [vague], formes, boite, o.bande)
    # module répétable : une période, de creux à creux (la palmette du creux suivant appartient au module suivant)
    v1, f1 = frise_droite(2)
    f1 = f1[:2 * len(palmette())]
    bm = (-0.45, -marge, 2 * DEMI + 0.45, 1 + marge)
    ecrire_svg(out / "frise_module.svg", [v1], f1, bm, o.bande)
    # angle
    ta, fa = angle(2 * 2)
    xs = [p[0] for t in ta for s_ in t for p in s_] + [p[0] for f in fa for s_ in f for p in s_]
    ys = [p[1] for t in ta for s_ in t for p in s_] + [p[1] for f in fa for s_ in f for p in s_]
    ba = (min(0, min(xs)) - marge, min(ys) - 0.45, max(xs) + 0.45, max(1, max(ys)) + marge)
    ecrire_svg(out / "frise_angle.svg", ta, fa, ba, o.bande)
    # Illustrator : les trois éléments sur un même plan de travail, l'un sous l'autre
    y = 0; G = []
    for nom, tr_, fo, b in (("Frise droite", [vague], formes, boite), ("Module répétable (1 période)", [v1], f1, bm), ("Angle", ta, fa, ba)):
        G.append({"nom": nom, "traits": [decaler(t, -b[0], -b[1] + y) for t in tr_], "formes": [decaler(f, -b[0], -b[1] + y) for f in fo]})
        y += (b[3] - b[1]) + 0.6
    largeur = max(boite[2] - boite[0], ba[2] - ba[0])
    ecrire_jsx(out / "frise_illustrator.jsx", G, largeur, y - 0.6, o.bande)
    print("OK", out)
