#target photoshop
/*  ATELIER RETRO \u2014 construction automatique du document dans Photoshop
    ---------------------------------------------------------------------
    Utilisation : Photoshop > Fichier > Scripts > Parcourir\u2026 > choisir ce fichier.
    Le script cr\u00e9e le document au format final (fond perdu compris, 300 ppi) avec :
      - de vrais calques de texte modifiables (polices, tailles, approches, interlignages, couleurs, rotations) ;
      - des calques de forme vectoriels ;
      - pour chaque image : une forme + un calque vide \u00e9cr\u00eat\u00e9 au-dessus (colle ton image dedans) ;
      - les zones r\u00e9serv\u00e9es (VHS 3D, TV\u2026) dans un groupe masqu\u00e9 ;
      - les rep\u00e8res : coupe, s\u00e9curit\u00e9, plis.
    Polices : installe celles du dossier lib/fonts de l'atelier avant de lancer le script.
    Le PSD est enregistr\u00e9 \u00e0 c\u00f4t\u00e9 de ce script.
*/
(function () {
 try {
  var SCENE = {"titre": "Carte Invitation Carddass \u2014 verso 65x90", "fichier": "carte_invitation_verso", "largeur": 839, "hauteur": 1134, "reperes": {"coupe": [35.43307086614173, 803.1496062992126, 35.43307086614173, 1098.4251968503938], "secu": [64.96062992125985, 773.6220472440945, 64.96062992125985, 1068.8976377952756]}, "plis": [], "polices": ["MPLUS1p-Medium", "OpenSans-CondensedBoldItalic"], "items": [{"calque": "fond", "calqueNom": "Fond, cadre or & cartouches", "groupe": "", "nom": "Fond noir", "type": "forme", "couleur": [23, 20, 28], "chemins": [[{"a": [-0.03, -0.0]}, {"a": [838.51, -0.0]}, {"a": [838.51, 1133.79]}, {"a": [-0.03, 1133.79]}]]}, {"calque": "fond", "calqueNom": "Fond, cadre or & cartouches", "groupe": "", "nom": "Cadre or", "type": "forme", "couleur": [217, 152, 15], "chemins": [[{"a": [99.41, 68.5]}, {"a": [176.18, 68.5]}, {"a": [176.18, 131.09]}, {"a": [158.46, 131.09]}, {"a": [158.46, 152.35]}, {"a": [138.39, 152.35]}, {"a": [138.39, 733.42]}, {"a": [116.89, 733.42]}, {"a": [116.89, 1029.86]}, {"a": [721.58, 1029.86]}, {"a": [721.58, 733.42]}, {"a": [700.09, 733.42]}, {"a": [700.09, 152.35]}, {"a": [680.01, 152.35]}, {"a": [680.01, 131.09]}, {"a": [662.3, 131.09]}, {"a": [662.3, 68.5]}, {"a": [739.06, 68.5]}, {"a": [739.06, 93.3]}, {"a": [766.23, 93.3]}, {"a": [766.23, 1041.67]}, {"a": [739.3, 1041.67]}, {"a": [739.3, 1068.84]}, {"a": [99.18, 1068.84]}, {"a": [99.18, 1041.67]}, {"a": [72.25, 1041.67]}, {"a": [72.25, 93.3]}, {"a": [99.41, 93.3]}]]}, {"calque": "fond", "calqueNom": "Fond, cadre or & cartouches", "groupe": "", "nom": "Cartouche blanc (haut)", "type": "forme", "couleur": [245, 243, 239], "chemins": [[{"a": [192.48, -0.0]}, {"a": [646.0, -0.0]}, {"a": [646.0, 255.1]}, {"a": [192.48, 255.1]}]]}, {"calque": "fond", "calqueNom": "Fond, cadre or & cartouches", "groupe": "", "nom": "Encadr\u00e9 blanc", "type": "forme", "couleur": [245, 243, 239], "chemins": [[{"a": [704.46, 747.0]}, {"a": [704.92, 747.03]}, {"a": [705.38, 747.12]}, {"a": [705.82, 747.27]}, {"a": [706.23, 747.48]}, {"a": [706.62, 747.74]}, {"a": [706.96, 748.04]}, {"a": [707.27, 748.39]}, {"a": [707.53, 748.77]}, {"a": [707.73, 749.19]}, {"a": [707.88, 749.63]}, {"a": [707.97, 750.08]}, {"a": [708.0, 750.55]}, {"a": [708.0, 1013.33]}, {"a": [707.97, 1013.79]}, {"a": [707.88, 1014.24]}, {"a": [707.73, 1014.68]}, {"a": [707.53, 1015.1]}, {"a": [707.27, 1015.48]}, {"a": [706.96, 1015.83]}, {"a": [706.62, 1016.14]}, {"a": [706.23, 1016.4]}, {"a": [705.82, 1016.6]}, {"a": [705.38, 1016.75]}, {"a": [704.92, 1016.84]}, {"a": [704.46, 1016.87]}, {"a": [134.02, 1016.87]}, {"a": [133.55, 1016.84]}, {"a": [133.1, 1016.75]}, {"a": [132.66, 1016.6]}, {"a": [132.25, 1016.4]}, {"a": [131.86, 1016.14]}, {"a": [131.51, 1015.83]}, {"a": [131.21, 1015.48]}, {"a": [130.95, 1015.1]}, {"a": [130.74, 1014.68]}, {"a": [130.59, 1014.24]}, {"a": [130.5, 1013.79]}, {"a": [130.47, 1013.33]}, {"a": [130.47, 750.55]}, {"a": [130.5, 750.08]}, {"a": [130.59, 749.63]}, {"a": [130.74, 749.19]}, {"a": [130.95, 748.77]}, {"a": [131.21, 748.39]}, {"a": [131.51, 748.04]}, {"a": [131.86, 747.74]}, {"a": [132.25, 747.48]}, {"a": [132.66, 747.27]}, {"a": [133.1, 747.12]}, {"a": [133.55, 747.03]}, {"a": [134.02, 747.0]}]]}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Titre \u2013 ombre jaune", "nom": "INVITATION", "type": "texte", "texte": "INVITATION", "runs": [{"de": 0, "a": 10, "police": "OpenSans-CondensedBoldItalic", "taille": 145.23, "approche": 0, "interligne": 198.41, "couleur": [242, 204, 18], "italique": false, "gras": false, "echelleH": 107.22, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [417.04, 419.47], "angle": 0.0, "encre": [644.06, 107.94], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Titre \u2013 ombre jaune", "nom": "CARDDASS", "type": "texte", "texte": "CARDDASS", "runs": [{"de": 0, "a": 8, "police": "OpenSans-CondensedBoldItalic", "taille": 145.23, "approche": 0, "interligne": 198.41, "couleur": [242, 204, 18], "italique": false, "gras": false, "echelleH": 118.34, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [417.52, 593.47], "angle": 0.0, "encre": [633.02, 106.67], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Titre", "nom": "INVITATION", "type": "texte", "texte": "INVITATION", "runs": [{"de": 0, "a": 10, "police": "OpenSans-CondensedBoldItalic", "taille": 145.23, "approche": 0, "interligne": 198.41, "couleur": [224, 24, 28], "italique": false, "gras": false, "echelleH": 107.22, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [425.91, 408.21], "angle": 0.0, "encre": [644.06, 107.94], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Titre", "nom": "CARDDASS", "type": "texte", "texte": "CARDDASS", "runs": [{"de": 0, "a": 8, "police": "OpenSans-CondensedBoldItalic", "taille": 145.23, "approche": 0, "interligne": 198.41, "couleur": [224, 24, 28], "italique": false, "gras": false, "echelleH": 118.35, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [426.82, 582.18], "angle": 0.0, "encre": [633.08, 106.67], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u30fb\u672c\u5238\uff11\u679a\u306b\u3064\u304d", "type": "texte", "texte": "\u30fb\u672c\u5238\uff11\u679a\u306b\u3064\u304d", "runs": [{"de": 0, "a": 1, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}, {"de": 1, "a": 3, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}, {"de": 3, "a": 4, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 5, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}, {"de": 5, "a": 8, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [281.82, 798.23], "angle": 0.0, "encre": [258.76, 37.66], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u307b\u3093\u3051\u3093", "type": "texte", "texte": "\u307b\u3093\u3051\u3093", "runs": [{"de": 0, "a": 4, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [208.71, 763.46], "angle": 0.0, "encre": [52.14, 14.15], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u307e\u3044", "type": "texte", "texte": "\u307e\u3044", "runs": [{"de": 0, "a": 2, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 2, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [293.5, 763.85], "angle": 0.0, "encre": [24.77, 14.19], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3054\uff11\u540d\u69d8\u3001\uff11\u56de\u3054\u5165\u5834\u3067\u304d\u307e\u3059\u3002", "type": "texte", "texte": "\u3054\uff11\u540d\u69d8\u3001\uff11\u56de\u3054\u5165\u5834\u3067\u304d\u307e\u3059\u3002", "runs": [{"de": 0, "a": 2, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 2, "a": 4, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 6, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 7, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 7, "a": 8, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 8, "a": 10, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 10, "a": 15, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 15, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [410.02, 859.39], "angle": 0.0, "encre": [464.51, 37.63], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3081\u3044\u3055\u307e", "type": "texte", "texte": "\u3081\u3044\u3055\u307e", "runs": [{"de": 0, "a": 4, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [269.79, 824.77], "angle": 0.0, "encre": [49.31, 14.15], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u304b\u3044", "type": "texte", "texte": "\u304b\u3044", "runs": [{"de": 0, "a": 2, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 2, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [386.73, 825.16], "angle": 0.0, "encre": [24.72, 14.19], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u306b\u3085\u3046\u3058\u3087\u3046", "type": "texte", "texte": "\u306b\u3085\u3046\u3058\u3087\u3046", "runs": [{"de": 0, "a": 6, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 6, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [466.84, 824.48], "angle": 0.0, "encre": [72.5, 14.12], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u30fb\u5f53\u65e5\u306f\u5fc5\u305a\u672c\u5238\u3092\u3054\u6301\u53c2\u304f\u3060\u3055\u3044\u3002", "type": "texte", "texte": "\u30fb\u5f53\u65e5\u306f\u5fc5\u305a\u672c\u5238\u3092\u3054\u6301\u53c2\u304f\u3060\u3055\u3044\u3002", "runs": [{"de": 0, "a": 1, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 1, "a": 3, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 3, "a": 4, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 5, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 5, "a": 6, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 8, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 8, "a": 10, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 10, "a": 12, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 12, "a": 17, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [420.59, 922.52], "angle": 0.0, "encre": [535.49, 39.08], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3068\u3046\u3058\u3064", "type": "texte", "texte": "\u3068\u3046\u3058\u3064", "runs": [{"de": 0, "a": 4, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [207.56, 889.12], "angle": 0.0, "encre": [50.29, 14.15], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u304b\u306a\u3089", "type": "texte", "texte": "\u304b\u306a\u3089", "runs": [{"de": 0, "a": 3, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [289.21, 889.31], "angle": 0.0, "encre": [37.1, 14.17], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u307b\u3093\u3051\u3093", "type": "texte", "texte": "\u307b\u3093\u3051\u3093", "runs": [{"de": 0, "a": 4, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [374.56, 889.12], "angle": 0.0, "encre": [50.29, 14.15], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3058\u3055\u3093", "type": "texte", "texte": "\u3058\u3055\u3093", "runs": [{"de": 0, "a": 3, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [510.13, 889.31], "angle": 0.0, "encre": [37.1, 14.17], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u30fb\u304a\u554f\u3044\u5408\u308f\u305b\uff0f0120-357512", "type": "texte", "texte": "\u30fb\u304a\u554f\u3044\u5408\u308f\u305b\uff0f0120-357512", "runs": [{"de": 0, "a": 2, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}, {"de": 2, "a": 3, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}, {"de": 3, "a": 4, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 5, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}, {"de": 5, "a": 19, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 19, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [382.56, 983.74], "angle": 0.0, "encre": [458.38, 37.53], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3068", "type": "texte", "texte": "\u3068", "runs": [{"de": 0, "a": 1, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [221.72, 950.1], "angle": 0.0, "encre": [8.9, 14.21], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3042", "type": "texte", "texte": "\u3042", "runs": [{"de": 0, "a": 1, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [284.63, 950.1], "angle": 0.0, "encre": [11.45, 14.21], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Copyright", "nom": "\u00a9\u30d0\u30fc\u30c9\u30b9\u30bf\u30b8\u30aa/\u96c6\u82f1\u793e\u30fb\u30d5\u30b8\u30c6\u30ec\u30d3\u30fb\u6771\u6620\u52d5\u753b", "type": "texte", "texte": "\u00a9\u30d0\u30fc\u30c9\u30b9\u30bf\u30b8\u30aa/\u96c6\u82f1\u793e\u30fb\u30d5\u30b8\u30c6\u30ec\u30d3\u30fb\u6771\u6620\u52d5\u753b", "runs": [{"de": 0, "a": 23, "police": "MPLUS1p-Medium", "taille": 23.17, "approche": 0, "interligne": 23.92, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 110.64, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 23, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [420.5, 1048.9], "angle": 0.0, "encre": [571.62, 23.48], "vertical": false, "boite": null}]};
  if (!confirm("Atelier Retro\n\nConstruire le document \u00ab " + SCENE.titre + " \u00bb ?\n(1 a 2 minutes)")) return;

  function cTID(s) { return charIDToTypeID(s); }
  function sTID(s) { return stringIDToTypeID(s); }
  var erreurs = [];

  // ---------- V\u00e9rification des polices ----------
  var installees = {};
  for (var f = 0; f < app.fonts.length; f++) { installees[app.fonts[f].postScriptName] = true; }
  var manquantes = [];
  for (var i = 0; i < SCENE.polices.length; i++) { if (!installees[SCENE.polices[i]]) manquantes.push(SCENE.polices[i]); }
  if (manquantes.length) {
    if (!confirm("Polices non install\u00e9es (Photoshop les remplacera) :\n\n  " + manquantes.join("\n  ") +
                 "\n\nInstalle-les depuis lib/fonts puis relance, ou clique OK pour continuer quand m\u00eame.")) return;
  }

  var prefsRU = app.preferences.rulerUnits, prefsTU = app.preferences.typeUnits, dlg = app.displayDialogs;
  app.preferences.rulerUnits = Units.PIXELS;
  app.preferences.typeUnits = TypeUnits.POINTS;
  app.displayDialogs = DialogModes.NO;

  // Construction \u00e0 72 ppi (1 pt = 1 px : textes et trac\u00e9s exacts), passage \u00e0 300 ppi sans r\u00e9\u00e9chantillonnage \u00e0 la fin.
  // Nom de document sans caract\u00e8res interdits (\u00ab : \u00bb, \u00ab \u2014 \u00bb\u2026) : cause d'\u00e9chec de la commande \u00ab Cr\u00e9er \u00bb sous Windows
  var nomDoc = SCENE.fichier;
  var doc;
  try {
    doc = app.documents.add(new UnitValue(SCENE.largeur, "px"), new UnitValue(SCENE.hauteur, "px"), 72, nomDoc,
                            NewDocumentMode.RGB, DocumentFill.WHITE);
  } catch (e1) {
    doc = app.documents.add(new UnitValue(SCENE.largeur, "px"), new UnitValue(SCENE.hauteur, "px"), 72);
  }

  // ---------- Utilitaires ----------
  function couleurRGB(rgb) { var c = new SolidColor(); c.rgb.red = rgb[0]; c.rgb.green = rgb[1]; c.rgb.blue = rgb[2]; return c; }
  function descCouleur(rgb) {
    var c = new ActionDescriptor();
    c.putDouble(cTID("Rd  "), rgb[0]); c.putDouble(cTID("Grn "), rgb[1]); c.putDouble(cTID("Bl  "), rgb[2]);
    return c;
  }
  function px(u) { return (typeof u === "number") ? u : u.as("px"); }
  function centreEncre(l) { var b = l.bounds; return [(px(b[0]) + px(b[2])) / 2, (px(b[1]) + px(b[3])) / 2]; }
  function largeurEncre(l) { var b = l.bounds; return px(b[2]) - px(b[0]); }

  function ranger(calque, conteneur) {
    try { calque.move(conteneur, ElementPlacement.PLACEATBEGINNING); }
    catch (e) { try { calque.move(conteneur, ElementPlacement.INSIDE); } catch (e2) {} }
  }

  // Groupes : un groupe par calque logique, sous-groupes par zone de la mise en page
  var groupes = {};
  function groupeDe(it) {
    var cle = it.calque;
    var parent = groupes[cle];
    if (!parent) {
      parent = doc.layerSets.add();
      parent.name = it.calqueNom;
      ranger(parent, doc);
      groupes[cle] = parent;
      if (cle.indexOf("zone:") === 0) parent.visible = false;
    }
    if (!it.groupe) return parent;
    var cle2 = cle + "/" + it.groupe;
    var g = groupes[cle2];
    if (!g) { g = doc.layerSets.add(); g.name = it.groupe; ranger(g, parent); groupes[cle2] = g; }
    return g;
  }

  // ---------- Formes vectorielles ----------
  var nChemin = 0;
  // remplissage : null (couleur unie rgb) ou {angle, stops} (d\u00e9grad\u00e9 lin\u00e9aire)
  function forme(chemins, rgb, nom, remplissage, xor) {
    var subs = [];
    for (var c = 0; c < chemins.length; c++) {
      var pts = [];
      for (var p = 0; p < chemins[c].length; p++) {
        var a = chemins[c][p].a, pp = new PathPointInfo();
        pp.kind = PointKind.CORNERPOINT; pp.anchor = a; pp.leftDirection = a; pp.rightDirection = a;
        pts.push(pp);
      }
      var sp = new SubPathInfo();
      sp.operation = (xor && c > 0) ? ShapeOperation.SHAPEXOR : ShapeOperation.SHAPEADD; sp.closed = true; sp.entireSubPath = pts;
      subs.push(sp);
    }
    var chemin = doc.pathItems.add("atelier_tmp_" + (nChemin++), subs);
    var d = new ActionDescriptor(), r = new ActionReference();
    r.putClass(sTID("contentLayer")); d.putReference(cTID("null"), r);
    var d2 = new ActionDescriptor(), d3 = new ActionDescriptor();
    if (remplissage) {
      d3.putObject(cTID("Grad"), cTID("Grdn"), descDegrade(remplissage.stops));
      d3.putUnitDouble(cTID("Angl"), cTID("#Ang"), remplissage.angle);
      d3.putEnumerated(cTID("Type"), cTID("GrdT"), cTID("Lnr "));
      d3.putBoolean(cTID("Algn"), true);
      d2.putObject(cTID("Type"), sTID("gradientLayer"), d3);
    } else {
      d3.putObject(cTID("Clr "), cTID("RGBC"), descCouleur(rgb));
      d2.putObject(cTID("Type"), sTID("solidColorLayer"), d3);
    }
    d.putObject(cTID("Usng"), sTID("contentLayer"), d2);
    try {
      try { chemin.select(); executeAction(cTID("Mk  "), d, DialogModes.NO); }
      catch (e) {  // repli : s\u00e9lection + calque de remplissage masqu\u00e9
        chemin.makeSelection(0, true, SelectionType.REPLACE);
        executeAction(cTID("Mk  "), d, DialogModes.NO);
        doc.selection.deselect();
      }
    } finally {
      try { chemin.remove(); } catch (e3) {}
    }
    var l = doc.activeLayer; l.name = nom;
    return l;
  }

  // ---------- D\u00e9grad\u00e9s ----------
  function descDegrade(stops) {
    var g = new ActionDescriptor();
    g.putString(cTID("Nm  "), "Atelier");
    g.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
    g.putDouble(cTID("Intr"), 4096);
    var cl = new ActionList();
    for (var i = 0; i < stops.length; i++) {
      var st = new ActionDescriptor();
      st.putObject(cTID("Clr "), cTID("RGBC"), descCouleur(stops[i].c));
      st.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
      st.putInteger(cTID("Lctn"), Math.round(Math.max(0, Math.min(1, stops[i].pos)) * 4096));
      st.putInteger(cTID("Mdpn"), 50);
      cl.putObject(cTID("Clrt"), st);
    }
    g.putList(cTID("Clrs"), cl);
    var tl = new ActionList();
    for (var k = 0; k < 2; k++) {
      var t = new ActionDescriptor();
      t.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
      t.putInteger(cTID("Lctn"), k * 4096);
      t.putInteger(cTID("Mdpn"), 50);
      tl.putObject(cTID("TrnS"), t);
    }
    g.putList(cTID("Trns"), tl);
    return g;
  }
  function couleurMoyenne(stops) { return stops[Math.floor(stops.length / 2)].c; }

  function formeDegradee(it) {
    // calque de remplissage d\u00e9grad\u00e9 avec masque vectoriel ; repli : couleur m\u00e9diane
    try { return forme(it.chemins, null, it.nom, { angle: it.angle, stops: it.stops }); }
    catch (e) {
      erreurs.push(it.nom + " (d\u00e9grad\u00e9 remplac\u00e9 par une couleur unie) : " + e.message);
      return forme(it.chemins, couleurMoyenne(it.stops), it.nom);
    }
  }

  function incrustationDegrade(dg) {
    var d = new ActionDescriptor(), r = new ActionReference();
    r.putProperty(cTID("Prpr"), cTID("Lefx")); r.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    d.putReference(cTID("null"), r);
    var fx = new ActionDescriptor(), g = new ActionDescriptor();
    fx.putUnitDouble(cTID("Scl "), cTID("#Prc"), 100);
    g.putBoolean(cTID("enab"), true);
    g.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
    g.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
    g.putObject(cTID("Grad"), cTID("Grdn"), descDegrade(dg.stops));
    g.putUnitDouble(cTID("Angl"), cTID("#Ang"), dg.angle);
    g.putEnumerated(cTID("Type"), cTID("GrdT"), cTID("Lnr "));
    g.putBoolean(cTID("Algn"), true);
    g.putUnitDouble(cTID("Scl "), cTID("#Prc"), 100);
    fx.putObject(cTID("GrFl"), cTID("GrFl"), g);
    d.putObject(cTID("T   "), cTID("Lefx"), fx);
    executeAction(cTID("setd"), d, DialogModes.NO);
  }

  // ---------- Textes ----------
  function creerTexte(texte, runs, paras, boite, vertical) {
    var d = new ActionDescriptor(), r = new ActionReference();
    r.putClass(sTID("textLayer")); d.putReference(cTID("null"), r);
    var t = new ActionDescriptor();
    t.putString(sTID("textKey"), texte);
    var clic = new ActionDescriptor();
    clic.putUnitDouble(sTID("horizontal"), sTID("percentUnit"), 10);
    clic.putUnitDouble(sTID("vertical"), sTID("percentUnit"), 10);
    t.putObject(sTID("textClickPoint"), sTID("paint"), clic);
    var formes = new ActionList(), f = new ActionDescriptor();
    f.putEnumerated(sTID("char"), sTID("char"), sTID(boite ? "box" : "paint"));
    f.putEnumerated(sTID("orientation"), sTID("orientation"), sTID(vertical ? "vertical" : "horizontal"));
    if (boite) {
      var b = new ActionDescriptor();
      b.putUnitDouble(sTID("top"), sTID("pointsUnit"), 0);
      b.putUnitDouble(sTID("left"), sTID("pointsUnit"), 0);
      b.putUnitDouble(sTID("bottom"), sTID("pointsUnit"), boite.h);
      b.putUnitDouble(sTID("right"), sTID("pointsUnit"), boite.l);
      f.putObject(sTID("bounds"), sTID("rectangle"), b);
    }
    formes.putObject(sTID("textShape"), f);
    t.putList(sTID("textShape"), formes);

    var styles = new ActionList();
    for (var i = 0; i < runs.length; i++) {
      var ru = runs[i], rd = new ActionDescriptor(), st = new ActionDescriptor();
      rd.putInteger(sTID("from"), ru.de); rd.putInteger(sTID("to"), ru.a);
      st.putString(sTID("fontPostScriptName"), ru.police);
      st.putUnitDouble(sTID("size"), sTID("pointsUnit"), ru.taille);
      st.putInteger(sTID("tracking"), ru.approche);
      st.putDouble(sTID("horizontalScale"), ru.echelleH);
      if (ru.echelleV && Math.abs(ru.echelleV - 100) > 0.5) st.putDouble(sTID("verticalScale"), ru.echelleV);
      if (ru.decalage && Math.abs(ru.decalage) > 0.05) st.putUnitDouble(sTID("baselineShift"), sTID("pointsUnit"), ru.decalage);
      st.putBoolean(sTID("syntheticItalic"), ru.italique);
      st.putBoolean(sTID("syntheticBold"), ru.gras);
      if (ru.interligne) { st.putBoolean(sTID("autoLeading"), false); st.putUnitDouble(sTID("leading"), sTID("pointsUnit"), ru.interligne); }
      else { st.putBoolean(sTID("autoLeading"), true); }
      st.putObject(sTID("color"), cTID("RGBC"), descCouleur(ru.couleur));
      rd.putObject(sTID("textStyle"), sTID("textStyle"), st);
      styles.putObject(sTID("textStyleRange"), rd);
    }
    t.putList(sTID("textStyleRange"), styles);

    var pl = new ActionList();
    for (var j = 0; j < paras.length; j++) {
      var pa = paras[j], pd = new ActionDescriptor(), ps = new ActionDescriptor();
      pd.putInteger(sTID("from"), pa.de); pd.putInteger(sTID("to"), Math.max(pa.a, pa.de + 1));
      ps.putEnumerated(sTID("align"), sTID("alignmentType"), sTID(pa.align));
      ps.putUnitDouble(sTID("firstLineIndent"), sTID("pointsUnit"), pa.retrait1);
      ps.putUnitDouble(sTID("startIndent"), sTID("pointsUnit"), pa.retraitG);
      pd.putObject(sTID("paragraphStyle"), sTID("paragraphStyle"), ps);
      pl.putObject(sTID("paragraphStyleRange"), pd);
    }
    t.putList(sTID("paragraphStyleRange"), pl);
    d.putObject(cTID("Usng"), sTID("textLayer"), t);
    executeAction(cTID("Mk  "), d, DialogModes.NO);
    return doc.activeLayer;
  }

  // Place l'encre du calque sur le centre voulu puis tourne autour de ce centre
  function placer(l, centre, angle) {
    var c = centreEncre(l);
    l.translate(centre[0] - c[0], centre[1] - c[1]);
    if (Math.abs(angle) > 0.01) l.rotate(angle, AnchorPosition.MIDDLECENTER);
  }

  // Masque vectoriel (polygone, px document) sur le calque actif
  function masqueVectoriel(points) {
    var pts = [];
    for (var i = 0; i < points.length; i++) {
      var pp = new PathPointInfo();
      pp.kind = PointKind.CORNERPOINT; pp.anchor = points[i]; pp.leftDirection = points[i]; pp.rightDirection = points[i];
      pts.push(pp);
    }
    var sp = new SubPathInfo(); sp.operation = ShapeOperation.SHAPEADD; sp.closed = true; sp.entireSubPath = pts;
    var cible = doc.activeLayer;
    var chemin = doc.pathItems.add("atelier_masque_" + (nChemin++), [sp]);
    try {
      doc.activeLayer = cible;
      chemin.select();
      var d = new ActionDescriptor(), r = new ActionReference();
      r.putClass(cTID("Path")); d.putReference(cTID("null"), r);
      var r2 = new ActionReference(); r2.putEnumerated(cTID("Path"), cTID("Path"), sTID("vectorMask"));
      d.putReference(cTID("At  "), r2);
      var r3 = new ActionReference(); r3.putEnumerated(cTID("Path"), cTID("Ordn"), cTID("Trgt"));
      d.putReference(cTID("Usng"), r3);
      executeAction(cTID("Mk  "), d, DialogModes.NO);
    } finally { try { chemin.remove(); } catch (e) {} }
  }

  function contour(taille, rgb, centre) {
    var d = new ActionDescriptor(), r = new ActionReference();
    r.putProperty(cTID("Prpr"), cTID("Lefx")); r.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    d.putReference(cTID("null"), r);
    var fx = new ActionDescriptor(), s = new ActionDescriptor();
    fx.putUnitDouble(cTID("Scl "), cTID("#Prc"), 100);
    s.putBoolean(cTID("enab"), true);
    s.putEnumerated(cTID("Styl"), cTID("FStl"), cTID(centre ? "CtrF" : "OutF"));
    s.putEnumerated(cTID("PntT"), cTID("FrFl"), cTID("SClr"));
    s.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
    s.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
    s.putUnitDouble(cTID("Sz  "), cTID("#Pxl"), Math.max(1, Math.round(taille)));
    s.putObject(cTID("Clr "), cTID("RGBC"), descCouleur(rgb));
    fx.putObject(cTID("FrFX"), cTID("FrFX"), s);
    d.putObject(cTID("T   "), cTID("Lefx"), fx);
    executeAction(cTID("setd"), d, DialogModes.NO);
  }

  function texte(it) {
    var l = creerTexte(it.texte, it.runs, it.paras, it.boite, it.vertical);
    l.name = it.nom;
    // Ajustement fin de l'approche des lignes simples pour retrouver la largeur exacte de la maquette
    if (!it.vertical && !it.boite && it.runs.length === 1 && it.texte.indexOf("\r") < 0 && it.texte.length > 2) {
      var w = largeurEncre(l), cible = it.encre[0];
      if (w > 0 && Math.abs(w - cible) / cible > 0.01) {
        var delta = (cible - w) / (it.texte.length - 1) / it.runs[0].taille * 1000;
        try { l.textItem.tracking = it.runs[0].approche + Math.round(delta); } catch (e) {}
      }
    }
    placer(l, it.centre, it.angle);
    if (it.contour) contour(it.contour.taille, it.contour.couleur, it.contour.centre);
    if (it.contourSeul) { try { l.fillOpacity = 0; } catch (e) {} }
    if (it.masque) { try { masqueVectoriel(it.masque); } catch (e) { erreurs.push(it.nom + " (masque) : " + e.message); } }
    if (it.degradeTexte) { try { incrustationDegrade(it.degradeTexte); } catch (e) { erreurs.push(it.nom + " (d\u00e9grad\u00e9 du texte) : " + e.message); } }
    return l;
  }

  function arc(it, conteneur) {
    var g = doc.layerSets.add(); g.name = it.nom; ranger(g, conteneur);
    for (var i = 0; i < it.car.length; i++) {
      var c = it.car[i];
      if (c.c === " ") continue;
      var l = creerTexte(c.c, [{ de: 0, a: 1, police: it.police, taille: it.taille, approche: 0, echelleH: 100,
                                  italique: it.italique, gras: false, interligne: null, couleur: it.couleur }],
                         [{ de: 0, a: 1, align: "left", retrait1: 0, retraitG: 0 }], null);
      l.name = c.c;
      ranger(l, g);
      placer(l, c.centre, c.angle);
    }
  }

  // ---------- Construction ----------
  $.global.__atelierConstruire = function () {
    for (var n = 0; n < SCENE.items.length; n++) {
      var it = SCENE.items[n];
      try {
        var cont = groupeDe(it), l;
        if (it.type === "forme") { l = forme(it.chemins, it.couleur, it.nom, null, it.xor); ranger(l, cont); }
        else if (it.type === "degrade") { l = formeDegradee(it); ranger(l, cont); }
        else if (it.type === "texte") { l = texte(it); ranger(l, cont); }
        else if (it.type === "arc") { arc(it, cont); }
        else if (it.type === "image") {
          l = forme(it.chemins, [128, 128, 128], "Forme \u2013 " + it.calqueNom); ranger(l, cont);
          if (it.detoure) { try { l.fillOpacity = 0; } catch (e) {} }  // image d\u00e9tour\u00e9e : la forme d\u00e9coupe sans se voir
          var img = doc.artLayers.add(); img.name = ">> " + it.calqueNom + " : colle ton image ici";
          ranger(img, cont); img.grouped = true;
        }
        else if (it.type === "zone") {
          l = forme(it.chemins, [0, 160, 233], "Zone \u2013 " + it.label); ranger(l, cont); l.opacity = 30;
        }
      } catch (e) { erreurs.push((it.nom || it.type) + " : " + e.message); }
    }
    // Rep\u00e8res
    var R = SCENE.reperes;
    var v = [R.coupe[0], R.coupe[1], R.secu[0], R.secu[1]].concat(SCENE.plis), h = [R.coupe[2], R.coupe[3], R.secu[2], R.secu[3]];
    for (var a = 0; a < v.length; a++) { try { doc.guides.add(Direction.VERTICAL, v[a]); } catch (e) {} }
    for (var b = 0; b < h.length; b++) { try { doc.guides.add(Direction.HORIZONTAL, h[b]); } catch (e) {} }
  };

  try { doc.suspendHistory("Atelier Retro", "__atelierConstruire()"); }
  catch (e) { erreurs.push("Construction : " + e.message); }

  doc.resizeImage(undefined, undefined, 300, ResampleMethod.NONE);
  app.preferences.rulerUnits = prefsRU; app.preferences.typeUnits = prefsTU; app.displayDialogs = dlg;

  var fichier = new File(File($.fileName).parent.fsName + "/" + File($.fileName).name.replace(/\.jsx$/i, "").replace(/_photoshop$/i, "") + ".psd");
  try { var o = new PhotoshopSaveOptions(); o.layers = true; doc.saveAs(fichier, o, false, Extension.LOWERCASE); }
  catch (e) { erreurs.push("Enregistrement : " + e.message); }

  alert("Atelier Retro \u2014 document construit.\n\n" +
        "Fichier : " + fichier.fsName + "\n" +
        "Rep\u00e8res : coupe (fond perdu " + "3 mm), s\u00e9curit\u00e9, plis.\n" +
        (manquantes.length ? "\nPolices remplac\u00e9es : " + manquantes.join(", ") + "\n" : "") +
        (erreurs.length ? "\n\u00c9l\u00e9ments non cr\u00e9\u00e9s (" + erreurs.length + ") :\n- " + erreurs.slice(0, 12).join("\n- ") : "\nAucune erreur."));

 } catch (err) {
  alert("Atelier Retro \u2014 erreur\n\nLigne " + err.line + " : " + err.message +
        "\n\nEnvoie une capture de ce message a Claude.");
 }
})();
