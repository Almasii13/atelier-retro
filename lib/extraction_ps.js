/* ATELIER RETRO — extraction de la mise en page pour Photoshop.
   Exécuté dans la page « propre » après atelier.js. Renvoie une scène :
   formes (polygones / cercles / rectangles, en px viewport), emplacements d'images,
   zones réservées, blocs de texte (runs de style, paragraphes) et caractères en arc.
   Les positions des textes sont complétées ensuite côté Python (mesure de l'encre). */
(() => {
  const page = document.querySelector(".page");
  const INLINE = new Set(["inline", "inline-block", "ruby", "ruby-text", "contents"]);
  const items = [];
  let nid = 0;

  const cs = (el, ps) => getComputedStyle(el, ps || null);
  const couleur = (s) => {
    const m = s && s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[\s,\/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const calque = (el) => { const c = el.closest("[data-calque]"); return c ? c.dataset.calque : "texte"; };
  const groupe = (el) => { const c = el.closest("[data-groupe]"); return c ? c.dataset.groupe : ""; };
  const nomDe = (el) => (el.getAttribute("class") || el.tagName.toLowerCase()).split(" ").filter(c => c !== "abs").join(" ");

  // Points locaux (px, repère de la boîte de l'élément) → viewport, transformations comprises
  function sondes(el, pts) {
    const pos = el.style.position;
    if (cs(el).position === "static") el.style.position = "relative";
    const res = pts.map(([x, y]) => {
      const p = document.createElement("i");
      p.style.cssText = `position:absolute;left:${x}px;top:${y}px;width:0;height:0;margin:0;padding:0;border:0;display:block;`;
      el.appendChild(p);
      const r = p.getBoundingClientRect();
      p.remove();
      return [r.left, r.top];
    });
    el.style.position = pos;
    return res;
  }
  const coins = (el) => {
    const w = el.offsetWidth, h = el.offsetHeight;
    const cp = cs(el).clipPath, m = cp && cp.match(/polygon\(([^)]+)\)/);
    if (!m) return sondes(el, [[0, 0], [w, 0], [w, h], [0, h]]);
    const val = (t, ref) => t.endsWith("%") ? parseFloat(t) / 100 * ref : parseFloat(t);
    return sondes(el, m[1].split(",").map(p => { const [x, y] = p.trim().split(/\s+/); return [val(x, w), val(y, h)]; }));
  };

  function base(el, type) {
    return { id: nid++, type, calque: calque(el), groupe: groupe(el), nom: nomDe(el) };
  }

  // ---------- SVG ----------
  function svgFormes(svg) {
    for (const el of svg.querySelectorAll("polygon, circle, rect, ellipse, text")) {
      const m = el.getScreenCTM();
      const tp = (x, y) => { const p = new DOMPoint(x, y).matrixTransform(m); return [p.x, p.y]; };
      if (el.tagName === "text") { arc(el, m); continue; }
      const fill = couleur(cs(el).fill);
      if (!fill || fill.a === 0) continue;
      const it = base(el, "forme");
      it.couleur = fill; it.nom = it.groupe ? it.groupe + " – forme" : "forme";
      if (el.tagName === "polygon") {
        it.chemins = [[...el.points].map(p => ({ a: tp(p.x, p.y) }))];
      } else if (el.tagName === "rect") {
        const x = el.x.baseVal.value, y = el.y.baseVal.value, w = el.width.baseVal.value, h = el.height.baseVal.value;
        it.chemins = [[[x, y], [x + w, y], [x + w, y + h], [x, y + h]].map(p => ({ a: tp(...p) }))];
      } else {
        const cx = el.cx.baseVal.value, cy = el.cy.baseVal.value;
        const rx = el.tagName === "circle" ? el.r.baseVal.value : el.rx.baseVal.value;
        const ry = el.tagName === "circle" ? el.r.baseVal.value : el.ry.baseVal.value;
        // cercle / ellipse échantillonné finement (144 segments : écart < 0,01 mm) — robuste dans Photoshop
        const N = 144, pts = [];
        for (let i = 0; i < N; i++) { const a = 2 * Math.PI * i / N; pts.push({ a: tp(cx + rx * Math.cos(a), cy + ry * Math.sin(a)) }); }
        it.chemins = [pts];
        it.nom = (it.groupe ? it.groupe + " – " : "") + "cercle";
      }
      items.push(it);
    }
  }

  function arc(t, m) {
    const n = t.getNumberOfChars();
    const s = cs(t);
    const fs = parseFloat(s.fontSize);
    const it = base(t, "arc");
    it.texte = t.textContent;
    it.nom = "Texte en arc – " + it.texte;
    it.style = style(t);
    const echelle = Math.hypot(m.a, m.b);
    it.style.taille = fs * echelle;
    it.car = [];
    for (let i = 0; i < n; i++) {
      const p0 = t.getStartPositionOfChar(i), rot = t.getRotationOfChar(i), adv = t.getSubStringLength(i, 1);
      const r = rot * Math.PI / 180;
      const lx = adv / 2, ly = -0.36 * fs;
      const cx = p0.x + lx * Math.cos(r) - ly * Math.sin(r), cy = p0.y + lx * Math.sin(r) + ly * Math.cos(r);
      const p = new DOMPoint(cx, cy).matrixTransform(m);
      it.car.push({ c: t.textContent[i], centre: [p.x, p.y], angle: rot + Math.atan2(m.b, m.a) * 180 / Math.PI });
    }
    items.push(it);
  }

  // ---------- Dégradés linéaires CSS ----------
  function degrade(bgi) {
    const m = bgi && bgi.match(/^linear-gradient\((.*)\)$/);
    if (!m) return null;
    const parts = []; let prof = 0, cur = "";
    for (const ch of m[1]) { if (ch === "(") prof++; if (ch === ")") prof--; if (ch === "," && !prof) { parts.push(cur.trim()); cur = ""; } else cur += ch; }
    parts.push(cur.trim());
    let angle = 180;
    if (/deg$/.test(parts[0])) angle = parseFloat(parts.shift());
    else if (/^to /.test(parts[0])) { const t = parts.shift(); angle = { "to top": 0, "to right": 90, "to bottom": 180, "to left": 270 }[t] ?? 180; }
    const stops = parts.map(p => { const c = couleur(p); const q = p.match(/([\d.]+)%\s*$/); return { c, pos: q ? parseFloat(q[1]) / 100 : null }; }).filter(x => x.c);
    stops.forEach((st, i) => { if (st.pos === null) st.pos = stops.length > 1 ? i / (stops.length - 1) : 0; });
    return { angle, stops };
  }

  // ---------- Style d'un run ----------
  function style(el, ps) {
    const s = cs(el, ps);
    const lh = s.lineHeight === "normal" ? null : parseFloat(s.lineHeight);
    return {
      famille: s.fontFamily.split(",")[0].replace(/["']/g, "").trim(),
      graisse: parseInt(s.fontWeight, 10),
      italique: s.fontStyle !== "normal" || (() => { const m = (s.transform || "").match(/matrix\(([^)]+)\)/); return !!m && Math.abs(Number(m[1].split(",")[2])) > 0.05; })(),
      taille: parseFloat(s.fontSize), interlettre: s.letterSpacing === "normal" ? 0 : parseFloat(s.letterSpacing),
      interligne: lh, couleur: (() => { const c = couleur(s.color); if (c && c.a === 0) { const d = degrade(s.backgroundImage) || (el.closest && el.closest("[data-psid]") && null); if (d) return d.stops[Math.floor(d.stops.length / 2)].c; } return c; })(),
      contour: parseFloat(s.webkitTextStrokeWidth) || 0, contourCouleur: couleur(s.webkitTextStrokeColor),
    };
  }

  // ---------- Blocs de texte ----------
  const aTexte = (el) => el.textContent.trim().length > 0;
  const estFlex = (d) => ["flex", "inline-flex", "grid", "inline-grid"].includes(d);

  function estBlocTexte(el) {
    const s = cs(el);
    if (!aTexte(el)) return false;
    const enfants = [...el.children].filter(k => cs(k).display !== "none");
    if (estFlex(s.display)) return enfants.length === 0;
    const blocs = [];
    for (const k of enfants) {
      const d = cs(k).display;
      if (INLINE.has(d)) {
        // un enfant en ligne transformé (étiré, condensé…) devient son propre bloc de texte
        const tf = cs(k).transform;
        if (tf !== "none" && aTexte(k)) {
          const v = (tf.match(/matrix\(([^)]+)\)/) || [, "1,0,0,1"])[1].split(",").map(Number);
          if (Math.abs(v[0] - 1) > 1e-3 || Math.abs(v[1]) > 1e-3) return false;  // étiré / tourné : bloc à part ; simple biais : italique
        }
        continue;
      }
      if (cs(k).position === "absolute" || estFlex(d)) return false;
      for (const g of k.children) if (!INLINE.has(cs(g).display) && g.tagName !== "BR") return false;
      blocs.push(k);
    }
    if (blocs.length) {
      const sig = new Set(blocs.map(k => cs(k).fontSize + "|" + cs(k).fontFamily + "|" + cs(k).fontWeight));
      if (sig.size > 1) return false;
    }
    return true;
  }

  function blocTexte(el) {
    const segs = [];        // {t, st} | {br:true, para}
    let paraEl = el;
    const coupure = (pe) => {
      if (segs.length && !segs[segs.length - 1].br) segs.push({ br: true, para: paraEl });
      paraEl = pe;
    };
    const marche = (node) => {
      for (const n of node.childNodes) {
        if (n.nodeType === 3) {
          const ws = cs(n.parentElement).whiteSpace;
          let t = n.textContent;
          if (!ws.startsWith("pre")) t = t.replace(/[\n\t ]+/g, " ");
          if (t) segs.push({ t, st: style(n.parentElement) });
        } else if (n.nodeType === 1) {
          const s = cs(n);
          if (s.display === "none" || n.tagName === "I") continue;
          if (n.tagName === "BR") { coupure(paraEl); continue; }
          const blk = !INLINE.has(s.display);
          if (blk) coupure(n);
          const fsz = parseFloat(s.fontSize);
          if (!blk && parseFloat(s.marginLeft) > 0.15 * fsz) segs.push({ t: " ", st: style(n) });
          const av = cs(n, "::before").content;
          if (av && av !== "none" && av !== "normal") {
            try { segs.push({ t: JSON.parse(av), st: style(n, "::before") }); } catch (e) {}
          }
          marche(n);
          if (!blk && parseFloat(s.marginRight) > 0.15 * fsz) segs.push({ t: " ", st: style(n) });
          if (blk) coupure(el);
        }
      }
    };
    marche(el);
    if (segs.length && segs[segs.length - 1].br) segs.pop();
    // découpe en paragraphes, nettoyage des espaces en bord de paragraphe
    const paras = [[]]; const parasEl = [];
    for (const sg of segs) { if (sg.br) { parasEl.push(sg.para); paras.push([]); } else paras[paras.length - 1].push(sg); }
    parasEl.push(paraEl);
    let texte = ""; const runs = []; const pars = [];
    paras.forEach((ps, i) => {
      if (ps.length) { ps[0].t = ps[0].t.replace(/^ +/, ""); ps[ps.length - 1].t = ps[ps.length - 1].t.replace(/ +$/, ""); }
      const debut = texte.length;
      for (const sg of ps) { if (!sg.t) continue; runs.push({ de: texte.length, a: texte.length + sg.t.length, st: sg.st }); texte += sg.t; }
      if (i < paras.length - 1) { texte += "\r"; if (runs.length) runs[runs.length - 1].a += 1; }
      const pe = parasEl[i] || el, ps2 = cs(pe);
      const aligne = ps2.textAlign, dern = ps2.textAlignLast;
      pars.push({
        de: debut, a: texte.length,
        align: aligne === "justify" ? (dern === "justify" ? "justifyAll" : "justifyLeft")
             : (aligne.includes("center") ? "center" : (aligne === "right" || aligne === "end") ? "right" : "left"),
        retrait1: parseFloat(ps2.textIndent) || 0,
        retraitG: pe === el ? 0 : (parseFloat(ps2.marginLeft) || 0),
      });
    });
    const s = cs(el);
    const lh = s.lineHeight === "normal" ? parseFloat(s.fontSize) * 1.2 : parseFloat(s.lineHeight);
    const lignesMax = pars.length;
    const nowrap = s.whiteSpace.startsWith("nowrap") || s.whiteSpace === "pre";
    const justifie = pars.some(p => p.align.startsWith("justify"));
    const coupe = !nowrap && (s.writingMode.startsWith("vertical") ? el.clientWidth : el.clientHeight) > lignesMax * lh * 1.35;
    const it = base(el, "texte");
    const m = s.transform;
    let echX = 1, biais = 0;
    if (m && m !== "none") {
      const v = m.match(/matrix\(([^)]+)\)/)[1].split(",").map(Number);
      if (Math.abs(v[1]) < 1e-3) { echX = v[0]; biais = Math.atan(v[2]) * 180 / Math.PI; }
    }
    const vertical = s.writingMode.startsWith("vertical");
    Object.assign(it, {
      texte, runs, paras: pars, echelleX: echX, biais, vertical,
      boite: (coupe || justifie) ? { l: el.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight), h: vertical ? el.clientHeight : el.scrollHeight } : null,
    });
    it.nom = texte.replace(/\r/g, " ").slice(0, 40);
    if ((s.webkitBackgroundClip === "text" || s.backgroundClip === "text")) it.degradeTexte = degrade(s.backgroundImage);
    el.dataset.psid = it.id;
    items.push(it);
  }

  // ---------- Fonds de blocs HTML ----------
  function fondHtml(el) {
    const s = cs(el);
    if (el.classList.contains("rayures")) {
      const u = (v, unite) => parseFloat(v) * (unite === "mm" ? 96 / 25.4 : 1);
      const m = [...s.backgroundImage.matchAll(/(rgba?\([^)]+\))\s+([\d.]+)(px|mm)(?:\s+([\d.]+)(px|mm))?/g)];
      const it = base(el, "rayures");
      it.coins = coins(el);
      it.stops = m.map(x => ({ c: couleur(x[1]), de: u(x[2], x[3]), a: x[4] ? u(x[4], x[5]) : u(x[2], x[3]) }));
      it.nom = "rayures";
      items.push(it);
      return;
    }
    const dg = (s.webkitBackgroundClip === "text" || s.backgroundClip === "text") ? null : degrade(s.backgroundImage);
    if (dg) {
      const it = base(el, "degrade");
      it.degrade = dg;
      it.chemins = [coins(el).map(a => ({ a }))];
      it.nom = (it.groupe ? it.groupe + " – " : "") + "dégradé " + nomDe(el);
      items.push(it);
      return;
    }
    const bg = couleur(s.backgroundColor);
    if (bg && bg.a > 0) {
      const it = base(el, "forme");
      it.couleur = bg;
      it.chemins = [coins(el).map(a => ({ a }))];
      it.nom = (it.groupe ? it.groupe + " – " : "") + "fond " + nomDe(el);
      items.push(it);
    }
  }

  function parcours(el) {
    if (el.tagName === "svg") { svgFormes(el); return; }
    if (el.classList.contains("repere")) return;
    if (el.classList.contains("slot")) {
      const it = base(el, "image");
      it.chemins = [coins(el).map(a => ({ a }))];
      it.cle = it.calque.split(":")[1];
      items.push(it);
      return;
    }
    if (el.classList.contains("zone-reservee")) {
      const it = base(el, "zone");
      it.chemins = [coins(el).map(a => ({ a }))];
      it.cle = it.calque.split(":")[1];
      it.label = (el.dataset.label || it.cle).replace(/\n/g, " ");
      items.push(it);
      return;
    }
    fondHtml(el);
    if (estBlocTexte(el)) {
      for (const d of el.querySelectorAll("*")) if (INLINE.has(cs(d).display)) fondHtml(d);
      blocTexte(el);
      return;
    }
    for (const k of el.children) if (cs(k).display !== "none") parcours(k);
  }

  for (const k of page.children) parcours(k);
  const b = document.body.getBoundingClientRect();
  return { largeur: b.width, hauteur: b.height, items };
})()
