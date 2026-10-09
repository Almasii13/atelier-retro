"""Atelier Retro — export Photoshop (.jsx).

Depuis la page « propre » déjà rendue par Playwright :
  1. extraction de la scène (lib/extraction_ps.js) ;
  2. mesure de l'encre réelle de chaque texte, dans son repère local non tourné,
     puis position de son centre et angle dans la page ;
  3. écriture d'un script ExtendScript autonome qui reconstruit le document dans Photoshop :
     calques de texte modifiables, formes vectorielles, masque d'écrêtage pour les images,
     zones réservées, repères de coupe / fond perdu / sécurité, groupes nommés.
"""
import io, json, math, pathlib

RACINE = pathlib.Path(__file__).resolve().parent.parent
PX_DOC = 300 / 96  # 1 px CSS → px document (300 ppi)

POLICES = {  # (famille CSS) → [(graisse min, nom PostScript), ...], du plus gras au plus léger
    "Zen Kaku": [(800, "ZenKakuGothicNew-Black"), (600, "ZenKakuGothicNew-Bold"), (0, "ZenKakuGothicNew-Medium")],
    "Dela Gothic": [(0, "DelaGothicOne-Regular")],
    "Zen Old Mincho": [(800, "ZenOldMincho-Black"), (700, "ZenOldMincho-Bold"), (600, "ZenOldMincho-SemiBold"), (0, "ZenOldMincho-Medium")],
    "Yuji Syuku": [(0, "YujiSyuku-Regular")],
    "M Rounded": [(0, "RoundedMplus1c-ExtraBold")],
    "Anton": [(0, "Anton-Regular")],
    "Ultra": [(0, "Ultra-Regular")],
    "Passion One": [(0, "PassionOne-Regular")],
    "Tinos": [(0, "Tinos-Bold")],
    "Arvo": [(0, "Arvo-Bold")],
    "Archivo Black": [(0, "ArchivoBlack-Regular")],
    "Work Sans BI": [(0, "WorkSans-BlackItalic")],
    "Noto JP Black": [(0, "NotoSansJP-Black")],
    "Oswald M": [(0, "Oswald-Medium")],
    "BIZ UDP": [(0, "BIZUDPGothic-Bold")],
    "Roboto Cond": [(0, "RobotoCondensed-SemiBold")],
    "MP1 Black": [(0, "MPLUS1p-Black")],
    "MP1 Bold": [(0, "MPLUS1p-Bold")],
    "MP1 Medium": [(0, "MPLUS1p-Medium")],
    "Potta One": [(0, "PottaOne-Regular")],
    "OS Cond BI": [(0, "OpenSans-CondensedBoldItalic")],
    "Rokkitt Black": [(0, "Rokkitt-Black")],
    "M Rounded Black": [(0, "RoundedMplus1c-Black")],
    "Noto Sans CJK JP": [(800, "NotoSansCJKjp-Black"), (600, "NotoSansCJKjp-Bold"), (0, "NotoSansCJKjp-Regular")],
    "Noto Serif CJK JP": [(0, "NotoSerifCJKjp-Bold")],
}
CAPITALE = {"Passion One": 0.62, "Anton": 0.86, "Archivo Black": 0.69, "Arvo": 0.74, "Tinos": 0.65, "Ultra": 0.72}
NATIF_ITALIQUE = {"Work Sans BI", "OS Cond BI"}  # polices déjà italiques : pas d'italique synthétique en plus
UNE_GRAISSE = {"MP1 Black", "MP1 Bold", "MP1 Medium", "Potta One", "OS Cond BI", "Roboto Cond", "Rokkitt Black", "M Rounded Black", "Work Sans BI", "Noto JP Black", "Oswald M", "Passion One", "Dela Gothic", "Anton", "Archivo Black", "Yuji Syuku", "Ultra"}  # le navigateur synthétise le gras au-delà de 600


def police_ps(st):
    choix = POLICES.get(st["famille"], POLICES["Zen Kaku"])
    for gmin, nom in choix:
        if st["graisse"] >= gmin:
            return nom
    return choix[-1][1]


