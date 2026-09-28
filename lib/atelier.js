/* ATELIER RETRO — ajustements automatiques exécutés avant l'export.
   data-fit           : réduit (ou agrandit jusqu'à data-fit-max, en mm) la taille
                        du texte pour qu'il tienne exactement dans sa boîte.
   data-fit-min       : taille minimale en mm (défaut 1).
   Quand tout est prêt : document.body.dataset.pret = "1". */
(async function () {
  const MM = 96 / 25.4;
  await document.fonts.ready;

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
    const naturel = el.getBoundingClientRect().width;
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
    const naturel = el.getBoundingClientRect().width;
    const k = boite / naturel;
    el.style.transformOrigin = "0 0";
    el.style.transform = `scaleX(${k})`;
    el.style.width = naturel + "px";
    el.style.marginRight = `${naturel * k - naturel}px`;
  }
  document.body.dataset.pret = "1";
})();
