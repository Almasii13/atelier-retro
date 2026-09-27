// Imitation minimale de l'API Photoshop (ExtendScript) pour exécuter le script généré
// et détecter les erreurs de logique : appels inconnus, arguments manquants, ordre des calques.
const fs = require("fs");
const src = fs.readFileSync(process.argv[2], "utf8").replace(/^#target[^\n]*\n/, "");
const journal = [];
const calques = [];
let actif = null;
const ids = {};
global.charIDToTypeID = (s) => { if (s.length !== 4) throw new Error("charID invalide : '" + s + "'"); return "c:" + s; };
global.stringIDToTypeID = (s) => "s:" + s;
class Desc { constructor() { this.v = {}; }
  put(k, v) { if (v === undefined || (typeof v === "number" && isNaN(v))) throw new Error("valeur invalide pour " + k); this.v[k] = v; }
  putString(k, v) { if (typeof v !== "string") throw new Error("putString " + k); this.put(k, v); }
  putInteger(k, v) { if (!Number.isInteger(v)) throw new Error("putInteger non entier " + k + "=" + v); this.put(k, v); }
  putDouble(k, v) { this.put(k, +v); } putBoolean(k, v) { this.put(k, !!v); }
  putUnitDouble(k, u, v) { this.put(k, +v); } putEnumerated(k, t, v) { this.put(k, v); }
  putObject(k, c, v) { this.put(k, v); } putList(k, v) { this.put(k, v); } putReference(k, v) { this.put(k, v); } }
global.ActionDescriptor = Desc;
global.ActionList = class { constructor() { this.l = []; } putObject(c, v) { this.l.push(v); } };
global.ActionReference = class { putClass() {} putProperty() {} putEnumerated() {} };
global.DialogModes = { NO: 3 }; global.Units = { PIXELS: 1 }; global.TypeUnits = { POINTS: 1 };
global.NewDocumentMode = { RGB: 1 }; global.DocumentFill = { WHITE: 1 };
global.ElementPlacement = { PLACEATBEGINNING: 1, INSIDE: 2, PLACEBEFORE: 3 };
global.AnchorPosition = { MIDDLECENTER: 1 }; global.PointKind = { CORNERPOINT: 1 }; global.ShapeOperation = { SHAPEADD: 1 };
global.SelectionType = { REPLACE: 1 }; global.Direction = { VERTICAL: 1, HORIZONTAL: 2 }; global.ResampleMethod = { NONE: 0 };
global.Extension = { LOWERCASE: 1 };
global.PathPointInfo = class {}; global.SubPathInfo = class {};
global.SolidColor = class { constructor() { this.rgb = {}; } };
global.PhotoshopSaveOptions = class {};
global.$ = { fileName: "/tmp/flyer_photoshop.jsx", global };
global.File = function (p) { const o = { fsName: p, name: p.split("/").pop(), parent: { fsName: p.split("/").slice(0, -1).join("/") } }; return o; };
global.confirm = () => true;
global.alert = (m) => journal.push("ALERT\n" + m);
function nouveauCalque(type, nom) {
  const l = { type, name: nom || type, parent: null, bounds: [100, 100, 300, 140], visible: true, opacity: 100, grouped: false,
    textItem: { tracking: 0 },
    move(c, p) { if (!c) throw new Error("move sans conteneur"); this.parent = c; },
    translate(dx, dy) { if (isNaN(dx) || isNaN(dy)) throw new Error("translate NaN"); this.bounds = this.bounds.map((v, i) => v + (i % 2 ? dy : dx)); },
    rotate(a) { if (isNaN(a)) throw new Error("rotate NaN"); this.angle = a; } };
  calques.push(l); actif = l; return l;
}
global.executeAction = (id, d) => {
  if (id === "c:Mk  ") {
    const u = d.v["c:Usng"];
    if (u && u.v["s:textKey"] !== undefined) {
      const t = u.v["s:textKey"], runs = u.v["s:textStyleRange"].l, paras = u.v["s:paragraphStyleRange"].l;
      let fin = 0;
      for (const r of runs) { if (r.v["s:from"] !== fin) throw new Error("runs non contigus dans «" + t.slice(0, 20) + "»"); fin = r.v["s:to"]; }
      if (fin !== t.length) throw new Error("runs ne couvrent pas le texte «" + t.slice(0, 20) + "» " + fin + "/" + t.length);
      for (const p of paras) if (p.v["s:to"] > t.length + 1) throw new Error("paragraphe hors texte");
      nouveauCalque("texte", t.slice(0, 20));
    } else nouveauCalque("forme");
  } else if (id === "c:setd") { if (!actif) throw new Error("setd sans calque"); actif.effet = true; }
};
const doc = { layerSets: { add() { const g = nouveauCalque("groupe"); return g; } },
  artLayers: { add() { return nouveauCalque("pixels"); } },
  pathItems: { add(n, subs) { if (!subs.length) throw new Error("chemin vide"); for (const s of subs) for (const p of s.entireSubPath) if (p.anchor.some(isNaN)) throw new Error("point NaN");
      return { select() {}, makeSelection() {}, remove() {} }; } },
  guides: { add(d, v) { if (isNaN(v)) throw new Error("repère NaN"); } },
  selection: { deselect() {} },
  get activeLayer() { return actif; },
  suspendHistory(n, code) { eval(code); },
  resizeImage() {}, saveAs() {} };
global.app = { fonts: Object.assign([{ postScriptName: "ArchivoBlack-Regular" }], {}), preferences: {}, displayDialogs: 0,
  documents: { add(w, h, r) { if (!(w > 0 && h > 0)) throw new Error("taille doc"); return doc; } } };
eval(src);
const par = {}; for (const l of calques) par[l.type] = (par[l.type] || 0) + 1;
console.log("Calques créés :", JSON.stringify(par));
console.log("Groupes :", calques.filter(l => l.type === "groupe").map(g => (g.parent && g.parent.name ? g.parent.name + " / " : "") + g.name).join(" | "));
console.log("Écrêtés :", calques.filter(l => l.grouped).map(l => l.name).join(", "));
console.log("Avec contour :", calques.filter(l => l.effet).map(l => l.name).join(", "));
console.log(journal.join("\n"));
