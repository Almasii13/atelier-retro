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
  var SCENE = {"titre": "Sachet Carddass DBGT \u30b9\u30fc\u30d1\u30fc\u30d0\u30c8\u30eb \u2014 recto 70,7x122,1", "fichier": "sachet_recto", "largeur": 906, "hauteur": 1513, "reperes": {"coupe": [35.43307086614173, 870.4724409448819, 35.43307086614173, 1477.55905511811], "secu": [64.96062992125985, 840.9448818897638, 64.96062992125985, 1448.0314960629921]}, "plis": [], "polices": ["BIZUDPGothic-Bold", "MPLUS1p-Black", "TeXGyreHeros-Bold"], "items": [{"calque": "fond", "calqueNom": "Fond vert", "groupe": "Fond", "nom": "Fond vert", "type": "forme", "couleur": [92, 180, 60], "chemins": [[{"a": [-0.03, -0.02]}, {"a": [905.84, -0.02]}, {"a": [905.84, 1512.91]}, {"a": [-0.03, 1512.91]}]]}, {"calque": "image:illustration", "calqueNom": "Illustration", "groupe": "", "nom": "slot detoure zone-pleine vide", "type": "image", "cle": "illustration", "label": "", "chemins": [[{"a": [0.0, 0.0]}, {"a": [906.25, 0.0]}, {"a": [906.25, 1512.5]}, {"a": [0.0, 1512.5]}]], "detoure": true}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bloc collection", "nom": "\u516846\u7a2e\u985e\u306e\u30ab\u30fc\u30c9\u3092\u53ce\u9332\u3002", "type": "texte", "texte": "\u516846\u7a2e\u985e\u306e\u30ab\u30fc\u30c9\u3092\u53ce\u9332\u3002", "runs": [{"de": 0, "a": 13, "police": "BIZUDPGothic-Bold", "taille": 28.35, "approche": 0, "interligne": 28.35, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 13, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [241.11, 96.06], "angle": 0.0, "encre": [332.44, 28.23], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bloc collection", "nom": "\u30d7\u30ea\u30ba\u30e0\u30ab\u30fc\u30c97\u7a2e\u3092\u542b\u3080", "type": "texte", "texte": "\u30d7\u30ea\u30ba\u30e0\u30ab\u30fc\u30c97\u7a2e\u3092\u542b\u3080", "runs": [{"de": 0, "a": 12, "police": "BIZUDPGothic-Bold", "taille": 28.35, "approche": 0, "interligne": 28.35, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 12, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [233.11, 130.15], "angle": 0.0, "encre": [317.27, 28.13], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bloc collection", "nom": "\uff08\u30c0\u30d6\u30eb\u30d7\u30ea\u30ba\u30e02\u7a2e\u3001\u30b7\u30fc\u30af\u30ec\u30c3\u30c8", "type": "texte", "texte": "\uff08\u30c0\u30d6\u30eb\u30d7\u30ea\u30ba\u30e02\u7a2e\u3001\u30b7\u30fc\u30af\u30ec\u30c3\u30c8", "runs": [{"de": 0, "a": 17, "police": "BIZUDPGothic-Bold", "taille": 28.35, "approche": 0, "interligne": 28.35, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [282.91, 164.84], "angle": 0.0, "encre": [416.41, 28.18], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bloc collection", "nom": "\u30d7\u30ea\u30ba\u30e02\u7a2e\u3001\u756a\u5916\u7de8\u30d7\u30ea\u30ba\u30e01\u7a2e\uff09", "type": "texte", "texte": "\u30d7\u30ea\u30ba\u30e02\u7a2e\u3001\u756a\u5916\u7de8\u30d7\u30ea\u30ba\u30e01\u7a2e\uff09", "runs": [{"de": 0, "a": 17, "police": "BIZUDPGothic-Bold", "taille": 28.35, "approche": 0, "interligne": 28.35, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [284.86, 198.72], "angle": 0.0, "encre": [420.06, 28.21], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bloc collection", "nom": "\u30b9\u30da\u30b7\u30e3\u30eb\u30d5\u30e9\u30c3\u30b7\u30e5\u30ab\u30fc\u30c91\u7a2e\u3002", "type": "texte", "texte": "\u30b9\u30da\u30b7\u30e3\u30eb\u30d5\u30e9\u30c3\u30b7\u30e5\u30ab\u30fc\u30c91\u7a2e\u3002", "runs": [{"de": 0, "a": 16, "police": "BIZUDPGothic-Bold", "taille": 28.35, "approche": 0, "interligne": 28.35, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 16, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [271.39, 232.0], "angle": 0.0, "encre": [393.87, 28.13], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Cartouche 5 cartes", "nom": "Cartouche bleu nuit", "type": "forme", "couleur": [29, 30, 54], "chemins": [[{"a": [645.06, 91.51]}, {"a": [803.68, 91.51]}, {"a": [803.68, 261.58]}, {"a": [645.06, 261.58]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Cartouche 5 cartes", "nom": "5", "type": "texte", "texte": "5", "runs": [{"de": 0, "a": 1, "police": "TeXGyreHeros-Bold", "taille": 56.69, "approche": 0, "interligne": 56.69, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [724.7, 128.47], "angle": 0.0, "encre": [28.15, 42.22], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Cartouche 5 cartes", "nom": "\u679a\u5165\u308a", "type": "texte", "texte": "\u679a\u5165\u308a", "runs": [{"de": 0, "a": 3, "police": "BIZUDPGothic-Bold", "taille": 24.8, "approche": 0, "interligne": 24.8, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [725.73, 168.56], "angle": 0.0, "encre": [69.41, 25.24], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Cartouche 5 cartes", "nom": "1\u30d1\u30c3\u30af", "type": "texte", "texte": "1\u30d1\u30c3\u30af", "runs": [{"de": 0, "a": 4, "police": "BIZUDPGothic-Bold", "taille": 24.8, "approche": 0, "interligne": 24.8, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [725.19, 200.88], "angle": 0.0, "encre": [80.16, 23.58], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Cartouche 5 cartes", "nom": "\u3042\u305f\u308a", "type": "texte", "texte": "\u3042\u305f\u308a", "runs": [{"de": 0, "a": 3, "police": "BIZUDPGothic-Bold", "taille": 24.8, "approche": 0, "interligne": 24.8, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [725.73, 235.68], "angle": 0.0, "encre": [67.84, 22.09], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "M\u00e9daillon orange", "type": "forme", "couleur": [196, 99, 44], "chemins": [[{"a": [840.88, 684.99]}, {"a": [840.75, 691.33]}, {"a": [840.33, 697.65]}, {"a": [839.64, 703.95]}, {"a": [838.68, 710.22]}, {"a": [837.44, 716.43]}, {"a": [835.93, 722.59]}, {"a": [834.16, 728.67]}, {"a": [832.12, 734.68]}, {"a": [829.83, 740.58]}, {"a": [827.27, 746.39]}, {"a": [824.47, 752.07]}, {"a": [821.42, 757.63]}, {"a": [818.13, 763.04]}, {"a": [814.61, 768.31]}, {"a": [810.86, 773.43]}, {"a": [806.9, 778.37]}, {"a": [802.72, 783.13]}, {"a": [798.33, 787.71]}, {"a": [793.76, 792.1]}, {"a": [788.99, 796.27]}, {"a": [784.05, 800.24]}, {"a": [778.94, 803.99]}, {"a": [773.67, 807.51]}, {"a": [768.25, 810.8]}, {"a": [762.69, 813.85]}, {"a": [757.01, 816.65]}, {"a": [751.21, 819.2]}, {"a": [745.3, 821.5]}, {"a": [739.3, 823.54]}, {"a": [733.21, 825.31]}, {"a": [727.06, 826.82]}, {"a": [720.84, 828.05]}, {"a": [714.57, 829.02]}, {"a": [708.27, 829.71]}, {"a": [701.95, 830.12]}, {"a": [695.61, 830.26]}, {"a": [689.28, 830.12]}, {"a": [682.95, 829.71]}, {"a": [676.65, 829.02]}, {"a": [670.39, 828.05]}, {"a": [664.17, 826.82]}, {"a": [658.01, 825.31]}, {"a": [651.93, 823.54]}, {"a": [645.93, 821.5]}, {"a": [640.02, 819.2]}, {"a": [634.22, 816.65]}, {"a": [628.53, 813.85]}, {"a": [622.98, 810.8]}, {"a": [617.56, 807.51]}, {"a": [612.29, 803.99]}, {"a": [607.18, 800.24]}, {"a": [602.24, 796.27]}, {"a": [597.47, 792.1]}, {"a": [592.89, 787.71]}, {"a": [588.51, 783.13]}, {"a": [584.33, 778.37]}, {"a": [580.36, 773.43]}, {"a": [576.61, 768.31]}, {"a": [573.09, 763.04]}, {"a": [569.81, 757.63]}, {"a": [566.76, 752.07]}, {"a": [563.95, 746.39]}, {"a": [561.4, 740.58]}, {"a": [559.1, 734.68]}, {"a": [557.07, 728.67]}, {"a": [555.29, 722.59]}, {"a": [553.79, 716.43]}, {"a": [552.55, 710.22]}, {"a": [551.59, 703.95]}, {"a": [550.9, 697.65]}, {"a": [550.48, 691.33]}, {"a": [550.34, 684.99]}, {"a": [550.48, 678.65]}, {"a": [550.9, 672.33]}, {"a": [551.59, 666.03]}, {"a": [552.55, 659.77]}, {"a": [553.79, 653.55]}, {"a": [555.29, 647.39]}, {"a": [557.07, 641.31]}, {"a": [559.1, 635.31]}, {"a": [561.4, 629.4]}, {"a": [563.95, 623.6]}, {"a": [566.76, 617.91]}, {"a": [569.81, 612.36]}, {"a": [573.09, 606.94]}, {"a": [576.61, 601.67]}, {"a": [580.36, 596.56]}, {"a": [584.33, 591.61]}, {"a": [588.51, 586.85]}, {"a": [592.89, 582.27]}, {"a": [597.47, 577.89]}, {"a": [602.24, 573.71]}, {"a": [607.18, 569.74]}, {"a": [612.29, 565.99]}, {"a": [617.56, 562.47]}, {"a": [622.98, 559.18]}, {"a": [628.53, 556.13]}, {"a": [634.22, 553.33]}, {"a": [640.02, 550.78]}, {"a": [645.93, 548.48]}, {"a": [651.93, 546.44]}, {"a": [658.01, 544.67]}, {"a": [664.17, 543.16]}, {"a": [670.39, 541.93]}, {"a": [676.65, 540.96]}, {"a": [682.95, 540.27]}, {"a": [689.28, 539.86]}, {"a": [695.61, 539.72]}, {"a": [701.95, 539.86]}, {"a": [708.27, 540.27]}, {"a": [714.57, 540.96]}, {"a": [720.84, 541.93]}, {"a": [727.06, 543.16]}, {"a": [733.21, 544.67]}, {"a": [739.3, 546.44]}, {"a": [745.3, 548.48]}, {"a": [751.21, 550.78]}, {"a": [757.01, 553.33]}, {"a": [762.69, 556.13]}, {"a": [768.25, 559.18]}, {"a": [773.67, 562.47]}, {"a": [778.94, 565.99]}, {"a": [784.05, 569.74]}, {"a": [788.99, 573.71]}, {"a": [793.76, 577.89]}, {"a": [798.33, 582.27]}, {"a": [802.72, 586.85]}, {"a": [806.9, 591.61]}, {"a": [810.86, 596.56]}, {"a": [814.61, 601.67]}, {"a": [818.13, 606.94]}, {"a": [821.42, 612.36]}, {"a": [824.47, 617.91]}, {"a": [827.27, 623.6]}, {"a": [829.83, 629.4]}, {"a": [832.12, 635.31]}, {"a": [834.16, 641.31]}, {"a": [835.93, 647.39]}, {"a": [837.44, 653.55]}, {"a": [838.68, 659.77]}, {"a": [839.64, 666.03]}, {"a": [840.33, 672.33]}, {"a": [840.75, 678.65]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Anneau argent", "type": "forme", "couleur": [217, 212, 202], "chemins": [[{"a": [757.32, 684.99]}, {"a": [757.26, 687.68]}, {"a": [757.09, 690.36]}, {"a": [756.79, 693.05]}, {"a": [756.39, 695.7]}, {"a": [755.86, 698.35]}, {"a": [755.22, 700.96]}, {"a": [754.47, 703.55]}, {"a": [753.6, 706.1]}, {"a": [752.62, 708.61]}, {"a": [751.54, 711.07]}, {"a": [750.36, 713.49]}, {"a": [749.06, 715.85]}, {"a": [747.66, 718.14]}, {"a": [746.16, 720.39]}, {"a": [744.57, 722.56]}, {"a": [742.89, 724.66]}, {"a": [741.11, 726.68]}, {"a": [739.25, 728.63]}, {"a": [737.3, 730.49]}, {"a": [735.29, 732.27]}, {"a": [733.18, 733.95]}, {"a": [731.01, 735.54]}, {"a": [728.77, 737.04]}, {"a": [726.46, 738.43]}, {"a": [724.11, 739.73]}, {"a": [721.69, 740.91]}, {"a": [719.23, 742.0]}, {"a": [716.72, 742.98]}, {"a": [714.17, 743.84]}, {"a": [711.58, 744.6]}, {"a": [708.97, 745.24]}, {"a": [706.33, 745.77]}, {"a": [703.67, 746.17]}, {"a": [700.99, 746.47]}, {"a": [698.31, 746.64]}, {"a": [695.61, 746.7]}, {"a": [692.92, 746.64]}, {"a": [690.24, 746.47]}, {"a": [687.56, 746.17]}, {"a": [684.9, 745.77]}, {"a": [682.26, 745.24]}, {"a": [679.65, 744.6]}, {"a": [677.06, 743.84]}, {"a": [674.51, 742.98]}, {"a": [671.99, 742.0]}, {"a": [669.54, 740.91]}, {"a": [667.11, 739.73]}, {"a": [664.75, 738.43]}, {"a": [662.46, 737.04]}, {"a": [660.22, 735.54]}, {"a": [658.04, 733.95]}, {"a": [655.94, 732.27]}, {"a": [653.92, 730.49]}, {"a": [651.97, 728.63]}, {"a": [650.12, 726.68]}, {"a": [648.34, 724.66]}, {"a": [646.66, 722.56]}, {"a": [645.06, 720.39]}, {"a": [643.56, 718.14]}, {"a": [642.17, 715.84]}, {"a": [640.87, 713.49]}, {"a": [639.69, 711.07]}, {"a": [638.6, 708.61]}, {"a": [637.62, 706.1]}, {"a": [636.76, 703.55]}, {"a": [636.01, 700.96]}, {"a": [635.37, 698.35]}, {"a": [634.84, 695.7]}, {"a": [634.43, 693.05]}, {"a": [634.14, 690.36]}, {"a": [633.96, 687.68]}, {"a": [633.9, 684.99]}, {"a": [633.96, 682.3]}, {"a": [634.14, 679.62]}, {"a": [634.43, 676.94]}, {"a": [634.84, 674.28]}, {"a": [635.37, 671.63]}, {"a": [636.01, 669.02]}, {"a": [636.76, 666.44]}, {"a": [637.62, 663.89]}, {"a": [638.6, 661.37]}, {"a": [639.69, 658.91]}, {"a": [640.87, 656.49]}, {"a": [642.17, 654.13]}, {"a": [643.56, 651.84]}, {"a": [645.06, 649.59]}, {"a": [646.66, 647.42]}, {"a": [648.34, 645.32]}, {"a": [650.12, 643.3]}, {"a": [651.97, 641.35]}, {"a": [653.92, 639.5]}, {"a": [655.94, 637.71]}, {"a": [658.04, 636.04]}, {"a": [660.22, 634.44]}, {"a": [662.46, 632.94]}, {"a": [664.76, 631.55]}, {"a": [667.11, 630.25]}, {"a": [669.54, 629.07]}, {"a": [671.99, 627.98]}, {"a": [674.51, 627.0]}, {"a": [677.06, 626.14]}, {"a": [679.65, 625.38]}, {"a": [682.26, 624.75]}, {"a": [684.9, 624.21]}, {"a": [687.56, 623.81]}, {"a": [690.24, 623.52]}, {"a": [692.92, 623.34]}, {"a": [695.61, 623.28]}, {"a": [698.31, 623.34]}, {"a": [700.99, 623.52]}, {"a": [703.67, 623.81]}, {"a": [706.33, 624.21]}, {"a": [708.97, 624.75]}, {"a": [711.58, 625.38]}, {"a": [714.17, 626.14]}, {"a": [716.72, 627.0]}, {"a": [719.23, 627.98]}, {"a": [721.69, 629.07]}, {"a": [724.11, 630.25]}, {"a": [726.47, 631.55]}, {"a": [728.77, 632.94]}, {"a": [731.01, 634.44]}, {"a": [733.18, 636.04]}, {"a": [735.29, 637.71]}, {"a": [737.3, 639.5]}, {"a": [739.25, 641.35]}, {"a": [741.11, 643.3]}, {"a": [742.89, 645.32]}, {"a": [744.57, 647.42]}, {"a": [746.16, 649.59]}, {"a": [747.66, 651.84]}, {"a": [749.06, 654.14]}, {"a": [750.36, 656.49]}, {"a": [751.54, 658.91]}, {"a": [752.62, 661.37]}, {"a": [753.6, 663.89]}, {"a": [754.47, 666.44]}, {"a": [755.22, 669.02]}, {"a": [755.86, 671.63]}, {"a": [756.39, 674.28]}, {"a": [756.79, 676.94]}, {"a": [757.09, 679.62]}, {"a": [757.26, 682.3]}], [{"a": [753.19, 684.99]}, {"a": [753.13, 687.51]}, {"a": [752.97, 690.01]}, {"a": [752.69, 692.5]}, {"a": [752.32, 694.99]}, {"a": [751.82, 697.45]}, {"a": [751.23, 699.9]}, {"a": [750.52, 702.31]}, {"a": [749.72, 704.68]}, {"a": [748.81, 707.03]}, {"a": [747.79, 709.32]}, {"a": [746.68, 711.58]}, {"a": [745.48, 713.79]}, {"a": [744.18, 715.92]}, {"a": [742.77, 718.01]}, {"a": [741.3, 720.05]}, {"a": [739.71, 722.01]}, {"a": [738.06, 723.9]}, {"a": [736.32, 725.7]}, {"a": [734.52, 727.44]}, {"a": [732.63, 729.09]}, {"a": [730.67, 730.67]}, {"a": [728.64, 732.15]}, {"a": [726.55, 733.56]}, {"a": [724.4, 734.86]}, {"a": [722.2, 736.06]}, {"a": [719.94, 737.17]}, {"a": [717.65, 738.19]}, {"a": [715.3, 739.1]}, {"a": [712.93, 739.9]}, {"a": [710.52, 740.61]}, {"a": [708.07, 741.2]}, {"a": [705.62, 741.69]}, {"a": [703.12, 742.07]}, {"a": [700.63, 742.34]}, {"a": [698.13, 742.51]}, {"a": [695.61, 742.57]}, {"a": [693.1, 742.51]}, {"a": [690.59, 742.34]}, {"a": [688.1, 742.07]}, {"a": [685.61, 741.69]}, {"a": [683.15, 741.2]}, {"a": [680.71, 740.61]}, {"a": [678.3, 739.9]}, {"a": [675.92, 739.1]}, {"a": [673.57, 738.19]}, {"a": [671.28, 737.17]}, {"a": [669.03, 736.06]}, {"a": [666.82, 734.86]}, {"a": [664.68, 733.56]}, {"a": [662.59, 732.15]}, {"a": [660.56, 730.67]}, {"a": [658.6, 729.09]}, {"a": [656.71, 727.44]}, {"a": [654.9, 725.7]}, {"a": [653.17, 723.88]}, {"a": [651.51, 722.01]}, {"a": [649.93, 720.05]}, {"a": [648.45, 718.01]}, {"a": [647.05, 715.92]}, {"a": [645.75, 713.77]}, {"a": [644.54, 711.58]}, {"a": [643.43, 709.32]}, {"a": [642.42, 707.03]}, {"a": [641.51, 704.68]}, {"a": [640.71, 702.31]}, {"a": [640.0, 699.9]}, {"a": [639.41, 697.45]}, {"a": [638.91, 694.99]}, {"a": [638.53, 692.5]}, {"a": [638.26, 690.01]}, {"a": [638.1, 687.51]}, {"a": [638.04, 684.99]}, {"a": [638.1, 682.48]}, {"a": [638.26, 679.97]}, {"a": [638.53, 677.48]}, {"a": [638.91, 674.99]}, {"a": [639.41, 672.53]}, {"a": [640.0, 670.09]}, {"a": [640.71, 667.68]}, {"a": [641.51, 665.3]}, {"a": [642.42, 662.95]}, {"a": [643.43, 660.66]}, {"a": [644.54, 658.41]}, {"a": [645.75, 656.2]}, {"a": [647.05, 654.06]}, {"a": [648.45, 651.97]}, {"a": [649.93, 649.94]}, {"a": [651.51, 647.98]}, {"a": [653.17, 646.09]}, {"a": [654.9, 644.28]}, {"a": [656.72, 642.54]}, {"a": [658.6, 640.89]}, {"a": [660.56, 639.31]}, {"a": [662.59, 637.83]}, {"a": [664.68, 636.43]}, {"a": [666.83, 635.13]}, {"a": [669.03, 633.92]}, {"a": [671.28, 632.81]}, {"a": [673.57, 631.8]}, {"a": [675.92, 630.89]}, {"a": [678.3, 630.08]}, {"a": [680.71, 629.38]}, {"a": [683.15, 628.78]}, {"a": [685.61, 628.29]}, {"a": [688.1, 627.91]}, {"a": [690.59, 627.64]}, {"a": [693.1, 627.47]}, {"a": [695.61, 627.41]}, {"a": [698.13, 627.47]}, {"a": [700.63, 627.64]}, {"a": [703.12, 627.91]}, {"a": [705.62, 628.29]}, {"a": [708.07, 628.78]}, {"a": [710.52, 629.38]}, {"a": [712.93, 630.08]}, {"a": [715.3, 630.89]}, {"a": [717.65, 631.8]}, {"a": [719.94, 632.81]}, {"a": [722.2, 633.92]}, {"a": [724.41, 635.13]}, {"a": [726.55, 636.43]}, {"a": [728.64, 637.83]}, {"a": [730.67, 639.31]}, {"a": [732.63, 640.89]}, {"a": [734.52, 642.54]}, {"a": [736.32, 644.28]}, {"a": [738.06, 646.1]}, {"a": [739.71, 647.98]}, {"a": [741.3, 649.94]}, {"a": [742.77, 651.97]}, {"a": [744.18, 654.06]}, {"a": [745.48, 656.21]}, {"a": [746.68, 658.41]}, {"a": [747.79, 660.66]}, {"a": [748.81, 662.95]}, {"a": [749.72, 665.3]}, {"a": [750.52, 667.68]}, {"a": [751.23, 670.09]}, {"a": [751.82, 672.53]}, {"a": [752.32, 674.99]}, {"a": [752.69, 677.48]}, {"a": [752.97, 679.97]}, {"a": [753.13, 682.48]}]], "xor": true}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "\u00c9toile", "type": "forme", "couleur": [217, 212, 202], "chemins": [[{"a": [695.61, 653.69]}, {"a": [702.64, 675.32]}, {"a": [725.38, 675.32]}, {"a": [706.99, 688.69]}, {"a": [714.01, 710.31]}, {"a": [695.61, 696.94]}, {"a": [677.21, 710.31]}, {"a": [684.24, 688.69]}, {"a": [665.85, 675.32]}, {"a": [688.59, 675.32]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Point", "type": "forme", "couleur": [217, 212, 202], "chemins": [[{"a": [601.1, 695.73]}, {"a": [601.1, 696.06]}, {"a": [601.08, 696.4]}, {"a": [601.04, 696.73]}, {"a": [600.99, 697.06]}, {"a": [600.92, 697.39]}, {"a": [600.84, 697.71]}, {"a": [600.75, 698.04]}, {"a": [600.64, 698.35]}, {"a": [600.52, 698.66]}, {"a": [600.39, 698.97]}, {"a": [600.24, 699.27]}, {"a": [600.08, 699.57]}, {"a": [599.9, 699.85]}, {"a": [599.72, 700.13]}, {"a": [599.52, 700.4]}, {"a": [599.31, 700.66]}, {"a": [599.09, 700.91]}, {"a": [598.86, 701.16]}, {"a": [598.61, 701.39]}, {"a": [598.36, 701.61]}, {"a": [598.1, 701.82]}, {"a": [597.83, 702.02]}, {"a": [597.55, 702.2]}, {"a": [597.27, 702.38]}, {"a": [596.97, 702.54]}, {"a": [596.67, 702.68]}, {"a": [596.37, 702.82]}, {"a": [596.05, 702.94]}, {"a": [595.74, 703.05]}, {"a": [595.41, 703.14]}, {"a": [595.09, 703.22]}, {"a": [594.76, 703.29]}, {"a": [594.43, 703.34]}, {"a": [594.1, 703.37]}, {"a": [593.76, 703.4]}, {"a": [593.43, 703.4]}, {"a": [593.09, 703.4]}, {"a": [592.76, 703.37]}, {"a": [592.43, 703.34]}, {"a": [592.09, 703.29]}, {"a": [591.77, 703.22]}, {"a": [591.44, 703.14]}, {"a": [591.12, 703.05]}, {"a": [590.8, 702.94]}, {"a": [590.49, 702.82]}, {"a": [590.18, 702.68]}, {"a": [589.88, 702.54]}, {"a": [589.59, 702.38]}, {"a": [589.3, 702.2]}, {"a": [589.02, 702.02]}, {"a": [588.75, 701.82]}, {"a": [588.49, 701.61]}, {"a": [588.24, 701.39]}, {"a": [588.0, 701.16]}, {"a": [587.77, 700.91]}, {"a": [587.55, 700.66]}, {"a": [587.34, 700.4]}, {"a": [587.14, 700.13]}, {"a": [586.95, 699.85]}, {"a": [586.78, 699.57]}, {"a": [586.62, 699.27]}, {"a": [586.47, 698.97]}, {"a": [586.34, 698.66]}, {"a": [586.21, 698.35]}, {"a": [586.11, 698.04]}, {"a": [586.01, 697.71]}, {"a": [585.93, 697.39]}, {"a": [585.87, 697.06]}, {"a": [585.82, 696.73]}, {"a": [585.78, 696.4]}, {"a": [585.76, 696.06]}, {"a": [585.75, 695.73]}, {"a": [585.76, 695.39]}, {"a": [585.78, 695.06]}, {"a": [585.82, 694.72]}, {"a": [585.87, 694.39]}, {"a": [585.93, 694.07]}, {"a": [586.01, 693.74]}, {"a": [586.11, 693.42]}, {"a": [586.21, 693.1]}, {"a": [586.34, 692.79]}, {"a": [586.47, 692.48]}, {"a": [586.62, 692.18]}, {"a": [586.78, 691.89]}, {"a": [586.95, 691.6]}, {"a": [587.14, 691.32]}, {"a": [587.34, 691.05]}, {"a": [587.55, 690.79]}, {"a": [587.77, 690.54]}, {"a": [588.0, 690.3]}, {"a": [588.24, 690.07]}, {"a": [588.49, 689.85]}, {"a": [588.75, 689.64]}, {"a": [589.02, 689.44]}, {"a": [589.3, 689.25]}, {"a": [589.59, 689.08]}, {"a": [589.88, 688.92]}, {"a": [590.18, 688.77]}, {"a": [590.49, 688.63]}, {"a": [590.8, 688.51]}, {"a": [591.12, 688.41]}, {"a": [591.44, 688.31]}, {"a": [591.77, 688.23]}, {"a": [592.09, 688.17]}, {"a": [592.43, 688.12]}, {"a": [592.76, 688.08]}, {"a": [593.09, 688.06]}, {"a": [593.43, 688.05]}, {"a": [593.76, 688.06]}, {"a": [594.1, 688.08]}, {"a": [594.43, 688.12]}, {"a": [594.76, 688.17]}, {"a": [595.09, 688.23]}, {"a": [595.41, 688.31]}, {"a": [595.74, 688.41]}, {"a": [596.05, 688.51]}, {"a": [596.37, 688.63]}, {"a": [596.67, 688.77]}, {"a": [596.97, 688.92]}, {"a": [597.27, 689.08]}, {"a": [597.55, 689.25]}, {"a": [597.83, 689.44]}, {"a": [598.1, 689.64]}, {"a": [598.36, 689.85]}, {"a": [598.61, 690.07]}, {"a": [598.86, 690.3]}, {"a": [599.09, 690.54]}, {"a": [599.31, 690.79]}, {"a": [599.52, 691.05]}, {"a": [599.72, 691.32]}, {"a": [599.9, 691.6]}, {"a": [600.08, 691.89]}, {"a": [600.24, 692.18]}, {"a": [600.39, 692.48]}, {"a": [600.52, 692.79]}, {"a": [600.64, 693.1]}, {"a": [600.75, 693.42]}, {"a": [600.84, 693.74]}, {"a": [600.92, 694.07]}, {"a": [600.99, 694.39]}, {"a": [601.04, 694.72]}, {"a": [601.08, 695.06]}, {"a": [601.1, 695.39]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Point", "type": "forme", "couleur": [217, 212, 202], "chemins": [[{"a": [805.79, 692.16]}, {"a": [805.79, 692.5]}, {"a": [805.77, 692.83]}, {"a": [805.73, 693.16]}, {"a": [805.68, 693.49]}, {"a": [805.61, 693.82]}, {"a": [805.53, 694.15]}, {"a": [805.44, 694.47]}, {"a": [805.33, 694.79]}, {"a": [805.21, 695.1]}, {"a": [805.08, 695.4]}, {"a": [804.93, 695.7]}, {"a": [804.77, 696.0]}, {"a": [804.59, 696.28]}, {"a": [804.41, 696.56]}, {"a": [804.21, 696.83]}, {"a": [804.0, 697.09]}, {"a": [803.78, 697.35]}, {"a": [803.55, 697.59]}, {"a": [803.3, 697.82]}, {"a": [803.05, 698.04]}, {"a": [802.79, 698.25]}, {"a": [802.52, 698.45]}, {"a": [802.24, 698.63]}, {"a": [801.96, 698.81]}, {"a": [801.66, 698.97]}, {"a": [801.36, 699.12]}, {"a": [801.06, 699.25]}, {"a": [800.74, 699.37]}, {"a": [800.43, 699.48]}, {"a": [800.1, 699.58]}, {"a": [799.78, 699.66]}, {"a": [799.45, 699.72]}, {"a": [799.12, 699.77]}, {"a": [798.79, 699.81]}, {"a": [798.45, 699.83]}, {"a": [798.12, 699.84]}, {"a": [797.78, 699.83]}, {"a": [797.45, 699.81]}, {"a": [797.12, 699.77]}, {"a": [796.78, 699.72]}, {"a": [796.46, 699.66]}, {"a": [796.13, 699.58]}, {"a": [795.81, 699.48]}, {"a": [795.49, 699.37]}, {"a": [795.18, 699.25]}, {"a": [794.87, 699.12]}, {"a": [794.57, 698.97]}, {"a": [794.28, 698.81]}, {"a": [793.99, 698.63]}, {"a": [793.71, 698.45]}, {"a": [793.44, 698.25]}, {"a": [793.18, 698.04]}, {"a": [792.93, 697.82]}, {"a": [792.69, 697.59]}, {"a": [792.46, 697.35]}, {"a": [792.24, 697.09]}, {"a": [792.03, 696.83]}, {"a": [791.83, 696.56]}, {"a": [791.64, 696.28]}, {"a": [791.47, 696.0]}, {"a": [791.31, 695.7]}, {"a": [791.16, 695.4]}, {"a": [791.02, 695.1]}, {"a": [790.9, 694.79]}, {"a": [790.8, 694.47]}, {"a": [790.7, 694.15]}, {"a": [790.62, 693.82]}, {"a": [790.56, 693.49]}, {"a": [790.51, 693.16]}, {"a": [790.47, 692.83]}, {"a": [790.45, 692.5]}, {"a": [790.44, 692.16]}, {"a": [790.45, 691.83]}, {"a": [790.47, 691.49]}, {"a": [790.51, 691.16]}, {"a": [790.56, 690.83]}, {"a": [790.62, 690.5]}, {"a": [790.7, 690.17]}, {"a": [790.8, 689.85]}, {"a": [790.9, 689.53]}, {"a": [791.02, 689.22]}, {"a": [791.16, 688.92]}, {"a": [791.31, 688.62]}, {"a": [791.47, 688.32]}, {"a": [791.64, 688.04]}, {"a": [791.83, 687.76]}, {"a": [792.03, 687.49]}, {"a": [792.24, 687.23]}, {"a": [792.46, 686.97]}, {"a": [792.69, 686.73]}, {"a": [792.93, 686.5]}, {"a": [793.18, 686.28]}, {"a": [793.44, 686.07]}, {"a": [793.71, 685.87]}, {"a": [793.99, 685.69]}, {"a": [794.28, 685.51]}, {"a": [794.57, 685.35]}, {"a": [794.87, 685.2]}, {"a": [795.18, 685.07]}, {"a": [795.49, 684.95]}, {"a": [795.81, 684.84]}, {"a": [796.13, 684.74]}, {"a": [796.46, 684.67]}, {"a": [796.78, 684.6]}, {"a": [797.12, 684.55]}, {"a": [797.45, 684.51]}, {"a": [797.78, 684.49]}, {"a": [798.12, 684.48]}, {"a": [798.45, 684.49]}, {"a": [798.79, 684.51]}, {"a": [799.12, 684.55]}, {"a": [799.45, 684.6]}, {"a": [799.78, 684.67]}, {"a": [800.1, 684.74]}, {"a": [800.43, 684.84]}, {"a": [800.74, 684.95]}, {"a": [801.06, 685.07]}, {"a": [801.36, 685.2]}, {"a": [801.66, 685.35]}, {"a": [801.96, 685.51]}, {"a": [802.24, 685.69]}, {"a": [802.52, 685.87]}, {"a": [802.79, 686.07]}, {"a": [803.05, 686.28]}, {"a": [803.3, 686.5]}, {"a": [803.55, 686.73]}, {"a": [803.78, 686.97]}, {"a": [804.0, 687.23]}, {"a": [804.21, 687.49]}, {"a": [804.41, 687.76]}, {"a": [804.59, 688.04]}, {"a": [804.77, 688.32]}, {"a": [804.93, 688.62]}, {"a": [805.08, 688.92]}, {"a": [805.21, 689.22]}, {"a": [805.33, 689.53]}, {"a": [805.44, 689.85]}, {"a": [805.53, 690.17]}, {"a": [805.61, 690.5]}, {"a": [805.68, 690.83]}, {"a": [805.73, 691.16]}, {"a": [805.77, 691.49]}, {"a": [805.79, 691.83]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Texte en arc \u2013 \u30b9", "type": "arc", "police": "MPLUS1p-Black", "taille": 38.97, "couleur": [217, 212, 202], "italique": true, "car": [{"c": "\u30b9", "centre": [621.19, 634.8], "angle": -56}]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Texte en arc \u2013 \u30fc", "type": "arc", "police": "MPLUS1p-Black", "taille": 38.97, "couleur": [217, 212, 202], "italique": true, "car": [{"c": "\u30fc", "centre": [662.96, 601.38], "angle": -21.33}]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Texte en arc \u2013 \u30d1", "type": "arc", "police": "MPLUS1p-Black", "taille": 38.97, "couleur": [217, 212, 202], "italique": true, "car": [{"c": "\u30d1", "centre": [716.32, 597.65], "angle": 13.33}]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Texte en arc \u2013 \u30fc", "type": "arc", "police": "MPLUS1p-Black", "taille": 38.97, "couleur": [217, 212, 202], "italique": true, "car": [{"c": "\u30fc", "centre": [762.32, 624.93], "angle": 48}]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Texte en arc \u2013 \u30d0", "type": "arc", "police": "MPLUS1p-Black", "taille": 38.97, "couleur": [217, 212, 202], "italique": true, "car": [{"c": "\u30d0", "centre": [640.35, 755.72], "angle": 38.0}]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Texte en arc \u2013 \u30c8", "type": "arc", "police": "MPLUS1p-Black", "taille": 38.97, "couleur": [217, 212, 202], "italique": false, "car": [{"c": "\u30c8", "centre": [695.61, 774.75], "angle": 0}]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "M\u00e9daillon", "nom": "Texte en arc \u2013 \u30eb", "type": "arc", "police": "MPLUS1p-Black", "taille": 38.97, "couleur": [217, 212, 202], "italique": true, "car": [{"c": "\u30eb", "centre": [750.88, 755.72], "angle": -38.0}]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Onglet \u7b2c9\u5f3e", "nom": "Onglet bleu nuit", "type": "forme", "couleur": [29, 30, 54], "chemins": [[{"a": [-0.03, 1047.58]}, {"a": [240.31, 1047.58]}, {"a": [240.31, 1142.3]}, {"a": [-0.03, 1142.3]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Onglet \u7b2c9\u5f3e", "nom": "\u7b2c", "type": "texte", "texte": "\u7b2c", "runs": [{"de": 0, "a": 1, "police": "BIZUDPGothic-Bold", "taille": 37.8, "approche": 0, "interligne": 37.8, "couleur": [216, 208, 189], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [98.07, 1105.44], "angle": 0.0, "encre": [34.4, 37.53], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Onglet \u7b2c9\u5f3e", "nom": "9", "type": "texte", "texte": "9", "runs": [{"de": 0, "a": 1, "police": "TeXGyreHeros-Bold", "taille": 70.87, "approche": 0, "interligne": 70.87, "couleur": [216, 208, 189], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [138.61, 1095.5], "angle": 0.0, "encre": [36.18, 53.48], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Onglet \u7b2c9\u5f3e", "nom": "\u5f3e", "type": "texte", "texte": "\u5f3e", "runs": [{"de": 0, "a": 1, "police": "BIZUDPGothic-Bold", "taille": 37.8, "approche": 0, "interligne": 37.8, "couleur": [216, 208, 189], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [177.58, 1104.67], "angle": 0.0, "encre": [37.53, 37.53], "vertical": false, "boite": null}, {"calque": "image:logo_carddass", "calqueNom": "Logo Carddass", "groupe": "", "nom": "slot detoure vide", "type": "image", "cle": "logo_carddass", "label": "", "chemins": [[{"a": [44.82, 263.33]}, {"a": [854.2, 263.33]}, {"a": [854.2, 478.96]}, {"a": [44.82, 478.96]}]], "detoure": true}, {"calque": "image:logo_dbgt", "calqueNom": "Logo Dragon Ball GT", "groupe": "", "nom": "slot detoure vide", "type": "image", "cle": "logo_dbgt", "label": "", "chemins": [[{"a": [68.46, 1282.62]}, {"a": [459.08, 1282.62]}, {"a": [459.08, 1451.37]}, {"a": [68.46, 1451.37]}]], "detoure": true}, {"calque": "image:logo_bandai", "calqueNom": "Logo Bandai", "groupe": "", "nom": "slot detoure vide", "type": "image", "cle": "logo_bandai", "label": "", "chemins": [[{"a": [696.19, 1310.74]}, {"a": [811.82, 1310.74]}, {"a": [811.82, 1423.24]}, {"a": [696.19, 1423.24]}]], "detoure": true}], "motifs": {}, "images": {}};
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
    var tl = new ActionList(), avecAlpha = false;
    for (var q = 0; q < stops.length; q++) if (stops[q].a !== undefined) avecAlpha = true;
    var nT = avecAlpha ? stops.length : 2;
    for (var k = 0; k < nT; k++) {
      var t = new ActionDescriptor();
      t.putUnitDouble(cTID("Opct"), cTID("#Prc"), avecAlpha ? Math.round((stops[k].a === undefined ? 1 : stops[k].a) * 100) : 100);
      t.putInteger(cTID("Lctn"), avecAlpha ? Math.round(Math.max(0, Math.min(1, stops[k].pos)) * 4096) : k * 4096);
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
    if (it.opacite) { try { l.opacity = it.opacite; } catch (e) {} }
    if (it.degradeTexte) { try { incrustationDegrade(it.degradeTexte); } catch (e) { erreurs.push(it.nom + " (d\u00e9grad\u00e9 du texte) : " + e.message); } }
    return l;
  }

  // ---------- Textures incrust\u00e9es (motif bois\u2026) ----------
  // Le PNG est embarqu\u00e9 en base64 dans le script : \u00e9crit dans le dossier temporaire, ouvert, copi\u00e9,
  // puis coll\u00e9 juste au-dessus du texte en calque \u00e9cr\u00eat\u00e9 (masque d'\u00e9cr\u00eatage) : le texte reste modifiable.
  function b64bin(s) {
    // d\u00e9codage par blocs (table de correspondance, morceaux de 4096 octets) : rapide m\u00eame pour un gros fichier
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", T = {}, morceaux = [], o = [];
    for (var k = 0; k < 64; k++) T[t.charAt(k)] = k;
    var b = 0, n = 0;
    for (var i = 0; i < s.length; i++) {
      var c = T[s.charAt(i)];
      if (c === undefined) continue;
      b = ((b << 6) | c) & 0xFFFFFF; n += 6;
      if (n >= 8) { n -= 8; o.push((b >> n) & 255); if (o.length >= 4096) { morceaux.push(String.fromCharCode.apply(null, o)); o = []; } }
    }
    if (o.length) morceaux.push(String.fromCharCode.apply(null, o));
    return morceaux.join("");
  }
  var fichiersMotifs = {};
  function fichierMotif(cle) {
    if (fichiersMotifs[cle]) return fichiersMotifs[cle];
    var f = new File(Folder.temp.fsName + "/atelier_motif_" + cle + ".png");
    f.encoding = "BINARY"; f.open("w"); f.write(b64bin(SCENE.motifs[cle].b64)); f.close();
    fichiersMotifs[cle] = f;
    return f;
  }
  // Texture plac\u00e9e (Fichier > Importer incorpor\u00e9) dans le document lui-m\u00eame : aucun changement de document,
  // compatible avec l'historique suspendu ; repli : ouverture + copier-coller.
  function poserMotif(texteCalque, it) {
    var f = fichierMotif(it.motif), m = SCENE.motifs[it.motif], l = null;
    doc.activeLayer = texteCalque;
    try {
      var d = new ActionDescriptor();
      d.putPath(cTID("null"), f);
      d.putEnumerated(cTID("FTcs"), cTID("QCSt"), cTID("Qcsa"));
      executeAction(cTID("Plc "), d, DialogModes.NO);
      l = doc.activeLayer;
      if (l === texteCalque) throw new Error("import incorpor\u00e9 refus\u00e9");
    } catch (e1) {
      var tex = app.open(f);
      tex.selection.selectAll(); tex.selection.copy();
      tex.close(SaveOptions.DONOTSAVECHANGES);
      app.activeDocument = doc; doc.activeLayer = texteCalque;
      l = doc.paste(); if (!l || l === texteCalque) l = doc.activeLayer;
    }
    l.name = "Motif " + it.motif + " (incrust\u00e9 dans \u00ab " + it.nom + " \u00bb)";
    // taille exacte de la texture (l'import peut la redimensionner selon les pr\u00e9f\u00e9rences)
    var b = l.bounds, w = px(b[2]) - px(b[0]), h = px(b[3]) - px(b[1]);
    if (w > 0 && h > 0 && (Math.abs(w - m.l) > 1 || Math.abs(h - m.h) > 1)) l.resize(m.l / w * 100, m.h / h * 100, AnchorPosition.MIDDLECENTER);
    var c = centreEncre(l);
    l.translate(it.centre[0] - c[0], it.centre[1] - c[1]);
    l.grouped = true;  // masque d'\u00e9cr\u00eatage sur le texte
    return l;
  }
  var motifsAPoser = [], imagesAPoser = [];

  // ---------- Images des emplacements (logos, photos) ----------
  var fichiersImages = {};
  function fichierImage(cle) {
    if (fichiersImages[cle]) return fichiersImages[cle];
    if (SCENE.images[cle].fichier) {
      // image livr\u00e9e \u00e0 c\u00f4t\u00e9 du script (dossier <nom>_images) : ouverte directement, sans d\u00e9codage
      var g = new File(File($.fileName).parent.fsName + "/" + SCENE.images[cle].fichier);
      if (!g.exists) throw new Error("fichier introuvable : " + SCENE.images[cle].fichier + " (\u00e0 laisser \u00e0 c\u00f4t\u00e9 du script)");
      fichiersImages[cle] = g;
      return g;
    }
    var f = new File(Folder.temp.fsName + "/atelier_image_" + cle + ".png");
    f.encoding = "BINARY"; f.open("w"); f.write(b64bin(SCENE.images[cle].b64)); f.close();
    fichiersImages[cle] = f;
    return f;
  }
  // base : calque forme sur lequel l'image est \u00e9cr\u00eat\u00e9e (null = image pos\u00e9e librement, PNG d\u00e9tour\u00e9)
  function poserImage(base, it) {
    var src = app.open(fichierImage(it.image));
    src.selection.selectAll(); src.selection.copy();
    src.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument = doc;
    if (base) doc.activeLayer = base;
    var l = doc.paste();
    if (!l || l === base) l = doc.activeLayer;
    l.name = it.calqueNom;
    var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (var c = 0; c < it.chemins.length; c++) for (var p = 0; p < it.chemins[c].length; p++) {
      var a = it.chemins[c][p].a;
      x0 = Math.min(x0, a[0]); x1 = Math.max(x1, a[0]); y0 = Math.min(y0, a[1]); y1 = Math.max(y1, a[1]);
    }
    var b = l.bounds, w = px(b[2]) - px(b[0]), h = px(b[3]) - px(b[1]);
    var s = it.detoure ? Math.min((x1 - x0) / w, (y1 - y0) / h) : Math.max((x1 - x0) / w, (y1 - y0) / h);
    if (Math.abs(s - 1) > 0.002) l.resize(s * 100, s * 100, AnchorPosition.MIDDLECENTER);
    var c2 = centreEncre(l);
    l.translate((x0 + x1) / 2 - c2[0], (y0 + y1) / 2 - c2[1]);
    if (base) l.grouped = true;
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
        if (it.type === "forme") {
          l = forme(it.chemins, it.couleur, it.nom, null, it.xor); ranger(l, cont);
          if (it.opacite) { try { l.opacity = it.opacite; } catch (e) {} }
        }
        else if (it.type === "degrade") { l = formeDegradee(it); ranger(l, cont); }
        else if (it.type === "texte") {
          l = texte(it); ranger(l, cont);
          if (it.motif && SCENE.motifs && SCENE.motifs[it.motif]) {
            motifsAPoser.push({ l: l, it: it });  // pos\u00e9s apr\u00e8s la construction (hors historique suspendu)
          }
        }
        else if (it.type === "arc") { arc(it, cont); }
        else if (it.type === "image") {
          var avecImage = !!(it.image && SCENE.images && SCENE.images[it.image]);
          if (avecImage && it.detoure) {
            // logo / personnage d\u00e9tour\u00e9 : calque rep\u00e8re \u00e0 sa place, l'image est pos\u00e9e apr\u00e8s la construction
            l = doc.artLayers.add(); l.name = it.calqueNom; ranger(l, cont);
            imagesAPoser.push({ repere: l, it: it });
          } else if (avecImage) {
            // photo / texture : forme maintenant, image \u00e9cr\u00eat\u00e9e dessus apr\u00e8s la construction
            l = forme(it.chemins, [128, 128, 128], "Forme \u2013 " + it.calqueNom); ranger(l, cont);
            imagesAPoser.push({ base: l, it: it });
          }
          if (!avecImage) {
            l = forme(it.chemins, [128, 128, 128], "Forme \u2013 " + it.calqueNom); ranger(l, cont);
            if (it.detoure) { try { l.fillOpacity = 0; } catch (e) {} }  // image d\u00e9tour\u00e9e : la forme d\u00e9coupe sans se voir
            var img = doc.artLayers.add(); img.name = ">> " + it.calqueNom + " : colle ton image ici";
            ranger(img, cont); img.grouped = true;
          }
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
  // Images : ouvertes et coll\u00e9es hors de l'historique suspendu (ouvrir un autre document pendant
  // suspendHistory peut bloquer Photoshop)
  for (var im = 0; im < imagesAPoser.length; im++) {
    var P = imagesAPoser[im];
    try {
      if (P.base) { poserImage(P.base, P.it); }
      else { doc.activeLayer = P.repere; poserImage(null, P.it); P.repere.remove(); }
    } catch (e) {
      erreurs.push(P.it.calqueNom + " (image) : " + e.message);
      try {
        var vide = doc.artLayers.add(); vide.name = ">> " + P.it.calqueNom + " : colle ton image ici";
        if (P.base) { vide.move(P.base, ElementPlacement.PLACEBEFORE); vide.grouped = true; }
        else { vide.move(P.repere, ElementPlacement.PLACEBEFORE); P.repere.remove(); }
      } catch (e2) {}
    }
  }
  for (var mo = 0; mo < motifsAPoser.length; mo++) {
    try { poserMotif(motifsAPoser[mo].l, motifsAPoser[mo].it); }
    catch (e) { erreurs.push(motifsAPoser[mo].it.nom + " (motif " + motifsAPoser[mo].it.motif + ") : " + e.message); }
  }

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