CSS_ENCRE = """
  html, body { background: transparent !important; overflow: visible !important; }
  body * { visibility: hidden !important; clip-path: none !important; }
  [data-encre], [data-encre] * { visibility: visible !important; background: transparent !important;
    -webkit-text-stroke-width: 0 !important; outline: none !important; box-shadow: none !important;
    -webkit-text-fill-color: #000 !important; }
  [data-encre] .rt { visibility: hidden !important; }  /* furigana : calques à part, hors de l'encre de leur ligne */
"""


def mesurer_textes(page, scene):
    """Complète chaque texte : centre de l'encre dans la page (px CSS), angle, largeur d'encre locale."""
    from PIL import Image
    tag = page.add_style_tag(content=CSS_ENCRE)
    vp0 = dict(page.viewport_size)
    # fenêtre élargie : une fois les rotations neutralisées, un texte peut sortir du format
    page.set_viewport_size({"width": vp0["width"] * 2, "height": vp0["height"] * 2})
    for it in scene["items"]:
        if it["type"] != "texte":
            continue
        sel = f'[data-psid="{it["id"]}"]'
        rect = page.evaluate("""sel => {
            const el = document.querySelector(sel);
            el.dataset.encre = '1';
            const touches = [];
            for (let e = el; e && !e.classList.contains('page'); e = e.parentElement) {
                touches.push([e, e.style.getPropertyValue('transform'), e.style.getPropertyPriority('transform')]);
                e.style.setProperty('transform', 'none', 'important');
            }
            window.__touches = touches;
            // rotations neutralisées : un texte d'un repère tourné peut tomber hors de la fenêtre (coordonnées
            // négatives) ; on le ramène dedans par une translation provisoire, sans effet sur ses mesures locales
            el.style.setProperty('translate', '0px 0px', 'important');
            let r = el.getBoundingClientRect();
            const dx = Math.max(0, 60 - r.left), dy = Math.max(0, 60 - r.top);
            if (dx || dy) { el.style.setProperty('translate', dx + 'px ' + dy + 'px', 'important'); r = el.getBoundingClientRect(); }
            return [r.left, r.top, r.width, r.height];
        }""", sel)
        marge = 40
        vw, vh = page.viewport_size["width"], page.viewport_size["height"]
        x0, y0 = max(0, rect[0] - marge), max(0, rect[1] - marge)
        x1, y1 = min(vw, rect[0] + rect[2] + marge), min(vh, rect[1] + rect[3] + marge)
        clip = {"x": x0, "y": y0, "width": x1 - x0, "height": y1 - y0}  # rester dans la fenêtre (sinon l'échelle change)
        png = page.screenshot(clip=clip, omit_background=True, scale="device")
        im = Image.open(io.BytesIO(png)).convert("RGBA").getchannel("A").point(lambda a: 255 if a > 60 else 0)
        k = im.width / clip["width"]
        bb = im.getbbox()
        page.evaluate("""sel => {
            const el = document.querySelector(sel);
            delete el.dataset.encre;
            el.style.removeProperty('translate');
            for (const [e, v, p] of window.__touches) { if (v) e.style.setProperty('transform', v, p); else e.style.removeProperty('transform'); }
        }""", sel)
        if not bb:
            it["vide"] = True
            continue
        # encre en repère local (px CSS, origine = coin haut-gauche de la boîte de l'élément)
        lx0 = bb[0] / k + x0 - rect[0]; ly0 = bb[1] / k + y0 - rect[1]
        lx1 = bb[2] / k + x0 - rect[0]; ly1 = bb[3] / k + y0 - rect[1]
        cx, cy = (lx0 + lx1) / 2, (ly0 + ly1) / 2
        (px, py), (qx, qy), (rx, ry) = page.evaluate("""([sel, cx, cy]) => {
            const el = document.querySelector(sel);
            const pos = el.style.position;
            if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
            const r = [[cx, cy], [cx + 100, cy], [cx, cy + 100]].map(([x, y]) => {
                const p = document.createElement('i');
                p.style.cssText = `position:absolute;left:${x}px;top:${y}px;width:0;height:0;margin:0;padding:0;border:0;display:block;`;
                el.appendChild(p); const b = p.getBoundingClientRect(); p.remove(); return [b.left, b.top];
            });
            el.style.position = pos; return r;
        }""", [sel, cx, cy])
        it["centre"] = [px, py]
        it["angle"] = math.degrees(math.atan2(qy - py, qx - px))
        # échelle horizontale et inclinaison (skew) cumulées, transformations des ancêtres comprises
        ux, uy = qx - px, qy - py
        vx, vy = rx - px, ry - py
        it["echelleX"] = math.hypot(ux, uy) / 100
        _n = math.hypot(ux, uy) or 1
        it["echelleY"] = abs(ux * vy - uy * vx) / _n / 100  # hauteur perpendiculaire à la ligne de base
        nx, ny = -uy, ux  # perpendiculaire à u (repère écran, y vers le bas)
        it["biais"] = math.degrees(math.atan2(nx * vy - ny * vx, nx * vx + ny * vy))
        it["encre"] = [lx1 - lx0, ly1 - ly0]
    tag.evaluate("t => t.remove()")
    page.set_viewport_size(vp0)


