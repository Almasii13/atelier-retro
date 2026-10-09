#!/usr/bin/env node
/* Exécute un script Illustrator de frise (outils/frise.py) sur une imitation de l'API Illustrator,
   récupère les points d'ancrage / poignées réellement posés et les redessine en SVG :
     node outils/verifier_frise_ai.js frise_illustrator.jsx sortie.svg                                   */
const fs = require("fs"), path = require("path");
const src = fs.readFileSync(process.argv[2], "latin1").replace(/^#target.*$/m, "");
const items = []; let alerte = "";
const enumere = (...n) => Object.fromEntries(n.map((x, i) => [x, i + 1]));
Object.assign(global, { DocumentColorSpace: enumere("RGB"), CoordinateSystem: enumere("DOCUMENTCOORDINATESYSTEM"),
  PointType: enumere("SMOOTH", "CORNER"), StrokeCap: enumere("ROUNDENDCAP"), StrokeJoin: enumere("ROUNDENDJOIN") });
global.RGBColor = function () { this.red = this.green = this.blue = 0; };
global.IllustratorSaveOptions = function () {};
global.File = function (n) { return { fsName: n, parent: { fsName: path.dirname(n) }, name: path.basename(n) }; };
global.$ = { fileName: path.resolve(process.argv[2]) };
global.alert = (m) => { alerte = m; };
function conteneur() {
  const c = { pageItems: [] };
  c.pathItems = { add() {
    const p = { pathPoints: [], closed: false, filled: false, stroked: false, name: "" };
    p.setEntirePath = (pts) => {
      for (const a of pts) if (a.length !== 2 || a.some(v => typeof v !== "number" || !isFinite(v))) throw new Error("point invalide");
      p.pathPoints = pts.map(a => ({ anchor: a, leftDirection: a, rightDirection: a, pointType: 0 }));
    };
    items.push(p); c.pageItems.push(p); return p; } };
  c.groupItems = { add() { const g = conteneur(); c.pageItems.push(g); return g; } };
  return c;
}
let W, H;
const doc = { layers: [], artboards: null, saveAs() {} };
doc.layers.add = () => { const l = conteneur(); doc.layers.push(l); return l; };
global.app = { documents: { add(cs, w, h) { W = w; H = h; doc.artboards = [{ artboardRect: [0, h, w, 0] }]; doc.layers.add(); return doc; } } };
eval(src);
if (/erreur/.test(alerte)) { console.log(alerte); process.exit(1); }
const y = (v) => H - v;
const d = (p) => { const P = p.pathPoints; let s = `M ${P[0].anchor[0]},${y(P[0].anchor[1])} `;
  const n = p.closed ? P.length : P.length - 1;
  for (let i = 0; i < n; i++) { const a = P[i], b = P[(i + 1) % P.length];
    s += `C ${a.rightDirection[0]},${y(a.rightDirection[1])} ${b.leftDirection[0]},${y(b.leftDirection[1])} ${b.anchor[0]},${y(b.anchor[1])} `; }
  return s + (p.closed ? "Z" : ""); };
const corps = items.map(p => p.stroked
  ? `<path d="${d(p)}" fill="none" stroke="#000" stroke-width="${p.strokeWidth}" stroke-linecap="round"/>`
  : `<path d="${d(p)}" fill="#000"/>`).join("\n");
fs.writeFileSync(process.argv[3], `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">${corps}</svg>`);
console.log(`OK : ${items.filter(p => p.stroked).length} vagues, ${items.filter(p => p.filled).length} pétales, plan de travail ${(W / 72 * 25.4).toFixed(1)} × ${(H / 72 * 25.4).toFixed(1)} mm`);
console.log(alerte.split("\n")[0]);
