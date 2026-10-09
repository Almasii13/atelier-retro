#target illustrator
/*  ATELIER RETRO — construction automatique du document dans Illustrator
    ----------------------------------------------------------------------
    Utilisation : Illustrator > Fichier > Scripts > Autre script… > choisir ce fichier.
    Le script crée le document au format fini (plan de travail = coupe) avec le fond perdu réglé, puis :
      - des calques par plan de la maquette (fond, cadre, images, textes…) et des sous-calques par zone ;
      - des tracés vectoriels (couleurs RVB exactes, dégradés linéaires, tracés transparés : cadres, anneaux) ;
      - de vrais textes modifiables (police, corps, approche, échelles, alignement) calés sur l'encre de la maquette ;
      - pour chaque image : un groupe de découpe (colle ton image dans le groupe, sous le tracé de découpe) ;
      - les repères : zone de sécurité et plis (repères commentés), zones réservées dans un calque masqué.
    Polices : installe celles du dossier lib/fonts de l'atelier avant de lancer le script.
    Le fichier .ai est enregistré à côté de ce script.
*/
(function () {
 try {
  var SCENE = /*__SCENE__*/null;
  if (!confirm("Atelier Retro (Illustrator)\n\nConstruire le document « " + SCENE.titre + " » ?")) return;

  var K = 72 / 300;                       // px scène (300 ppi) -> points
  var erreurs = [];
  var R = SCENE.reperes;
  var B = R.coupe[0] * K;                 // fond perdu (pt)
  var LT = (R.coupe[1] - R.coupe[0]) * K; // largeur finie (pt)
  var HT = (R.coupe[3] - R.coupe[2]) * K; // hauteur finie (pt)

  // ---------- Polices ----------
  var manquantes = [], polices = {};
  for (var i = 0; i < SCENE.polices.length; i++) {
    try { polices[SCENE.polices[i]] = app.textFonts.getByName(SCENE.polices[i]); }
    catch (e) { manquantes.push(SCENE.polices[i]); }
  }
  if (manquantes.length) {
    if (!confirm("Polices non installées (Illustrator les remplacera) :\n\n  " + manquantes.join("\n  ") +
                 "\n\nInstalle-les depuis lib/fonts puis relance, ou clique OK pour continuer quand même.")) return;
  }

  // ---------- Document ----------
  var doc = null;
  try {
    var pr = new DocumentPreset();
    pr.width = LT; pr.height = HT; pr.colorMode = DocumentColorSpace.RGB; pr.units = RulerUnits.Millimeters;
    pr.title = SCENE.fichier; pr.numArtboards = 1;
    try { pr.documentBleedLink = true; pr.documentBleedOffset = [B, B, B, B]; } catch (eb) {}
    doc = app.documents.addDocument("Print", pr, false);
  } catch (e1) {
    doc = app.documents.add(DocumentColorSpace.RGB, LT, HT);
  }
  app.coordinateSystem = CoordinateSystem.DOCUMENTCOORDINATESYSTEM;
  var AB = doc.artboards[0].artboardRect;  // [gauche, haut, droite, bas] en coordonnées document (y vers le haut)

  // point scène (px, origine = coin du fond perdu, y vers le bas) -> point document
  function P(p) { return [AB[0] + p[0] * K - B, AB[1] - (p[1] * K - B)]; }

  function rvb(c) { var r = new RGBColor(); r.red = c[0]; r.green = c[1]; r.blue = c[2]; return r; }

  // ---------- Calques ----------
  var calques = {};
  var calqueInitial = doc.layers[0];
  function calqueDe(it) {
    var cle = it.calque, parent = calques[cle];
    if (!parent) {
      parent = doc.layers.add(); parent.name = it.calqueNom; calques[cle] = parent;
      if (cle.indexOf("zone:") === 0) parent.visible = false;
    }
    if (!it.groupe) return parent;
    var cle2 = cle + "/" + it.groupe, g = calques[cle2];
    if (!g) { g = parent.layers.add(); g.name = it.groupe; calques[cle2] = g; }
    return g;
  }

  // ---------- Tracés ----------
  function sousTrace(conteneur, pts) {
    var p = conteneur.pathItems.add(), tab = [];
    for (var k = 0; k < pts.length; k++) tab.push(P(pts[k].a));
    p.setEntirePath(tab); p.closed = true;
    return p;
  }
  // chemins : liste de sous-tracés ; xor : les suivants percent le premier (cadre, anneau)
  function trace(conteneur, chemins, nom, remplir) {
    var objet;
    if (chemins.length === 1) {
      objet = sousTrace(conteneur, chemins[0]); remplir(objet);
    } else {
      objet = conteneur.compoundPathItems.add();
      for (var c = 0; c < chemins.length; c++) {
        var s = sousTrace(objet, chemins[c]);
        s.evenodd = true; remplir(s);
      }
    }
    objet.name = nom;
    return objet;
  }
  function uni(c) { return function (p) { p.filled = true; p.fillColor = rvb(c); p.stroked = false; }; }

  // Dégradé linéaire : angle à la manière de Photoshop (0 = gauche->droite, 90 = bas->haut)
  var nDeg = 0;
  function nuancier(stops) {
    var g = doc.gradients.add(); g.name = "Atelier " + (++nDeg); g.type = GradientType.LINEAR;
    while (g.gradientStops.length < stops.length) g.gradientStops.add();
    for (var s = 0; s < stops.length; s++) {
      var gs = g.gradientStops[s];
      gs.rampPoint = Math.max(0, Math.min(100, stops[s].pos * 100));
      gs.midPoint = 50; gs.color = rvb(stops[s].c);
    }
    return g;
  }
  function degrade(stops, angle) {
    var g = nuancier(stops);
    return function (p) {
      var gc = new GradientColor(); gc.gradient = g;
      p.filled = true; p.stroked = false; p.fillColor = gc;
      // dégradé couvrant toute la boîte dans la direction voulue
      var b = p.geometricBounds, cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2;
      var a = angle * Math.PI / 180, w = b[2] - b[0], h = b[1] - b[3];
      var lg = Math.abs(w * Math.cos(a)) + Math.abs(h * Math.sin(a));
      try {
        var gc2 = new GradientColor(); gc2.gradient = g; gc2.angle = angle; gc2.length = lg;
        gc2.origin = [cx - Math.cos(a) * lg / 2, cy - Math.sin(a) * lg / 2];
        p.fillColor = gc2;
      } catch (e) { try { p.rotate(angle, false, false, true, false, Transformation.CENTER); } catch (e2) {} }
    };
  }
  function couleurMoyenne(stops) { return stops[Math.floor(stops.length / 2)].c; }

  // ---------- Textes ----------
  var JUST = { left: Justification.LEFT, center: Justification.CENTER, right: Justification.RIGHT,
               justifyLeft: Justification.FULLJUSTIFYLASTLINELEFT, justifyAll: Justification.FULLJUSTIFY };

  function boiteEncre(tf) {  // emprise réelle des glyphes (contours provisoires)
    var d = tf.duplicate(), o = d.createOutline(), b = o.geometricBounds;
    o.remove();
    return b;
  }
  function styler(ca, ru, couleur) {
    var f = polices[ru.police];
    if (f) ca.textFont = f;
    ca.size = ru.taille * K;
    ca.tracking = ru.approche;
    ca.horizontalScale = ru.echelleH;
    ca.verticalScale = (ru.echelleV && Math.abs(ru.echelleV - 100) > 0.5) ? ru.echelleV : 100;
    ca.baselineShift = (ru.decalage && Math.abs(ru.decalage) > 0.05) ? ru.decalage * K : 0;
    if (ru.interligne) { ca.autoLeading = false; ca.leading = ru.interligne * K; } else ca.autoLeading = true;
    ca.fillColor = rvb(couleur || ru.couleur);
    if (ru.gras) { ca.strokeColor = rvb(couleur || ru.couleur); ca.strokeWeight = ru.taille * K * 0.025; }  // gras simulé
  }
  function creerTexte(conteneur, it) {
    var tf;
    if (it.boite) {
      var r = conteneur.pathItems.rectangle(0, 0, it.boite.l * K, it.boite.h * K);
      tf = conteneur.textFrames.areaText(r);
    } else tf = conteneur.textFrames.add();
    if (it.vertical) { try { tf.orientation = TextOrientation.VERTICAL; } catch (e) {} }
    tf.contents = it.texte.replace(/\n/g, "\r");
    var n = tf.characters.length;
    for (var i = 0; i < it.runs.length; i++) {
      var ru = it.runs[i];
      if (ru.de === 0 && ru.a >= n) { styler(tf.textRange.characterAttributes, ru); continue; }
      for (var k = ru.de; k < Math.min(ru.a, n); k++) styler(tf.characters[k].characterAttributes, ru);
    }
    for (var j = 0; j < it.paras.length && j < tf.paragraphs.length; j++) {
      var pa = it.paras[j], pp = tf.paragraphs[j].paragraphAttributes;
      try { pp.justification = JUST[pa.align] || Justification.LEFT; } catch (e) {}
      try { pp.firstLineIndent = pa.retrait1 * K; pp.leftIndent = pa.retraitG * K; } catch (e) {}
    }
    var ital = false;
    for (var q = 0; q < it.runs.length; q++) if (it.runs[q].italique) ital = true;
    if (ital) {  // italique simulé : inclinaison de 12°
      var m = app.getIdentityMatrix(); m.mValueC = Math.tan(12 * Math.PI / 180);
      tf.transform(m);
    }
    return tf;
  }
  // Place le centre de l'encre sur le point voulu, puis tourne autour de ce point
  function placer(objet, centre, angle, ref) {
    var b = boiteEncre(ref || objet), c = P(centre);
    var dx = c[0] - (b[0] + b[2]) / 2, dy = c[1] - (b[1] + b[3]) / 2;
    objet.translate(dx, dy);
    if (Math.abs(angle) > 0.01) {
      objet.translate(-c[0], -c[1]);
      objet.rotate(-angle, true, true, true, true, Transformation.DOCUMENTORIGIN);
      objet.translate(c[0], c[1]);
    }
  }
  function ajusterApproche(tf, it) {  // largeur d'encre exacte des lignes simples
    if (it.vertical || it.boite || it.runs.length !== 1 || it.texte.indexOf("\r") >= 0 || it.texte.length < 3) return;
    var b = boiteEncre(tf), w = b[2] - b[0], cible = it.encre[0] * K;
    if (w > 0 && Math.abs(w - cible) / cible > 0.01) {
      var delta = (cible - w) / (it.texte.length - 1) / (it.runs[0].taille * K) * 1000;
      try { tf.textRange.characterAttributes.tracking = it.runs[0].approche + Math.round(delta); } catch (e) {}
    }
  }
  function texte(conteneur, it) {
    var tf = creerTexte(conteneur, it);
    tf.name = it.nom;
    ajusterApproche(tf, it);
    if (it.degradeTexte) {
      try {
        var g = nuancier(it.degradeTexte.stops), gc = new GradientColor(); gc.gradient = g;
        try { gc.angle = it.degradeTexte.angle; } catch (ea) {}  // dans le repère du texte (-90 = haut -> bas)
        tf.textRange.characterAttributes.fillColor = gc;
      } catch (e) { erreurs.push(it.nom + " (dégradé du texte remplacé par une couleur unie) : " + e.message);
                    tf.textRange.characterAttributes.fillColor = rvb(couleurMoyenne(it.degradeTexte.stops)); }
    }
    var objet = tf;
    if (it.contour) {
      var ct = it.contour;
      if (ct.centre || it.contourSeul) {
        tf.textRange.characterAttributes.strokeColor = rvb(ct.couleur);
        tf.textRange.characterAttributes.strokeWeight = ct.taille * K;
        if (it.contourSeul) tf.textRange.characterAttributes.fillColor = new NoColor();
      } else {  // contour extérieur : copie dessous, filet double épaisseur
        var dessous = tf.duplicate(); dessous.name = it.nom + " (contour)";
        dessous.textRange.characterAttributes.strokeColor = rvb(ct.couleur);
        dessous.textRange.characterAttributes.strokeWeight = 2 * ct.taille * K;
        dessous.textRange.characterAttributes.fillColor = rvb(ct.couleur);
        dessous.move(tf, ElementPlacement.PLACEAFTER);
        var gr = conteneur.groupItems.add(); gr.name = it.nom;
        dessous.move(gr, ElementPlacement.PLACEATEND); tf.move(gr, ElementPlacement.PLACEATBEGINNING);
        objet = gr;
      }
    }
    placer(objet, it.centre, it.angle, tf);
    if (it.masque) {
      try {
        var gm = conteneur.groupItems.add(); gm.name = it.nom + " (masque)";
        objet.move(gm, ElementPlacement.PLACEATEND);
        var mp = sousTrace(gm, (function () { var t = []; for (var u = 0; u < it.masque.length; u++) t.push({ a: it.masque[u] }); return t; })());
        mp.move(gm, ElementPlacement.PLACEATBEGINNING); mp.clipping = true; gm.clipped = true;
      } catch (e) { erreurs.push(it.nom + " (masque) : " + e.message); }
    }
    return tf;
  }
  // ---------- Textures incrustées (motif bois…) ----------
  // PNG embarqué en base64 : écrit dans le dossier temporaire, importé (incorporé), puis masqué par une
  // copie du texte (masque d'écrêtage à texte vivant). Le texte d'origine reste dessous, modifiable.
  function b64bin(s) {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = [], b = 0, n = 0;
    for (var i = 0; i < s.length; i++) {
      var c = t.indexOf(s.charAt(i));
      if (c < 0) continue;
      b = ((b << 6) | c) & 0xFFFFFF; n += 6;
      if (n >= 8) { n -= 8; o.push(String.fromCharCode((b >> n) & 255)); }
    }
    return o.join("");
  }
  var fichiersMotifs = {};
  function fichierMotif(cle) {
    if (fichiersMotifs[cle]) return fichiersMotifs[cle];
    var f = new File(Folder.temp.fsName + "/atelier_motif_" + cle + ".png");
    f.encoding = "BINARY"; f.open("w"); f.write(b64bin(SCENE.motifs[cle].b64)); f.close();
    fichiersMotifs[cle] = f;
    return f;
  }
  function poserMotif(conteneur, tf, it) {
    var m = SCENE.motifs[it.motif];
    var img = conteneur.placedItems.add();
    img.file = fichierMotif(it.motif);
    img.width = m.l * K; img.height = m.h * K;
    var c = P(it.centre), b = img.geometricBounds;
    img.translate(c[0] - (b[0] + b[2]) / 2, c[1] - (b[1] + b[3]) / 2);
    try { img.embed(); img = conteneur.pageItems[0]; } catch (e0) {}  // incorporée : devient une image (RasterItem) au même rang
    var masque = tf.duplicate();
    masque.move(img, ElementPlacement.PLACEBEFORE);  // au-dessus de l'image
    doc.selection = null;
    masque.selected = true; img.selected = true;
    app.executeMenuCommand("makeMask");  // masque d'écrêtage : le texte copié découpe la texture
    var g = doc.selection[0];
    if (g) g.name = "Motif " + it.motif + " (incrust\u00e9 dans \u00ab " + it.nom + " \u00bb)";
    doc.selection = null;
    return g;
  }

  function arc(conteneur, it) {
    var sc = conteneur.layers.add(); sc.name = it.nom;
    for (var i = 0; i < it.car.length; i++) {
      var c = it.car[i];
      if (c.c === " ") continue;
      var tf = creerTexte(sc, { texte: c.c, runs: [{ de: 0, a: 1, police: it.police, taille: it.taille, approche: 0, echelleH: 100,
                                   italique: it.italique, gras: false, interligne: null, couleur: it.couleur }],
                                paras: [{ de: 0, a: 1, align: "left", retrait1: 0, retraitG: 0 }] });
      tf.name = c.c;
      placer(tf, c.centre, c.angle);
    }
  }

  // ---------- Construction ----------
  for (var n = 0; n < SCENE.items.length; n++) {
    var it = SCENE.items[n];
    try {
      var cont = calqueDe(it);
      if (it.type === "forme") trace(cont, it.chemins, it.nom, uni(it.couleur));
      else if (it.type === "degrade") {
        try { trace(cont, it.chemins, it.nom, degrade(it.stops, it.angle)); }
        catch (e) { erreurs.push(it.nom + " (dégradé remplacé par une couleur unie) : " + e.message);
                    trace(cont, it.chemins, it.nom, uni(couleurMoyenne(it.stops))); }
      }
      else if (it.type === "texte") {
        var tfx = texte(cont, it);
        if (it.motif && SCENE.motifs && SCENE.motifs[it.motif]) {
          try { poserMotif(cont, tfx, it); } catch (e) { erreurs.push(it.nom + " (motif " + it.motif + ") : " + e.message); }
        }
      }
      else if (it.type === "arc") arc(cont, it);
      else if (it.type === "image") {
        var g = cont.groupItems.add(); g.name = it.calqueNom + " : colle ton image dans ce groupe";
        var fond = trace(g, it.chemins, "Emplacement (à remplacer)", uni([128, 128, 128]));
        if (it.detoure) fond.opacity = 0;  // image détourée : la découpe ne se voit pas
        var decoupe = trace(g, it.chemins, "Découpe – " + it.calqueNom, uni([128, 128, 128]));
        decoupe.clipping = true; g.clipped = true;
      }
      else if (it.type === "zone") {
        var z = trace(cont, it.chemins, "Zone – " + it.label, uni([0, 160, 233])); z.opacity = 30;
      }
    } catch (e) { erreurs.push((it.nom || it.type) + " : " + e.message); }
  }

  // ---------- Repères (zone de sécurité, plis) ----------
  try {
    var rg = doc.layers.add(); rg.name = "Repères";
    var s = R.secu;  // [gauche, droite, haut, bas] en px scène
    var a = P([s[0], s[2]]), b = P([s[1], s[3]]);
    var sec = rg.pathItems.rectangle(a[1], a[0], b[0] - a[0], a[1] - b[1]);
    sec.name = "Zone de sécurité"; sec.filled = false; sec.guides = true;
    for (var pl = 0; pl < SCENE.plis.length; pl++) {
      var h = P([SCENE.plis[pl], 0]), bas = P([SCENE.plis[pl], SCENE.hauteur]);
      var l = rg.pathItems.add(); l.setEntirePath([h, bas]); l.name = "Pli"; l.guides = true;
    }
  } catch (e) { erreurs.push("Repères : " + e.message); }

  // calque vide créé avec le document
  try { if (calqueInitial.pageItems.length === 0 && calqueInitial.layers.length === 0) calqueInitial.remove(); } catch (e) {}

  var fichier = new File(File($.fileName).parent.fsName + "/" + File($.fileName).name.replace(/\.jsx$/i, "").replace(/_illustrator$/i, "") + ".ai");
  try { var o = new IllustratorSaveOptions(); o.pdfCompatible = true; doc.saveAs(fichier, o); }
  catch (e) { erreurs.push("Enregistrement : " + e.message); }

  alert("Atelier Retro — document Illustrator construit.\n\n" +
        "Fichier : " + fichier.fsName + "\n" +
        "Plan de travail = format fini, fond perdu " + Math.round(B / 72 * 25.4 * 10) / 10 + " mm.\n" +
        (manquantes.length ? "\nPolices remplacées : " + manquantes.join(", ") + "\n" : "") +
        (erreurs.length ? "\nÉléments non créés (" + erreurs.length + ") :\n- " + erreurs.slice(0, 12).join("\n- ") : "\nAucune erreur."));

 } catch (err) {
  alert("Atelier Retro — erreur\n\nLigne " + err.line + " : " + err.message +
        "\n\nEnvoie une capture de ce message a Claude.");
 }
})();
