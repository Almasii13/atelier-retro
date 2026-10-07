/* ATELIER RETRO — ajustements automatiques exécutés avant l'export.
   data-fit           : réduit (ou agrandit jusqu'à data-fit-max, en mm) la taille
                        du texte pour qu'il tienne exactement dans sa boîte.
   data-fit-min       : taille minimale en mm (défaut 1).
   Quand tout est prêt : document.body.dataset.pret = "1". */
(async function () {
  const MM = 96 / 25.4;
  await document.fonts.ready;

  // Calage automatique (lib/calage.py) : corps, étirement horizontal et décalage par élément, pour que
  // l'encre de chaque texte tombe exactement sur les cotes relevées sur la référence.
  const CAL = window.ATELIER_CALAGE || {};
  for (const [sel, c] of Object.entries(CAL)) {
    for (const el of document.querySelectorAll(sel)) {
      const cs = getComputedStyle(el);
      el.style.fontSize = parseFloat(cs.fontSize) * (c.fs || 1) + "px";
      const ls = parseFloat(cs.letterSpacing);
      if (!isNaN(ls)) el.style.letterSpacing = ls * (c.fs || 1) + "px";
      const lh = parseFloat(cs.lineHeight);
      if (!isNaN(lh)) el.style.lineHeight = lh * (c.fs || 1) + "px";
      // Déplacement par translate (et non left/top) : le texte n'est pas aligné sur la grille des pixels CSS
      // (0,26 mm), le calage reste au centième de millimètre.
      const t = cs.transform === "none" ? "" : cs.transform;
      const sx = (c.sx && Math.abs(c.sx - 1) > 1e-4) ? ` scaleX(${c.sx})` : "";
      el.style.transformOrigin = "0 0";
      el.style.transform = `translate(${(c.dx || 0) * MM}px, ${(c.dy || 0) * MM}px)${sx} ${t}`;
    }
  }

  const deborde = (el) => el.scrollWidth > el.clientWidth + 0.5 || el.scrollHeight > el.clientHeight + 0.5;

  for (const el of document.querySelectorAll("[data-fit]")) {
    const min = parseFloat(el.dataset.fitMin || "1") * MM;
    const max = parseFloat(el.dataset.fitMax || "0") * MM || parseFloat(getComputedStyle(el).fontSize);
    let lo = min, hi = max;
    el.style.fontSize = hi + "px";
    if (!deborde(el)) continue;
    for (let i = 0; i < 18; i++) {
      const mid = (lo + hi) / 2;
      el.style.fontSize = mid + "px";
      if (deborde(el)) hi = mid; else lo = mid;
    }
    el.style.fontSize = lo + "px";
  }
  // data-etire : condense horizontalement (scaleX) un texte trop large pour sa boîte,
  // sans toucher à sa hauteur — comme un titre condensé en photocomposition.
  for (const el of document.querySelectorAll("[data-etire]")) {
    const boite = el.parentElement.clientWidth * (parseFloat(el.dataset.etire) || 1);
    el.style.display = "inline-block";
    el.style.transform = "none";
    const naturel = el.offsetWidth;  // largeur de mise en page (indépendante des rotations des parents)
    const k = Math.min(1, boite / naturel);
    el.style.transform = `scaleX(${k})`;
    el.style.transformOrigin = "center";
    el.style.width = naturel + "px";
    el.style.marginLeft = el.style.marginRight = `${-(naturel - naturel * k) / 2}px`;
  }
  for (const el of document.querySelectorAll("[data-plein]")) {
    const boite = el.parentElement.clientWidth;
    el.style.display = getComputedStyle(el).display.includes("flex") ? "inline-flex" : "inline-block";
    el.style.whiteSpace = "nowrap"; el.style.transform = "none";
    const naturel = el.offsetWidth;  // largeur de mise en page (indépendante des rotations des parents)
    const k = boite / naturel;
    el.style.transformOrigin = "0 0";
    el.style.transform = `scaleX(${k})`;
    el.style.width = naturel + "px";
    el.style.marginRight = `${naturel * k - naturel}px`;
  }
  // data-ruby : furigana posés au-dessus de leur base (texte séparé, donc exportable en calque)
  for (const el of document.querySelectorAll("[data-ruby]")) {
    const cont = el.offsetParent;
    if (!cont) continue;
    const cs0 = getComputedStyle(cont);
    const rt = document.createElement("div");
    rt.className = "rt";
    rt.textContent = el.dataset.ruby;
    rt.style.position = "absolute";
    rt.style.whiteSpace = "nowrap";
    cont.appendChild(rt);
    const brut = cs0.getPropertyValue("--ruby-ecart").trim();
    const ecart = (parseFloat(brut) || 0) * (brut.endsWith("mm") ? 96 / 25.4 : 1);
    // --ruby-decalage : décalage horizontal (ex. base en italique, dont le haut part vers la droite)
    const bd = cs0.getPropertyValue("--ruby-decalage").trim();
    const dec = (parseFloat(bd) || 0) * (bd.endsWith("mm") ? 96 / 25.4 : 1);
    rt.style.left = (el.offsetLeft + el.offsetWidth / 2 - rt.offsetWidth / 2 + dec) + "px";
    rt.style.top = (el.offsetTop - rt.offsetHeight + ecart) + "px";
  }
  document.body.dataset.pret = "1";
})();
