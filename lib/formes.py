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