def _doc(v):
    return round(v * PX_DOC, 2)


def _couleur(c):
    return [c["r"], c["g"], c["b"]] if c else [0, 0, 0]


def construire_scene_ps(scene, fiche):
    """Convertit la scène navigateur en instructions pour le script Photoshop (px document @300 ppi)."""
    fp = fiche.get("fond_perdu", 3)
    secu = fiche.get("securite", 2.5)
    if "dim" in fiche:
        L, H = fiche["dim"]["verso"] + fiche["dim"]["tranche"] + fiche["dim"]["face"], fiche["dim"]["hauteur"]
    else:
        L, H = fiche["format"]["largeur"], fiche["format"]["hauteur"]
    mm = 300 / 25.4
    libelles = fiche.get("libelles_calques", {})
    sortie = {
        "titre": fiche.get("titre_fichier", "atelier"),
        "fichier": "atelier",
        "largeur": round((L + 2 * fp) * mm), "hauteur": round((H + 2 * fp) * mm),
        "reperes": {"coupe": [fp * mm, (L + fp) * mm, fp * mm, (H + fp) * mm],
                    "secu": [(fp + secu) * mm, (L + fp - secu) * mm, (fp + secu) * mm, (H + fp - secu) * mm]},
        "plis": [(fp + x) * mm for x in fiche.get("plis_mm", [])],
        "polices": [], "items": [],
    }
    if "dim" in fiche:
        d = fiche["dim"]
        sortie["plis"] = [(fp + d["verso"]) * mm, (fp + d["verso"] + d["tranche"]) * mm]
    polices = set()

    def chemin(ch):
        return [[{"a": [_doc(p["a"][0]), _doc(p["a"][1])],
                  **({"g": [_doc(p["g"][0]), _doc(p["g"][1])], "d": [_doc(p["d"][0]), _doc(p["d"][1])]} if "g" in p else {})}
                 for p in c] for c in ch]

    def calque_nom(c):
        return libelles.get(c, c)

    for it in scene["items"]:
        base = {"calque": it["calque"], "calqueNom": calque_nom(it["calque"]), "groupe": it.get("groupe", ""), "nom": it["nom"]}
        t = it["type"]
        if t == "forme":
            sortie["items"].append({**base, "type": "forme", "couleur": _couleur(it["couleur"]), "chemins": chemin(it["chemins"]),
                                    **({"xor": True} if it.get("xor") else {})})
        elif t in ("image", "zone"):
            sortie["items"].append({**base, "type": t, "cle": it["cle"], "label": it.get("label", ""), "chemins": chemin(it["chemins"]),
                                    "detoure": bool(it.get("detoure"))})
        elif t == "degrade":
            sortie["items"].append({**base, "type": "degrade", "chemins": chemin(it["chemins"]),
                                    "angle": 90 - it["degrade"]["angle"],
                                    "stops": [{"c": _couleur(st["c"]), "pos": st["pos"]} for st in it["degrade"]["stops"]]})
        elif t == "rayures":
            (ax, ay), (bx, by), (cx, cy), (dx, dy) = it["coins"]
            bandes = []
            for st in it["stops"]:
                if bandes and bandes[-1]["c"] == st["c"]:
                    bandes[-1]["a"] = max(bandes[-1]["a"], st["a"])
                else:
                    bandes.append(dict(st))
            periode = max(b["a"] for b in bandes)
            if periode < 0.5 or len(bandes) < 2:  # garde-fou
                continue
            fond = bandes[-1]["c"]
            b0 = bandes[0]
            rects = []
            x = ax
            while x < bx:
                rects.append([[x + b0["de"], ay], [min(x + b0["a"], bx), ay], [min(x + b0["a"], bx), dy], [x + b0["de"], dy]])
                x += periode
            sortie["items"].append({**base, "type": "forme", "nom": "Pied – fond rayures", "couleur": _couleur(fond),
                                    "chemins": [[{"a": [_doc(ax), _doc(ay)]}, {"a": [_doc(bx), _doc(by)]}, {"a": [_doc(cx), _doc(cy)]}, {"a": [_doc(dx), _doc(dy)]}]]})
            sortie["items"].append({**base, "type": "forme", "nom": "Pied – rayures", "couleur": _couleur(b0["c"]),
                                    "chemins": [[{"a": [_doc(px), _doc(py)]} for px, py in r] for r in rects]})
        elif t == "arc":
            st = it["style"]; ps = police_ps(st); polices.add(ps)
            sortie["items"].append({**base, "type": "arc", "police": ps, "taille": _doc(st["taille"]),
                                    "couleur": _couleur(st["couleur"]), "italique": bool(st["italique"] and st["famille"] not in NATIF_ITALIQUE),
                                    "car": [{"c": c["c"], "centre": [_doc(c["centre"][0]), _doc(c["centre"][1])], "angle": round(c["angle"], 3)} for c in it["car"]]})
        elif t == "texte" and not it.get("vide"):
            runs = []
            for r in it["runs"]:
                st = r["st"]; ps = police_ps(st); polices.add(ps)
                taille = st["taille"]
                runs.append({"de": r["de"], "a": r["a"], "police": ps, "taille": _doc(taille),
                             "approche": round(st["interlettre"] / taille * 1000) if taille else 0,
                             "interligne": _doc(st["interligne"]) if st["interligne"] else None,
                             "couleur": _couleur(st["couleur"]),
                             "italique": bool((st["italique"] or abs(it.get("biais", 0)) > 2) and st["famille"] not in NATIF_ITALIQUE),
                             "gras": st["famille"] in UNE_GRAISSE and st["graisse"] >= 600,
                             "echelleH": round(it.get("echelleX", 1) * 100, 2),
                             "echelleV": round(it.get("echelleY", 1) * st.get("echelleV", 1) * 100, 2),
                             # lettres raccourcies par le haut fixe (arche) : on remonte la ligne de base d'autant
                             "decalage": round(_doc(taille) * CAPITALE.get(st["famille"], 0.72) * (1 - st.get("echelleV", 1)), 2)})
            # runs contigus de 0 à len(texte)
            runs.sort(key=lambda r: r["de"])
            if runs:
                runs[0]["de"] = 0
                for a, b in zip(runs, runs[1:]):
                    a["a"] = b["de"]
                runs[-1]["a"] = len(it["texte"])
            rg = [p["retraitG"] for p in it["paras"]]
            mini = min(rg) if rg else 0
            paras = [{"de": p["de"], "a": p["a"], "align": p["align"], "retrait1": _doc(p["retrait1"]), "retraitG": _doc(p["retraitG"] - mini)} for p in it["paras"]]
            contour = next((r["st"] for r in it["runs"] if r["st"]["contour"] > 0), None)
            item = {**base, "type": "texte", "texte": it["texte"], "runs": runs, "paras": paras,
                    "centre": [_doc(it["centre"][0]), _doc(it["centre"][1])], "angle": round(it["angle"], 3),
                    "encre": [_doc(it["encre"][0] * it.get("echelleX", 1)), _doc(it["encre"][1])],
                    "vertical": bool(it.get("vertical")),
                    "boite": (({"l": _doc(it["boite"]["l"]) * 1.6 + 40, "h": _doc(it["boite"]["h"])} if it.get("vertical")
                               else {"l": _doc(it["boite"]["l"]) + 1, "h": _doc(it["boite"]["h"]) * 1.6 + 40}) if it["boite"] else None)}
            if it.get("masque"):
                item["masque"] = [[_doc(x), _doc(y)] for x, y in it["masque"]]
            if it.get("degradeTexte"):
                d = it["degradeTexte"]
                item["degradeTexte"] = {"angle": round(90 - d["angle"] - it["angle"], 2),
                                        "stops": [{"c": _couleur(st["c"]), "pos": st["pos"]} for st in d["stops"]]}
            if it.get("motif"):
                item["motif"] = it["motif"]  # texture incrustée (calque écrêté sur le texte)
            if contour:
                seul = all((r["st"]["couleur"] or {}).get("a", 1) == 0 for r in it["runs"])
                item["contour"] = {"taille": _doc(contour["contour"]) if seul else _doc(contour["contour"]) / 2,
                                   "couleur": _couleur(contour["contourCouleur"]), "centre": seul}
                item["contourSeul"] = seul
            sortie["items"].append(item)
    sortie["polices"] = sorted(polices)
    return sortie


