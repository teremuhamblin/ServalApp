# ServalApp – GitHub Pages Deployment Guide

Ce projet utilise GitHub Pages pour héberger le prototype ServalApp.

## Déploiement
Le workflow `.github/workflows/pages.yml` déploie automatiquement le site à chaque push sur `main`.

## URL
https://teremu.github.io/ServalApp/

## Mise à jour
Modifiez les fichiers HTML/CSS/JS puis :

```bash
git add .
git commit -m "update site"
git push
