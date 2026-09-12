###### README-PAGES.md >> markdown 
### 🛡️ 1. Arborescence
- GitHub Pages (officielle)
```text
https://teremu.github.io/ServalApp/
```

### ⚙️ 2. Workflow 
- GitHub Pages (pages.yml)
📌 À placer dans :
```text
ServalApp/.github/workflows/pages.yml
```

Ce workflow :
- build ton site statique  
- déploie automatiquement sur GitHub Pages  
- fonctionne sans Node

### 🌐 3. Activer
- GitHub Pages dans GitHub
Dans ton dépôt :

1. Settings
2. Pages
3. Build and Deployment
4. Source → GitHub Actions
5. Le workflow pages.yml apparaît automatiquement

Ton site sera publié ici :
```text
https://teremu.github.io/ServalApp/
```

---

### 📘 4. Documentation
- GitHub Pages (README-PAGES.md)
📌 À placer dans :
```text
ServalApp/docs/README-PAGES.md
```
### ServalApp
- GitHub Pages Deployment Guide
Ce projet utilise GitHub Pages pour héberger le prototype ServalApp.

### 🚀 Déploiement automatique
- Le workflow
   - .github/workflows/pages.yml déploie automatiquement le site à chaque push sur main.

### 📂 Structure publiée
Les fichiers suivants sont publiés :

- index.html
- assets/
- screens/
- docs/ (optionnel)

### 🌐 URL du site
https://teremu.github.io/ServalApp/

### 🔧 Modifier le site
Modifiez simplement les fichiers HTML/CSS/JS puis faites :
```bash
git add .
git commit -m "update site"
git push
```
- Le site se met à jour automatiquement.

---

### 🧱 5. Fichier CNAME (optionnel)
📌 Si tu veux un domaine personnalisé :
```
ServalApp/CNAME
```
- Contenu :
```text
servalapp.teremu.fr
```

---

### 🪖 6. Fichier .nojekyll
- (obligatoire si tu utilises /assets)
📌 À placer à la racine :
```text
ServalApp/.nojekyll
```

>Contenu vide.

- Cela empêche GitHub Pages de bloquer tes dossiers assets/ et screens/.

---

### 🎖 7. Résultat :
- ton pack GitHub Pages est complet
- Tu as maintenant :
✔ workflow GitHub Pages  
✔ documentation Pages  
✔ fichier .nojekyll  
✔ structure propre  
✔ site automatiquement déployé  
✔ compatible avec ton style militaire Night‑Ops  

---
