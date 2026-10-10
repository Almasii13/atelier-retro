#target illustrator
/*  ATELIER RETRO \u2014 construction automatique du document dans Illustrator
    ----------------------------------------------------------------------
    Utilisation : Illustrator > Fichier > Scripts > Autre script\u2026 > choisir ce fichier.
    Le script cr\u00e9e le document au format fini (plan de travail = coupe) avec le fond perdu r\u00e9gl\u00e9, puis :
      - des calques par plan de la maquette (fond, cadre, images, textes\u2026) et des sous-calques par zone ;
      - des trac\u00e9s vectoriels (couleurs RVB exactes, d\u00e9grad\u00e9s lin\u00e9aires, trac\u00e9s transpar\u00e9s : cadres, anneaux) ;
      - de vrais textes modifiables (police, corps, approche, \u00e9chelles, alignement) cal\u00e9s sur l'encre de la maquette ;
      - pour chaque image : un groupe de d\u00e9coupe (colle ton image dans le groupe, sous le trac\u00e9 de d\u00e9coupe) ;
      - les rep\u00e8res : zone de s\u00e9curit\u00e9 et plis (rep\u00e8res comment\u00e9s), zones r\u00e9serv\u00e9es dans un calque masqu\u00e9.
    Polices : installe celles du dossier lib/fonts de l'atelier avant de lancer le script.
    Le fichier .ai est enregistr\u00e9 \u00e0 c\u00f4t\u00e9 de ce script.
*/
(function () {
 try {
  var SCENE = {"titre": "Affiche lettre blanche \u2014 Dragon Ball Carddass Invitation Super Museum '94 (1080x1920)", "fichier": "affiche_lettre_super_museum_94", "largeur": 3375, "hauteur": 6000, "reperes": {"coupe": [0.0, 3375.0, 0.0, 6000.0], "secu": [94.48818897637796, 3280.511811023622, 94.48818897637796, 5905.511811023623]}, "plis": [], "polices": ["ArchivoBlack-Regular", "ZenOldMincho-Black", "ZenOldMincho-Bold", "ZenOldMincho-Medium"], "items": [{"calque": "fond", "calqueNom": "Fond et d\u00e9coupe", "groupe": "", "nom": "fond fond", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [0.0, 0.0]}, {"a": [3375.0, 0.0]}, {"a": [3375.0, 6000.0]}, {"a": [0.0, 6000.0]}]]}, {"calque": "fond", "calqueNom": "Fond et d\u00e9coupe", "groupe": "", "nom": "Filet haut", "type": "forme", "couleur": [17, 17, 17], "chemins": [[{"a": [312.5, 437.5]}, {"a": [3062.5, 437.5]}, {"a": [3062.5, 446.88]}, {"a": [312.5, 446.88]}]]}, {"calque": "fond", "calqueNom": "Fond et d\u00e9coupe", "groupe": "", "nom": "Filet sous-titre", "type": "forme", "couleur": [17, 17, 17], "chemins": [[{"a": [312.5, 1912.5]}, {"a": [3062.5, 1912.5]}, {"a": [3062.5, 1921.88]}, {"a": [312.5, 1921.88]}]]}, {"calque": "fond", "calqueNom": "Fond et d\u00e9coupe", "groupe": "", "nom": "Filet notes", "type": "forme", "couleur": [17, 17, 17], "chemins": [[{"a": [312.5, 4281.25]}, {"a": [3062.5, 4281.25]}, {"a": [3062.5, 4290.62]}, {"a": [312.5, 4290.62]}]]}, {"calque": "fond", "calqueNom": "Fond et d\u00e9coupe", "groupe": "", "nom": "Filet pied", "type": "forme", "couleur": [17, 17, 17], "chemins": [[{"a": [312.5, 5531.25]}, {"a": [3062.5, 5531.25]}, {"a": [3062.5, 5540.62]}, {"a": [312.5, 5540.62]}]]}, {"calque": "fond", "calqueNom": "Fond et d\u00e9coupe", "groupe": "", "nom": "D\u00e9coupe carte", "type": "forme", "couleur": [17, 17, 17], "chemins": [[{"a": [1893.75, 2050.0]}, {"a": [3043.75, 2050.0]}, {"a": [3043.75, 3150.0]}, {"a": [3043.75, 3150.0]}, {"a": [3054.38, 3150.62]}, {"a": [3064.69, 3152.5]}, {"a": [3074.69, 3155.31]}, {"a": [3084.38, 3159.38]}, {"a": [3093.75, 3164.38]}, {"a": [3102.19, 3170.31]}, {"a": [3110.0, 3177.5]}, {"a": [3117.19, 3185.31]}, {"a": [3123.12, 3193.75]}, {"a": [3128.12, 3203.12]}, {"a": [3132.19, 3212.81]}, {"a": [3135.0, 3222.81]}, {"a": [3136.88, 3233.12]}, {"a": [3137.5, 3243.75]}, {"a": [3136.88, 3254.38]}, {"a": [3135.0, 3264.69]}, {"a": [3132.19, 3274.69]}, {"a": [3128.12, 3284.38]}, {"a": [3123.12, 3293.75]}, {"a": [3117.19, 3302.19]}, {"a": [3110.0, 3310.0]}, {"a": [3102.19, 3317.19]}, {"a": [3093.75, 3323.13]}, {"a": [3084.38, 3328.12]}, {"a": [3074.69, 3332.19]}, {"a": [3064.69, 3335.0]}, {"a": [3054.38, 3336.88]}, {"a": [3043.75, 3337.5]}, {"a": [3043.75, 3631.25]}, {"a": [1893.75, 3631.25]}, {"a": [1893.75, 2531.25]}, {"a": [1893.75, 2531.25]}, {"a": [1883.12, 2530.62]}, {"a": [1872.81, 2528.75]}, {"a": [1862.81, 2525.94]}, {"a": [1853.12, 2521.88]}, {"a": [1843.75, 2516.88]}, {"a": [1835.31, 2510.94]}, {"a": [1827.5, 2503.75]}, {"a": [1820.31, 2495.94]}, {"a": [1814.38, 2487.5]}, {"a": [1809.38, 2478.12]}, {"a": [1805.31, 2468.44]}, {"a": [1802.5, 2458.44]}, {"a": [1800.63, 2448.12]}, {"a": [1800.0, 2437.5]}, {"a": [1800.63, 2426.88]}, {"a": [1802.5, 2416.56]}, {"a": [1805.31, 2406.56]}, {"a": [1809.38, 2396.88]}, {"a": [1814.38, 2387.5]}, {"a": [1820.31, 2379.06]}, {"a": [1827.5, 2371.25]}, {"a": [1835.31, 2364.06]}, {"a": [1843.75, 2358.12]}, {"a": [1853.12, 2353.12]}, {"a": [1862.81, 2349.06]}, {"a": [1872.81, 2346.25]}, {"a": [1883.12, 2344.38]}, {"a": [1893.75, 2343.75]}], [{"a": [1906.25, 2062.5]}, {"a": [3031.25, 2062.5]}, {"a": [3031.25, 3150.0]}, {"a": [3031.25, 3150.0]}, {"a": [3041.88, 3150.62]}, {"a": [3052.19, 3152.5]}, {"a": [3062.19, 3155.31]}, {"a": [3071.88, 3159.38]}, {"a": [3081.25, 3164.38]}, {"a": [3089.69, 3170.31]}, {"a": [3097.5, 3177.5]}, {"a": [3104.69, 3185.31]}, {"a": [3110.62, 3193.75]}, {"a": [3115.62, 3203.12]}, {"a": [3119.69, 3212.81]}, {"a": [3122.5, 3222.81]}, {"a": [3124.38, 3233.12]}, {"a": [3125.0, 3243.75]}, {"a": [3124.38, 3254.38]}, {"a": [3122.5, 3264.69]}, {"a": [3119.69, 3274.69]}, {"a": [3115.62, 3284.38]}, {"a": [3110.62, 3293.75]}, {"a": [3104.69, 3302.19]}, {"a": [3097.5, 3310.0]}, {"a": [3089.69, 3317.19]}, {"a": [3081.25, 3323.13]}, {"a": [3071.88, 3328.12]}, {"a": [3062.19, 3332.19]}, {"a": [3052.19, 3335.0]}, {"a": [3041.88, 3336.88]}, {"a": [3031.25, 3337.5]}, {"a": [3031.25, 3618.75]}, {"a": [1906.25, 3618.75]}, {"a": [1906.25, 2531.25]}, {"a": [1906.25, 2531.25]}, {"a": [1895.62, 2530.62]}, {"a": [1885.31, 2528.75]}, {"a": [1875.31, 2525.94]}, {"a": [1865.62, 2521.88]}, {"a": [1856.25, 2516.88]}, {"a": [1847.81, 2510.94]}, {"a": [1840.0, 2503.75]}, {"a": [1832.81, 2495.94]}, {"a": [1826.88, 2487.5]}, {"a": [1821.88, 2478.12]}, {"a": [1817.81, 2468.44]}, {"a": [1815.0, 2458.44]}, {"a": [1813.13, 2448.12]}, {"a": [1812.5, 2437.5]}, {"a": [1813.13, 2426.88]}, {"a": [1815.0, 2416.56]}, {"a": [1817.81, 2406.56]}, {"a": [1821.88, 2396.88]}, {"a": [1826.88, 2387.5]}, {"a": [1832.81, 2379.06]}, {"a": [1840.0, 2371.25]}, {"a": [1847.81, 2364.06]}, {"a": [1856.25, 2358.12]}, {"a": [1865.62, 2353.12]}, {"a": [1875.31, 2349.06]}, {"a": [1885.31, 2346.25]}, {"a": [1895.62, 2344.38]}, {"a": [1906.25, 2343.75]}]], "xor": true}, {"calque": "image:carte", "calqueNom": "Carte (\u00e0 glisser ici)", "groupe": "", "nom": "slot carte vide", "type": "image", "cle": "carte", "label": "", "chemins": [[{"a": [1906.25, 2062.5]}, {"a": [3031.25, 2062.5]}, {"a": [3031.25, 3618.75]}, {"a": [1906.25, 3618.75]}]], "detoure": false}, {"calque": "texte", "calqueNom": "Textes", "groupe": "En-t\u00eate", "nom": "\u9031\u520a\u5c11\u5e74\u30b8\u30e3\u30f3\u30d7\u3000\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30ab\u30fc\u30c9\u30c0\u30b9", "type": "texte", "texte": "\u9031\u520a\u5c11\u5e74\u30b8\u30e3\u30f3\u30d7\u3000\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30ab\u30fc\u30c9\u30c0\u30b9", "runs": [{"de": 0, "a": 20, "police": "ZenOldMincho-Bold", "taille": 68.75, "approche": 364, "interligne": 68.75, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 20, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1670.31, 236.67], "angle": 0.0, "encre": [1834.38, 64.06], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "En-t\u00eate", "nom": "WEEKLY JUMP CHARACTER CARDDASS \u00b7 1994", "type": "texte", "texte": "WEEKLY JUMP CHARACTER CARDDASS \u00b7 1994", "runs": [{"de": 0, "a": 37, "police": "ArchivoBlack-Regular", "taille": 43.75, "approche": 357, "interligne": 43.75, "couleur": [17, 17, 17], "italique": false, "gras": true, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 37, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1678.91, 343.75], "angle": 0.0, "encre": [1676.56, 34.38], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Logo \u2013 ombre", "nom": "SUPER MUSEUM", "type": "texte", "texte": "SUPER MUSEUM", "runs": [{"de": 0, "a": 12, "police": "ArchivoBlack-Regular", "taille": 312.5, "approche": -20, "interligne": 312.5, "couleur": [255, 213, 0], "italique": true, "gras": false, "echelleH": 94.7, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 12, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1740.59, 789.8], "angle": 0.0, "encre": [2599.84, 223.44], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Logo \u2013 ombre", "nom": "'94", "type": "texte", "texte": "'94", "runs": [{"de": 0, "a": 3, "police": "ArchivoBlack-Regular", "taille": 468.76, "approche": -20, "interligne": 468.76, "couleur": [255, 213, 0], "italique": true, "gras": false, "echelleH": 180.26, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1772.85, 1254.69], "angle": 0.0, "encre": [1261.81, 334.38], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Logo", "nom": "SUPER MUSEUM", "type": "texte", "texte": "SUPER MUSEUM", "runs": [{"de": 0, "a": 12, "police": "ArchivoBlack-Regular", "taille": 312.5, "approche": -20, "interligne": 312.5, "couleur": [216, 20, 28], "italique": true, "gras": false, "echelleH": 94.7, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 12, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1715.59, 764.79], "angle": 0.0, "encre": [2599.84, 223.44], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Logo", "nom": "'94", "type": "texte", "texte": "'94", "runs": [{"de": 0, "a": 3, "police": "ArchivoBlack-Regular", "taille": 468.76, "approche": -20, "interligne": 468.76, "couleur": [216, 20, 28], "italique": true, "gras": false, "echelleH": 180.26, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1747.85, 1229.69], "angle": 0.0, "encre": [1261.81, 334.38], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Sous-titre", "nom": "\u30c9\u30e9\u30b4\u30f3\u30dc\u30fc\u30eb\u3000\u3054\u62db\u5f85\u5238", "type": "texte", "texte": "\u30c9\u30e9\u30b4\u30f3\u30dc\u30fc\u30eb\u3000\u3054\u62db\u5f85\u5238", "runs": [{"de": 0, "a": 12, "police": "ZenOldMincho-Black", "taille": 118.75, "approche": 263, "interligne": 118.75, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 12, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1691.41, 1664.84], "angle": 0.0, "encre": [1723.44, 107.81], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Sous-titre", "nom": "DRAGON BALL CARDDASS INVITATION", "type": "texte", "texte": "DRAGON BALL CARDDASS INVITATION", "runs": [{"de": 0, "a": 31, "police": "ArchivoBlack-Regular", "taille": 46.88, "approche": 333, "interligne": 46.88, "couleur": [17, 17, 17], "italique": false, "gras": true, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 31, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1679.69, 1792.92], "angle": 0.0, "encre": [1462.5, 35.94], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u3000\u3053\u306e\u5ea6\u306f\u300c\u7a76\u6975\u535a '94\u300d\u306b\u3054\u8208\u5473\u3092", "type": "texte", "texte": "\u3000\u3053\u306e\u5ea6\u306f\u300c\u7a76\u6975\u535a '94\u300d\u306b\u3054\u8208\u5473\u3092", "runs": [{"de": 0, "a": 19, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 19, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1034.52, 2137.7], "angle": 0.0, "encre": [1246.79, 75.09], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u304a\u5bc4\u305b\u3044\u305f\u3060\u304d\u3001\u8aa0\u306b\u3042\u308a\u304c\u3068\u3046\u3054\u3056", "type": "texte", "texte": "\u304a\u5bc4\u305b\u3044\u305f\u3060\u304d\u3001\u8aa0\u306b\u3042\u308a\u304c\u3068\u3046\u3054\u3056", "runs": [{"de": 0, "a": 17, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1005.76, 2288.53], "angle": 0.0, "encre": [1370.68, 73.54], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u3044\u307e\u3059\u3002", "type": "texte", "texte": "\u3044\u307e\u3059\u3002", "runs": [{"de": 0, "a": 4, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [456.01, 2440.09], "angle": 0.0, "encre": [263.84, 69.1], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u3000\u3054\u6848\u5185\u3044\u305f\u3057\u307e\u3059\u306e\u306f\u3001\u5b6b\u609f\u7a7a\u3068\u795e", "type": "texte", "texte": "\u3000\u3054\u6848\u5185\u3044\u305f\u3057\u307e\u3059\u306e\u306f\u3001\u5b6b\u609f\u7a7a\u3068\u795e", "runs": [{"de": 0, "a": 17, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1050.34, 2657.28], "angle": 0.0, "encre": [1278.36, 73.54], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u9f8d\u3092\u63cf\u3044\u305f\u3054\u62db\u5f85\u5238\u3067\u3059\u3002\u4f1a\u5834\u306b\u3066\u3001", "type": "texte", "texte": "\u9f8d\u3092\u63cf\u3044\u305f\u3054\u62db\u5f85\u5238\u3067\u3059\u3002\u4f1a\u5834\u306b\u3066\u3001", "runs": [{"de": 0, "a": 17, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [979.15, 2806.49], "angle": 0.0, "encre": [1326.87, 75.11], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u88cf\u9762\u306e\u5165\u5834\u30b9\u30bf\u30f3\u30d7\u6b04\u306b\u62bc\u5370\u3044\u305f\u3057\u307e", "type": "texte", "texte": "\u88cf\u9762\u306e\u5165\u5834\u30b9\u30bf\u30f3\u30d7\u6b04\u306b\u62bc\u5370\u3044\u305f\u3057\u307e", "runs": [{"de": 0, "a": 17, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [996.39, 2958.06], "angle": 0.0, "encre": [1361.29, 75.11], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u3059\u3002", "type": "texte", "texte": "\u3059\u3002", "runs": [{"de": 0, "a": 2, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 2, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [372.36, 3109.28], "angle": 0.0, "encre": [105.46, 69.26], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u3000\u5f0a\u793e\u306f\u3053\u308c\u304b\u3089\u3082\u7686\u3055\u307e\u306b\u559c\u3093\u3067\u3044", "type": "texte", "texte": "\u3000\u5f0a\u793e\u306f\u3053\u308c\u304b\u3089\u3082\u7686\u3055\u307e\u306b\u559c\u3093\u3067\u3044", "runs": [{"de": 0, "a": 17, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1040.97, 3326.03], "angle": 0.0, "encre": [1287.75, 73.54], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u305f\u3060\u3051\u308b\u5546\u54c1\u3084\u4f01\u753b\u3092\u8003\u3048\u3066\u304a\u308a\u307e", "type": "texte", "texte": "\u305f\u3060\u3051\u308b\u5546\u54c1\u3084\u4f01\u753b\u3092\u8003\u3048\u3066\u304a\u308a\u307e", "runs": [{"de": 0, "a": 16, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 16, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [958.89, 3476.07], "angle": 0.0, "encre": [1273.8, 73.55], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u3059\u3002\u4eca\u5f8c\u3068\u3082\u30ab\u30fc\u30c9\u30c0\u30b9\u3092\u3054\u611b\u9867\u304f\u3060", "type": "texte", "texte": "\u3059\u3002\u4eca\u5f8c\u3068\u3082\u30ab\u30fc\u30c9\u30c0\u30b9\u3092\u3054\u611b\u9867\u304f\u3060", "runs": [{"de": 0, "a": 17, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1004.98, 3625.24], "angle": 0.0, "encre": [1372.24, 75.11], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "\u3055\u3044\u307e\u3059\u3088\u3046\u304a\u9858\u3044\u7533\u3057\u4e0a\u3052\u307e\u3059\u3002", "type": "texte", "texte": "\u3055\u3044\u307e\u3059\u3088\u3046\u304a\u9858\u3044\u7533\u3057\u4e0a\u3052\u307e\u3059\u3002", "runs": [{"de": 0, "a": 16, "police": "ZenOldMincho-Medium", "taille": 81.25, "approche": 0, "interligne": 150.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 16, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [944.04, 3775.29], "angle": 0.0, "encre": [1234.68, 75.11], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Lettre", "nom": "1994\u5e74 \u682a\u5f0f\u4f1a\u793e\u30d0\u30f3\u30c0\u30a4", "type": "texte", "texte": "1994\u5e74\r\u682a\u5f0f\u4f1a\u793e\u30d0\u30f3\u30c0\u30a4", "runs": [{"de": 0, "a": 6, "police": "ZenOldMincho-Medium", "taille": 75.0, "approche": 0, "interligne": 125.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 14, "police": "ZenOldMincho-Medium", "taille": 75.0, "approche": 0, "interligne": 125.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 6, "align": "right", "retrait1": 0.0, "retraitG": 0.0}, {"de": 6, "a": 14, "align": "right", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1436.67, 4071.83], "angle": 0.0, "encre": [595.31, 193.75], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Notes", "nom": "\u30ab\u30fc\u30c9\u306b\u3064\u3044\u3066", "type": "texte", "texte": "\u30ab\u30fc\u30c9\u306b\u3064\u3044\u3066", "runs": [{"de": 0, "a": 7, "police": "ZenOldMincho-Black", "taille": 75.0, "approche": 250, "interligne": 75.0, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 7, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [630.42, 4397.61], "angle": 0.0, "encre": [620.31, 64.06], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Notes", "nom": "\u203b\u540d\u79f0\u3000\u30c9\u30e9\u30b4\u30f3\u30dc\u30fc\u30eb \u30ab\u30fc\u30c9\u30c0\u30b9 \u3054\u62db\u5f85\u5238\uff08\u5165\u5834\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3\u30ab\u30fc\u30c9\uff09", "type": "texte", "texte": "\u203b\u540d\u79f0\u3000\u30c9\u30e9\u30b4\u30f3\u30dc\u30fc\u30eb \u30ab\u30fc\u30c9\u30c0\u30b9 \u3054\u62db\u5f85\u5238\uff08\u5165\u5834\u30d7\u30ed\u30e2\u30fc\u30b7\u30e7\u30f3\u30ab\u30fc\u30c9\uff09", "runs": [{"de": 0, "a": 36, "police": "ZenOldMincho-Medium", "taille": 78.13, "approche": 0, "interligne": 78.13, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 36, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1643.6, 4589.16], "angle": 0.0, "encre": [2640.21, 71.95], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Notes", "nom": "\u203b\u50ac\u4e8b\u3000\u30b8\u30e3\u30f3\u30d7\u30ad\u30e3\u30e9\u30af\u30bf\u30fc \u30ab\u30fc\u30c9\u30c0\u30b9 \u7a76\u6975\u535a '94", "type": "texte", "texte": "\u203b\u50ac\u4e8b\u3000\u30b8\u30e3\u30f3\u30d7\u30ad\u30e3\u30e9\u30af\u30bf\u30fc \u30ab\u30fc\u30c9\u30c0\u30b9 \u7a76\u6975\u535a '94", "runs": [{"de": 0, "a": 28, "police": "ZenOldMincho-Medium", "taille": 78.13, "approche": 0, "interligne": 78.13, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 28, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1265.09, 4739.16], "angle": 0.0, "encre": [1883.18, 71.95], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Notes", "nom": "\u203b\u7d75\u67c4\u3000\u5b6b\u609f\u7a7a \uff06 \u795e\u9f8d\u3000\u3000\u539f\u753b\u3000\u9ce5\u5c71 \u660e", "type": "texte", "texte": "\u203b\u7d75\u67c4\u3000\u5b6b\u609f\u7a7a \uff06 \u795e\u9f8d\u3000\u3000\u539f\u753b\u3000\u9ce5\u5c71 \u660e", "runs": [{"de": 0, "a": 21, "police": "ZenOldMincho-Medium", "taille": 78.13, "approche": 0, "interligne": 78.13, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 21, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1052.39, 4889.16], "angle": 0.0, "encre": [1457.74, 71.95], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Notes", "nom": "\u203b\u4ed5\u69d8\u3000\u30cf\u30fc\u30c9\u30d7\u30ea\u30ba\u30e0\uff08\u30b7\u30fc\u30eb\u7121\u3057\uff09\u300065 \u00d7 90 mm", "type": "texte", "texte": "\u203b\u4ed5\u69d8\u3000\u30cf\u30fc\u30c9\u30d7\u30ea\u30ba\u30e0\uff08\u30b7\u30fc\u30eb\u7121\u3057\uff09\u300065 \u00d7 90 mm", "runs": [{"de": 0, "a": 29, "police": "ZenOldMincho-Medium", "taille": 78.13, "approche": 0, "interligne": 78.13, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 29, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1285.45, 5039.16], "angle": 0.0, "encre": [1923.85, 71.95], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Notes", "nom": "\u203b\u88cf\u9762\u3000\u5165\u5834\u30b9\u30bf\u30f3\u30d7\u6b04\u3042\u308a", "type": "texte", "texte": "\u203b\u88cf\u9762\u3000\u5165\u5834\u30b9\u30bf\u30f3\u30d7\u6b04\u3042\u308a", "runs": [{"de": 0, "a": 13, "police": "ZenOldMincho-Medium", "taille": 78.13, "approche": 0, "interligne": 78.13, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 13, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [815.43, 5189.94], "angle": 0.0, "encre": [983.82, 73.51], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Notes", "nom": "\u203b\u914d\u5e03\u30007,500\u679a\u3000\u901a\u5e38\u30b7\u30ea\u30fc\u30ba\u5916\u306e\u7279\u5225\u30d7\u30ed\u30e2\u30ab\u30fc\u30c9", "type": "texte", "texte": "\u203b\u914d\u5e03\u30007,500\u679a\u3000\u901a\u5e38\u30b7\u30ea\u30fc\u30ba\u5916\u306e\u7279\u5225\u30d7\u30ed\u30e2\u30ab\u30fc\u30c9", "runs": [{"de": 0, "a": 27, "police": "ZenOldMincho-Medium", "taille": 78.13, "approche": 0, "interligne": 78.13, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 27, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1276.03, 5343.07], "angle": 0.0, "encre": [1905.08, 79.77], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Pied", "nom": "\u00a9\u30d0\u30fc\u30c9\u30b9\u30bf\u30b8\u30aa\uff0f\u96c6\u82f1\u793e\u30fb\u30d5\u30b8\u30c6\u30ec\u30d3\u30fb\u6771\u6620\u52d5\u753b", "type": "texte", "texte": "\u00a9\u30d0\u30fc\u30c9\u30b9\u30bf\u30b8\u30aa\uff0f\u96c6\u82f1\u793e\u30fb\u30d5\u30b8\u30c6\u30ec\u30d3\u30fb\u6771\u6620\u52d5\u753b", "runs": [{"de": 0, "a": 23, "police": "ZenOldMincho-Medium", "taille": 53.13, "approche": 0, "interligne": 53.13, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 23, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1687.5, 5642.19], "angle": 0.0, "encre": [1206.25, 50.0], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Pied", "nom": "DRAGON BALL CARDDASS INVITATION \u00b7 SUPER ", "type": "texte", "texte": "DRAGON BALL CARDDASS INVITATION \u00b7 SUPER MUSEUM '94 \u00b7 BANDAI \u00b7 JAPAN \u00b7 1994", "runs": [{"de": 0, "a": 74, "police": "ArchivoBlack-Regular", "taille": 43.75, "approche": 171, "interligne": 43.75, "couleur": [17, 17, 17], "italique": false, "gras": true, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 74, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1684.38, 5737.5], "angle": 0.0, "encre": [2596.88, 34.38], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Pied", "nom": "HARD PRISM, NON-STICKER \u00b7 7,500 INVITATI", "type": "texte", "texte": "HARD PRISM, NON-STICKER \u00b7 7,500 INVITATIONS \u00b7 COLLECTION BACK TO 2054", "runs": [{"de": 0, "a": 69, "police": "ArchivoBlack-Regular", "taille": 43.75, "approche": 171, "interligne": 43.75, "couleur": [17, 17, 17], "italique": false, "gras": true, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 69, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1684.38, 5822.66], "angle": 0.0, "encre": [2415.62, 42.19], "vertical": false, "boite": null}], "motifs": {}, "images": {}};
  if (!confirm("Atelier Retro (Illustrator)\n\nConstruire le document \u00ab " + SCENE.titre + " \u00bb ?")) return;

  var K = 72 / 300;                       // px sc\u00e8ne (300 ppi) -> points
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
    if (!confirm("Polices non install\u00e9es (Illustrator les remplacera) :\n\n  " + manquantes.join("\n  ") +
                 "\n\nInstalle-les depuis lib/fonts puis relance, ou clique OK pour continuer quand m\u00eame.")) return;
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
  var AB = doc.artboards[0].artboardRect;  // [gauche, haut, droite, bas] en coordonn\u00e9es document (y vers le haut)

  // point sc\u00e8ne (px, origine = coin du fond perdu, y vers le bas) -> point document
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

  // ---------- Trac\u00e9s ----------
  function sousTrace(conteneur, pts) {
    var p = conteneur.pathItems.add(), tab = [];
    for (var k = 0; k < pts.length; k++) tab.push(P(pts[k].a));
    p.setEntirePath(tab); p.closed = true;
    return p;
  }
  // chemins : liste de sous-trac\u00e9s ; xor : les suivants percent le premier (cadre, anneau)
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

  // D\u00e9grad\u00e9 lin\u00e9aire : angle \u00e0 la mani\u00e8re de Photoshop (0 = gauche->droite, 90 = bas->haut)
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
      // d\u00e9grad\u00e9 couvrant toute la bo\u00eete dans la direction voulue
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

  function boiteEncre(tf) {  // emprise r\u00e9elle des glyphes (contours provisoires)
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
    if (ru.gras) { ca.strokeColor = rvb(couleur || ru.couleur); ca.strokeWeight = ru.taille * K * 0.025; }  // gras simul\u00e9
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
    if (ital) {  // italique simul\u00e9 : inclinaison de 12\u00b0
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
        try { gc.angle = it.degradeTexte.angle; } catch (ea) {}  // dans le rep\u00e8re du texte (-90 = haut -> bas)
        tf.textRange.characterAttributes.fillColor = gc;
      } catch (e) { erreurs.push(it.nom + " (d\u00e9grad\u00e9 du texte remplac\u00e9 par une couleur unie) : " + e.message);
                    tf.textRange.characterAttributes.fillColor = rvb(couleurMoyenne(it.degradeTexte.stops)); }
    }
    var objet = tf;
    if (it.contour) {
      var ct = it.contour;
      if (ct.centre || it.contourSeul) {
        tf.textRange.characterAttributes.strokeColor = rvb(ct.couleur);
        tf.textRange.characterAttributes.strokeWeight = ct.taille * K;
        if (it.contourSeul) tf.textRange.characterAttributes.fillColor = new NoColor();
      } else {  // contour ext\u00e9rieur : copie dessous, filet double \u00e9paisseur
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
  // ---------- Textures incrust\u00e9es (motif bois\u2026) ----------
  // PNG embarqu\u00e9 en base64 : \u00e9crit dans le dossier temporaire, import\u00e9 (incorpor\u00e9), puis masqu\u00e9 par une
  // copie du texte (masque d'\u00e9cr\u00eatage \u00e0 texte vivant). Le texte d'origine reste dessous, modifiable.
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
    try { img.embed(); img = conteneur.pageItems[0]; } catch (e0) {}  // incorpor\u00e9e : devient une image (RasterItem) au m\u00eame rang
    var masque = tf.duplicate();
    masque.move(img, ElementPlacement.PLACEBEFORE);  // au-dessus de l'image
    doc.selection = null;
    masque.selected = true; img.selected = true;
    app.executeMenuCommand("makeMask");  // masque d'\u00e9cr\u00eatage : le texte copi\u00e9 d\u00e9coupe la texture
    var g = doc.selection[0];
    if (g) g.name = "Motif " + it.motif + " (incrust\u00e9 dans \u00ab " + it.nom + " \u00bb)";
    doc.selection = null;
    return g;
  }

  // ---------- Images des emplacements (logos, photos) ----------
  var fichiersImages = {};
  function fichierImage(cle) {
    if (fichiersImages[cle]) return fichiersImages[cle];
    var f = new File(Folder.temp.fsName + "/atelier_image_" + cle + ".png");
    f.encoding = "BINARY"; f.open("w"); f.write(b64bin(SCENE.images[cle].b64)); f.close();
    fichiersImages[cle] = f;
    return f;
  }
  function poserImage(conteneur, it) {
    var m = SCENE.images[it.image];
    var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (var c = 0; c < it.chemins.length; c++) for (var p = 0; p < it.chemins[c].length; p++) {
      var q = P(it.chemins[c][p].a);
      x0 = Math.min(x0, q[0]); x1 = Math.max(x1, q[0]); y0 = Math.min(y0, q[1]); y1 = Math.max(y1, q[1]);
    }
    var img = conteneur.placedItems.add();
    img.file = fichierImage(it.image);
    var w0 = m.l * K, h0 = m.h * K;
    var s = it.detoure ? Math.min((x1 - x0) / w0, (y1 - y0) / h0) : Math.max((x1 - x0) / w0, (y1 - y0) / h0);
    img.width = w0 * s; img.height = h0 * s;
    var b = img.geometricBounds;
    img.translate((x0 + x1) / 2 - (b[0] + b[2]) / 2, (y0 + y1) / 2 - (b[1] + b[3]) / 2);
    try { img.embed(); img = conteneur.pageItems[0]; } catch (e0) {}  // incorpor\u00e9e : l'objet du dessus
    try { img.name = it.calqueNom; } catch (e1) {}
    return img;
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
      if (it.type === "forme") { var fo = trace(cont, it.chemins, it.nom, uni(it.couleur)); if (it.opacite) { try { fo.opacity = it.opacite; } catch (e) {} } }
      else if (it.type === "degrade") {
        try { trace(cont, it.chemins, it.nom, degrade(it.stops, it.angle)); }
        catch (e) { erreurs.push(it.nom + " (d\u00e9grad\u00e9 remplac\u00e9 par une couleur unie) : " + e.message);
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
        var avecImage = !!(it.image && SCENE.images && SCENE.images[it.image]);
        if (avecImage && it.detoure) {
          // logo / personnage d\u00e9tour\u00e9 : image pos\u00e9e telle quelle (PNG transparent)
          try { poserImage(cont, it); } catch (e) { erreurs.push(it.calqueNom + " (image) : " + e.message); avecImage = false; }
        } else if (avecImage) {
          var gi = cont.groupItems.add(); gi.name = it.calqueNom;
          try {
            poserImage(gi, it);
            var dec = trace(gi, it.chemins, "D\u00e9coupe \u2013 " + it.calqueNom, uni([128, 128, 128]));
            dec.clipping = true; gi.clipped = true;  // photo : d\u00e9coup\u00e9e \u00e0 la forme de l'emplacement
          } catch (e) { erreurs.push(it.calqueNom + " (image) : " + e.message); avecImage = false; }
        }
        if (!avecImage) {
          var g = cont.groupItems.add(); g.name = it.calqueNom + " : colle ton image dans ce groupe";
          var fond = trace(g, it.chemins, "Emplacement (\u00e0 remplacer)", uni([128, 128, 128]));
          if (it.detoure) fond.opacity = 0;  // image d\u00e9tour\u00e9e : la d\u00e9coupe ne se voit pas
          var decoupe = trace(g, it.chemins, "D\u00e9coupe \u2013 " + it.calqueNom, uni([128, 128, 128]));
          decoupe.clipping = true; g.clipped = true;
        }
      }
      else if (it.type === "zone") {
        var z = trace(cont, it.chemins, "Zone \u2013 " + it.label, uni([0, 160, 233])); z.opacity = 30;
      }
    } catch (e) { erreurs.push((it.nom || it.type) + " : " + e.message); }
  }

  // ---------- Rep\u00e8res (zone de s\u00e9curit\u00e9, plis) ----------
  try {
    var rg = doc.layers.add(); rg.name = "Rep\u00e8res";
    var s = R.secu;  // [gauche, droite, haut, bas] en px sc\u00e8ne
    var a = P([s[0], s[2]]), b = P([s[1], s[3]]);
    var sec = rg.pathItems.rectangle(a[1], a[0], b[0] - a[0], a[1] - b[1]);
    sec.name = "Zone de s\u00e9curit\u00e9"; sec.filled = false; sec.guides = true;
    for (var pl = 0; pl < SCENE.plis.length; pl++) {
      var h = P([SCENE.plis[pl], 0]), bas = P([SCENE.plis[pl], SCENE.hauteur]);
      var l = rg.pathItems.add(); l.setEntirePath([h, bas]); l.name = "Pli"; l.guides = true;
    }
  } catch (e) { erreurs.push("Rep\u00e8res : " + e.message); }

  // calque vide cr\u00e9\u00e9 avec le document
  try { if (calqueInitial.pageItems.length === 0 && calqueInitial.layers.length === 0) calqueInitial.remove(); } catch (e) {}

  var fichier = new File(File($.fileName).parent.fsName + "/" + File($.fileName).name.replace(/\.jsx$/i, "").replace(/_illustrator$/i, "") + ".ai");
  try { var o = new IllustratorSaveOptions(); o.pdfCompatible = true; doc.saveAs(fichier, o); }
  catch (e) { erreurs.push("Enregistrement : " + e.message); }

  alert("Atelier Retro \u2014 document Illustrator construit.\n\n" +
        "Fichier : " + fichier.fsName + "\n" +
        "Plan de travail = format fini, fond perdu " + Math.round(B / 72 * 25.4 * 10) / 10 + " mm.\n" +
        (manquantes.length ? "\nPolices remplac\u00e9es : " + manquantes.join(", ") + "\n" : "") +
        (erreurs.length ? "\n\u00c9l\u00e9ments non cr\u00e9\u00e9s (" + erreurs.length + ") :\n- " + erreurs.slice(0, 12).join("\n- ") : "\nAucune erreur."));

 } catch (err) {
  alert("Atelier Retro \u2014 erreur\n\nLigne " + err.line + " : " + err.message +
        "\n\nEnvoie une capture de ce message a Claude.");
 }
})();