def exporter_jsx(page, fiche, base):
    scene = page.evaluate((RACINE / "lib" / "extraction_ps.js").read_text(encoding="utf-8"))
    mesurer_textes(page, scene)
    donnees = construire_scene_ps(scene, fiche)
    # Textures incrustées dans des textes (data-motif) : embarquées en base64 dans les scripts
    import base64
    from PIL import Image
    motifs = {}
    for it in donnees["items"]:
        cle = it.get("motif")
        if cle and cle not in motifs:
            chemin = pathlib.Path(base).parent / fiche.get("images", {}).get(cle, "")
            if chemin.is_file():
                im = Image.open(chemin)
                motifs[cle] = {"b64": base64.b64encode(chemin.read_bytes()).decode(), "l": im.width, "h": im.height}
        if cle and cle not in motifs:
            it.pop("motif")
    donnees["motifs"] = motifs
    import re, unicodedata
    nom = unicodedata.normalize("NFKD", pathlib.Path(base).name).encode("ascii", "ignore").decode()
    donnees["fichier"] = re.sub(r"[^A-Za-z0-9_-]+", "_", nom).strip("_") or "atelier"
    modele = (RACINE / "lib" / "photoshop_modele.jsx").read_text(encoding="utf-8")
    jsx = modele.replace("/*__SCENE__*/null", json.dumps(donnees, ensure_ascii=True))
    # Fichier 100 % ASCII : ExtendScript lit parfois les .jsx sans BOM dans l'encodage du système
    jsx = "".join(c if ord(c) < 128 else f"\\u{ord(c):04x}" for c in jsx)
    jsx = jsx.replace("\r\n", "\n").replace("\n", "\r\n")  # fins de ligne Windows, lues partout
    pathlib.Path(f"{base}_photoshop.jsx").write_bytes(jsx.encode("ascii"))
    # Même scène pour Illustrator (lib/illustrator_modele.jsx)
    modele_ai = (RACINE / "lib" / "illustrator_modele.jsx").read_text(encoding="utf-8")
    ai = modele_ai.replace("/*__SCENE__*/null", json.dumps(donnees, ensure_ascii=True))
    ai = "".join(c if ord(c) < 128 else f"\\u{ord(c):04x}" for c in ai)
    ai = ai.replace("\r\n", "\n").replace("\n", "\r\n")
    pathlib.Path(f"{base}_illustrator.jsx").write_bytes(ai.encode("ascii"))
    return donnees
