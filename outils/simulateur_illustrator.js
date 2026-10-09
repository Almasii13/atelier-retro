#!/usr/bin/env node
/* Simulateur minimal de l'API Illustrator (ExtendScript) : exécute un <nom>_illustrator.jsx sans Illustrator
   pour attraper les erreurs d'exécution (propriétés inconnues, appels mal formés, exceptions) et compter
   ce qui est créé. Les objets refusent toute propriété qu'Illustrator n'a pas (Proxy strict).

     node outils/simulateur_illustrator.js creations/…/carte_illustrator.jsx [--svg sortie.svg]
*/
const fs = require("fs");
const path = require("path");
const fichier = process.argv[2];
const iSvg = process.argv.indexOf("--svg");
const sortieSvg = iSvg > 0 ? process.argv[iSvg + 1] : null;
let src = fs.readFileSync(fichier, "latin1").replace(/^#target.*$/m, "");

const journal = { calques: 0, traces: 0, composes: 0, textes: 0, groupes: 0, degrades: 0, decoupes: 0, alertes: [] };
const dessin = [];  // pour l'aperçu SVG

function strict(obj, nom, props) {
  const ok = new Set(props);
  const px = new Proxy(obj, {
    set(t, k, v) { if (!ok.has(k) && !(k in t) && !String(k).startsWith("_")) throw new Error(`${nom}.${String(k)} : propriété inconnue d'Illustrator`); t[k] = v; return true; },
    get(t, k) { if (k in t || typeof k === "symbol" || String(k).startsWith("_") || k === "toJSON" || k === "then") return t[k]; throw new Error(`${nom}.${String(k)} : propriété inconnue d'Illustrator`); },
  });
  if (obj && typeof obj === "object" && !Array.isArray(obj)) Object.defineProperty(obj, "_moi", { value: px, writable: true, enumerable: false });
  return px;
}
const enumere = (...n) => Object.fromEntries(n.map((x, i) => [x, i + 1]));
Object.assign(global, {
  DocumentColorSpace: enumere("RGB", "CMYK"), RulerUnits: enumere("Millimeters", "Points"),
  CoordinateSystem: enumere("DOCUMENTCOORDINATESYSTEM", "ARTBOARDCOORDINATESYSTEM"),
  GradientType: enumere("LINEAR", "RADIAL"), Justification: enumere("LEFT", "CENTER", "RIGHT", "FULLJUSTIFYLASTLINELEFT", "FULLJUSTIFY"),
  TextOrientation: enumere("HORIZONTAL", "VERTICAL"), Transformation: enumere("CENTER", "DOCUMENTORIGIN"),
  ElementPlacement: enumere("PLACEATBEGINNING", "PLACEATEND", "PLACEBEFORE", "PLACEAFTER", "INSIDE"),
});
class RGBColor { constructor() { this.typename = "RGBColor"; this.red = 0; this.green = 0; this.blue = 0; return strict(this, "RGBColor", []); } }
class NoColor { constructor() { this.typename = "NoColor"; return strict(this, "NoColor", []); } }
class GradientColor { constructor() { this.typename = "GradientColor"; this.gradient = null; this.angle = 0; this.length = 0; this.origin = [0, 0]; return strict(this, "GradientColor", []); } }
class DocumentPreset { constructor() { Object.assign(this, { width: 0, height: 0, colorMode: 1, units: 1, title: "", numArtboards: 1, documentBleedLink: false, documentBleedOffset: [0, 0, 0, 0] }); return strict(this, "DocumentPreset", []); } }
class IllustratorSaveOptions { constructor() { this.pdfCompatible = true; return strict(this, "IllustratorSaveOptions", []); } }
Object.assign(global, { RGBColor, NoColor, GradientColor, DocumentPreset, IllustratorSaveOptions });

const matIdent = () => strict({ mValueA: 1, mValueB: 0, mValueC: 0, mValueD: 1, mValueTX: 0, mValueTY: 0 }, "Matrix", []);

// ---------- éléments ----------
function bornes(pts) {
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  return [Math.min(...xs), Math.max(...ys), Math.max(...xs), Math.min(...ys)];
}
function transforme(objet, f) { if (objet._pts) objet._pts = objet._pts.map(f); if (objet._enfants) objet._enfants.forEach(e => transforme(e, f)); }
function baseElement(type, parent) {
  const o = {
    typename: type, name: "", opacity: 100, hidden: false, _parent: parent,
    translate(dx, dy) { transforme(this, p => [p[0] + dx, p[1] + dy]); },
    rotate(a, p1, p2, p3, p4, autour) {
      if (typeof a !== "number" || isNaN(a)) throw new Error("rotate : angle invalide");
      if (autour !== Transformation.DOCUMENTORIGIN && autour !== Transformation.CENTER && autour !== undefined) throw new Error("rotate : point de rotation invalide");
      const r = a * Math.PI / 180, c = Math.cos(r), s = Math.sin(r);
      transforme(this, p => [p[0] * c - p[1] * s, p[0] * s + p[1] * c]);
    },
    transform(m) { transforme(this, p => [p[0] * m.mValueA + p[1] * m.mValueC + m.mValueTX, p[0] * m.mValueB + p[1] * m.mValueD + m.mValueTY]); },
    move(cible, pos) {
      if (!cible || !pos) throw new Error("move : arguments invalides");
      const ancien = this._parent; const i = ancien && ancien._enfants ? ancien._enfants.indexOf(this) : -1; if (i >= 0) ancien._enfants.splice(i, 1);
      const dest = (pos === ElementPlacement.PLACEAFTER || pos === ElementPlacement.PLACEBEFORE) ? cible._parent : cible;
      dest._enfants.push(this); this._parent = dest;
    },
    remove() { const p = this._parent; const i = p && p._enfants ? p._enfants.indexOf(this) : -1; if (i >= 0) p._enfants.splice(i, 1); },
    get geometricBounds() { return bornes(tousPoints(this)); },
  };
  Object.defineProperty(o, "selected", { get() { return selection.includes(o._moi || o); },
    set(v) { const moi = o._moi || o; selection = selection.filter(x => x !== moi); if (v) selection.push(moi); } });
  return o;
}
function tousPoints(o) { let r = o._pts ? [...o._pts] : []; (o._enfants || []).forEach(e => r = r.concat(tousPoints(e))); if (!r.length) throw new Error("bornes d'un objet vide"); return r; }

function cheminItem(parent) {
  const o = baseElement("PathItem", parent);
  Object.assign(o, { filled: false, stroked: true, fillColor: null, strokeColor: null, strokeWidth: 1, closed: false, evenodd: false, clipping: false, guides: false, _pts: [] });
  o.setEntirePath = function (pts) {
    if (!Array.isArray(pts) || pts.some(p => p.length !== 2 || p.some(v => typeof v !== "number" || isNaN(v)))) throw new Error("setEntirePath : points invalides");
    this._pts = pts.map(p => [...p]); journal.traces++;
  };
  return o;
}
function conteneur(o) {
  o._enfants = [];
  const ajoute = (e) => { o._enfants.push(e); return e; };
  o.pathItems = strict({
    add: () => ajoute(strict(cheminItem(o), "PathItem", [])),
    rectangle: (top, left, w, h) => { const p = strict(cheminItem(o), "PathItem", []); p.setEntirePath([[left, top], [left + w, top], [left + w, top - h], [left, top - h]]); p.closed = true; return ajoute(p); },
  }, "PathItems", []);
  o.compoundPathItems = strict({ add: () => { journal.composes++; const c = conteneur(baseElement("CompoundPathItem", o)); return ajoute(strict(c, "CompoundPathItem", [])); } }, "CompoundPathItems", []);
  o.groupItems = strict({ add: () => { journal.groupes++; const g = conteneur(baseElement("GroupItem", o)); g.clipped = false; return ajoute(strict(g, "GroupItem", [])); } }, "GroupItems", []);
  o.textFrames = strict({
    add: () => ajoute(cadreTexte(o)),
    areaText: (chemin) => { if (!chemin || chemin.typename !== "PathItem") throw new Error("areaText : tracé attendu"); chemin.remove(); return ajoute(cadreTexte(o)); },
  }, "TextFrames", []);
  o.placedItems = strict({ add: () => {
    const im = baseElement("PlacedItem", o); im._pts = [[0, 0], [10, -10]]; im.file = null; im.selected = false;
    Object.defineProperty(im, "width", { get: () => im._pts[1][0] - im._pts[0][0], set: (v) => { if (!(v > 0)) throw new Error("largeur image"); im._pts[1][0] = im._pts[0][0] + v; } });
    Object.defineProperty(im, "height", { get: () => im._pts[0][1] - im._pts[1][1], set: (v) => { if (!(v > 0)) throw new Error("hauteur image"); im._pts[1][1] = im._pts[0][1] - v; } });
    im.embed = function () {
      if (!this.file || !fichiersEcrits[this.file.fsName]) throw new Error("image : fichier introuvable");
      const b = fichiersEcrits[this.file.fsName]; if (b.slice(1, 4) !== "PNG") throw new Error("PNG invalide après décodage base64");
      this.typename = "RasterItem"; journal.images = (journal.images || 0) + 1;
    };
    return ajoute(strict(im, "PlacedItem", []));
  } }, "PlacedItems", []);
  // Illustrator : pageItems[0] = l'objet du dessus
  Object.defineProperty(o, "pageItems", { get() { return o._enfants.filter(e => e.typename !== "Layer").slice().reverse(); } });
  return o;
}
function attributs() {
  return strict({ textFont: null, size: 12, tracking: 0, horizontalScale: 100, verticalScale: 100, baselineShift: 0,
                  autoLeading: true, leading: 14, fillColor: null, strokeColor: null, strokeWeight: 0 }, "CharacterAttributes", []);
}
function cadreTexte(parent) {
  journal.textes++;
  const o = baseElement("TextFrame", parent);
  let contenu = "";
  const attrs = [];
  o._pts = [[0, 0]];
  Object.defineProperty(o, "contents", { get: () => contenu, set: (v) => { if (typeof v !== "string") throw new Error("contents : texte attendu"); contenu = v; attrs.length = 0; for (let i = 0; i < v.length; i++) attrs.push(attributs()); } , enumerable: true });
  o.orientation = TextOrientation.HORIZONTAL;
  Object.defineProperty(o, "characters", { get: () => { const l = attrs.map(a => ({ characterAttributes: a })); return l; } });
  o.textRange = { get characterAttributes() {  // applique à tous les caractères
    const proxy = {}; const cles = Object.keys(attributs());
    cles.forEach(k => Object.defineProperty(proxy, k, { get: () => attrs.length ? attrs[0][k] : undefined, set: (v) => attrs.forEach(a => { a[k] = v; }) }));
    return strict(proxy, "CharacterAttributes", []);
  } };
  Object.defineProperty(o, "paragraphs", { get: () => contenu.split("\r").map(() => ({ paragraphAttributes: strict({ justification: 1, firstLineIndent: 0, leftIndent: 0 }, "ParagraphAttributes", []) })) });
  o.duplicate = function () { const d = cadreTexte(parent); journal.textes--; d.contents = contenu; attrs.forEach((a, i) => Object.assign(d._attrs[i], a)); d._pts = this._pts.map(p => [...p]); parent._enfants.push(d); return d; };
  o._attrs = attrs;
  o.createOutline = function () {
    // encre approximative : largeur ~ 0,6 em par caractère × échelle horizontale, hauteur ~ 0,72 em, au-dessus du point d'ancrage
    const a = attrs[0] || attributs();
    if (!a.size || isNaN(a.size)) throw new Error("taille de texte invalide");
    const [x, y] = this._pts[0];
    const w = contenu.length * a.size * 0.6 * a.horizontalScale / 100, h = a.size * 0.72;
    const g = conteneur(baseElement("GroupItem", parent)); g._pts = [[x, y], [x + w, y + h]];
    this.remove();
    return g;
  };
  return strict(o, "TextFrame", ["_attrs"]);
}
function calque(parent) {
  journal.calques++;
  const l = conteneur(baseElement("Layer", parent));
  l.visible = true; l.locked = false;
  l.layers = strict({ add: () => { const c = calque(l); l._enfants.push(c); return c; } }, "Layers", []);
  Object.defineProperty(l.layers, "length", { get: () => l._enfants.filter(e => e.typename === "Layer").length });
  return strict(l, "Layer", []);
}
function documentIA(w, h) {
  const d = { _enfants: [] };
  const racine = d;
  d.layers = [];
  d.layers.add = () => { const l = calque(racine); d.layers.unshift(l); return l; };
  d.layers.add();
  d.artboards = [strict({ artboardRect: [0, h, w, 0] }, "Artboard", [])];
  d.gradients = { add: () => { journal.degrades++; const g = { name: "", type: 1, gradientStops: [] };
    const stop = () => strict({ rampPoint: 0, midPoint: 50, color: null, opacity: 100 }, "GradientStop", []);
    g.gradientStops.push(stop(), stop()); g.gradientStops.add = () => { const s = stop(); g.gradientStops.push(s); return s; };
    return strict(g, "Gradient", []); } };
  Object.defineProperty(d, "selection", { get: () => selection.length ? selection : null, set: (v) => { selection = v ? [].concat(v) : []; } });
  d.saveAs = (f, o) => { if (!(o instanceof Object)) throw new Error("saveAs"); journal.fichier = f.fsName; };
  return strict(d, "Document", []);
}
global.app = {
  documents: { addDocument: (p, pr) => { if (!pr.width || !pr.height) throw new Error("preset sans format"); return (app.activeDocument = documentIA(pr.width, pr.height)); },
               add: (cs, w, h) => (app.activeDocument = documentIA(w, h)) },
  textFonts: { getByName: (n) => { if (!n) throw new Error("police"); return { name: n }; } },
  coordinateSystem: 1,
  getIdentityMatrix: matIdent,
};
global.$ = { fileName: path.resolve(fichier) };
const fichiersEcrits = {};
global.File = function (n) { return { fsName: n, parent: { fsName: path.dirname(n) }, name: path.basename(n), encoding: "", _c: "", _o: false,
  open() { this._o = true; return true; }, write(t) { if (!this._o) throw new Error("écriture sans open"); this._c += t; return true; },
  close() { this._o = false; fichiersEcrits[this.fsName] = this._c; return true; } }; };
global.Folder = { temp: { fsName: "/tmp" } };
let selection = [];
app.executeMenuCommand = (cmd) => {
  if (cmd !== "makeMask") throw new Error("commande inconnue " + cmd);
  const sel = selection.filter(Boolean);
  if (sel.length !== 2) throw new Error("makeMask : 2 objets attendus, " + sel.length + " sélectionnés");
  const parent = sel[0]._parent;
  if (sel[1]._parent !== parent) throw new Error("makeMask : objets dans des conteneurs différents");
  const ordre = parent._enfants;
  const haut = sel.reduce((a, b) => ordre.indexOf(a) > ordre.indexOf(b) ? a : b);
  if (!["TextFrame", "PathItem", "CompoundPathItem"].includes(haut.typename)) throw new Error("makeMask : l'objet du dessus doit être un tracé ou un texte (" + haut.typename + ")");
  const g = parent.groupItems.add(); g.clipped = true; journal.decoupesTexte = (journal.decoupesTexte || 0) + 1;
  const bas = sel.find(x => x !== haut);
  bas.move(g, ElementPlacement.PLACEATEND); haut.move(g, ElementPlacement.PLACEATEND);
  selection = [g];
};
global.confirm = () => true;
global.alert = (m) => journal.alertes.push(m);

eval(src);

const doc = app.activeDocument;
function parcourir(o, f) { f(o); (o._enfants || []).forEach(e => parcourir(e, f)); }
let decoupes = 0, sansCouleur = 0;
[...doc.layers].reverse().forEach(l => parcourir(l, e => {
  if (e.typename === "CompoundPathItem" && sortieSvg) dessin.push({ composes: e._enfants, fillColor: e._enfants[0] && e._enfants[0].fillColor, opacity: e.opacity });
  if (e.typename === "PathItem") {
    if (e.clipping) decoupes++;
    if (e.filled && !e.fillColor) sansCouleur++;
    if (sortieSvg && e._pts.length > 2 && !e.guides && !e.clipping && e._parent.typename !== "CompoundPathItem") dessin.push(e);
  }
}));
console.log(journal.alertes.join("\n---\n"));
console.log(`images incorporées ${journal.images || 0}, masques d'écrêtage à texte ${journal.decoupesTexte || 0}`);
console.log(`\ncalques ${journal.calques}, tracés ${journal.traces}, tracés composés ${journal.composes}, groupes ${journal.groupes}, textes ${journal.textes}, dégradés ${journal.degrades}, découpes ${decoupes}`);
if (sansCouleur) console.log(`ATTENTION : ${sansCouleur} tracés remplis sans couleur`);
if (sortieSvg) {
  const [x0, y1, x1, y0] = doc.artboards[0].artboardRect;
  const coul = (c) => { if (c && c.typename === "GradientColor") { const st = c.gradient.gradientStops; c = st[Math.floor(st.length / 2)].color; } return c && "red" in c ? `rgb(${c.red},${c.green},${c.blue})` : "#888"; };
  const d = (pts) => `M ${pts.map(p => `${p[0]},${-p[1]}`).join(" L ")} Z`;
  const corps = dessin.map(e => `<path d="${"composes" in e && e.composes ? e.composes.map(c => d(c._pts)).join(" ") : d(e._pts)}" fill-rule="evenodd" fill="${coul(e.fillColor)}" fill-opacity="${e.opacity / 100}"/>`).join("");
  fs.writeFileSync(sortieSvg, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x0 - 10} ${-y1 - 10} ${x1 - x0 + 20} ${y1 - y0 + 20}">${corps}</svg>`);
}
if (process.argv.includes("--arbre")) {
  const aff = (o, ind) => { (o._enfants || []).forEach(e => { console.log(ind + e.typename + " « " + e.name + " »" + (e._pts && e._pts.length ? ` ${e._pts.length} pts` : "")); if (e.typename !== "CompoundPathItem") aff(e, ind + "  "); }); };
  [...doc.layers].reverse().forEach(l => { console.log("Layer « " + l.name + " »"); aff(l, "  "); });
}
