###### README.md >> markdown

![ServalApp](https://img.shields.io/badge/ServalApp-Night--Ops-black)
![Status](https://img.shields.io/badge/Status-Active-success)
![iPhone](https://img.shields.io/badge/Support-iPhone-blue)
![iPad](https://img.shields.io/badge/Support-iPad-blue)
![Android](https://img.shields.io/badge/Android-En%20développement-blue)
![Security](https://img.shields.io/badge/Security-Scan%20Weekly-red)

# 📘 ServalApp
Prototype modernisé du concept Serval Mesh, réorganisé en projet GitHub propre, stable et documenté.

### 📱 Compatibilité

![iOS Compatible](https://img.shields.io/badge/iPhone/iPad-Compatible-3b82f6?style=for-the-badge&logo=apple)
![Android In Progress](https://img.shields.io/badge/Android-Version_en_cours-amber?style=for-the-badge&logo=android)

- **ServalApp est actuellement optimisé pour **iPhone et iPad**, tous modèles et versions iOS.**
- *Une **version Android** est en cours de développement et sera intégrée prochainement au projet*.

- Ce dépôt contient :
   - une interface HTML statique servant de hub de navigation,
   - des écrans prototypes (iPhone, iPad, Chat Phase 1),
   - une structure d’assets modernisée,
   - une documentation regroupée dans docs/.

### 🔧 Explication intégrée
> **INDEX.HTML**
- Ton index.html est maintenant auto‑suffisant :
   - Tous les liens d’icônes sont intégrés directement dans le <head>.
   - Compatibilité iPhone / iPad / Android / Windows / Web.
   - Le dossier assets/icons/ contient toutes les images nécessaires.
   - Le code est prêt pour GitHub Pages ou tout hébergement statique.

### 🏷️ Labels ServalApp
- ServalApp utilise un pack de labels tactiques pour organiser le projet :
   - `bug` – anomalies
   - `enhancement` – améliorations
   - `ios` – compatibilité iPhone
   - `ipad` – compatibilité iPad
   - `android` – compatibilité Android
   - `documentation` – docs
   - `security` – sécurité
   - `ui` – interface utilisateur
   - `night-ops` – style militaire
 
### 📂 Structure du projet
```text
ServalApp/
│
├── README.md
├── LICENSE
├── .gitignore
├── index.html
├── assets/
│   ├── README.md 
│   ├── stylesheets/
│   │   └── style.css
│   ├── javascripts/
│   │   ├── modernizr.js
│   │   ├── jquery.min.js
│   │   ├── bootstrap.js
│   │   ├── svg.js
│   │   ├── flexslider.js
│   │   └── scripts.js
│   └── icons/
│       ├── README.md
│       └── complet-image.jpg
├── screens/
│   ├── README.md 
│   ├── p1_s1.html
│   ├── p1_s2.html
│   ├── iphone_main.html
│   ├── ipad_main.html
│   ├── iphone_conversation.html
│   ├── iphone_media.html
└── docs/
    ├── README.md 
    ├── briefing.md
    ├── rebranding.md
    ├── wireframe_one_on_one.md
    ├── wireframe_camera.md
    ├── succint_data.md
    ├── adoption.md
    ├── initial_wireframe.md
    ├── proposal.md
    ├── onboarding.md
    ├── maps.md
    └── other_ideas.md
    ├── deploying.md
    ├── README-PAGES.md
├── .github/
│   └── .gitkeep
│   ├── ISSUE_TEMPLATE/
│   │   └── .gitkeep
│   ├── workflows/
│   │   └── .gitkeep
```

---

### 🎯 Objectif
ServalApp vise à fournir une base claire pour :
- explorer les wireframes historiques,
- réorganiser les documents du concept Serval Mesh,
- servir de point de départ pour une future application web ou mobile.

---

### 🚀 Installation
- Clone le dépôt :
```bash
git clone git@github.com:teremu/ServalApp.git
```

>Ouvre simplement index.html dans ton navigateur.

---

### 🛠️ Développement
- HTML / CSS / JS 100% Vanilla
- Animations tactiques Night‑Ops
- Scripts optimisés pour iPhone/iPad
- Android en cours d’intégration

---

### 🔐 Sécurité
Scan automatique chaque semaine.  
Les failles doivent être signalées via `SECURITY.md`.

---

### 🤝 Contribution
Voir `CONTRIBUTING.md`.  
Tests obligatoires iPhone/iPad avant PR.

---

### 🛡 Style militaire (optionnel)
- Tu peux activer le thème Night‑Ops ou GCM Tactical dans assets/stylesheets/style.css.

---

### 📜 Licence
- Projet ServalApp 2026
   - Ce projet utilise The Unlicense
```md
Ce projet est placé dans le domaine public via The Unlicense.  
Vous pouvez utiliser, modifier, distribuer et vendre ce logiciel librement, sans aucune restriction.
```
