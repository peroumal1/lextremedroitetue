# Attaques terroristes d'extrême droite en France

Chronologie des attaques terroristes d'extrême droite commises en France, de 1914 à aujourd'hui, avec bilan humain (morts et blessés).

## Origine

Ce projet est un fork de [static-timeline-generator](https://github.com/molly/static-timeline-generator), le générateur de chronologies statiques créé par [Molly White](https://www.mollywhite.net/), également connue pour le site [Web3 is Going Just Great](https://www.web3isgoinggreat.com/). Le modèle original est publié sous [licence MIT](https://github.com/molly/static-timeline-generator/blob/main/LICENSE).

Les données proviennent principalement de la page Wikipédia [Liste d'attaques terroristes d'extrême droite](https://fr.wikipedia.org/wiki/Liste_d%27attaques_terroristes_d%27extr%C3%AAme_droite).

---

## Développement local

**Prérequis :** Node.js — géré via [mise](https://mise.jdx.dev/) (`mise.toml` inclus).

```zsh
npm install
npm run-script serve   # build + serveur local sur http://localhost:8080
npm run-script build   # build uniquement → _site/
```

---

## Déploiement

Le site est déployé automatiquement sur GitHub Pages via GitHub Actions à chaque push sur `main`. Le fichier de workflow se trouve dans `.github/workflows/deploy.yml`.

Aucune action manuelle n'est nécessaire — tout push sur `main` déclenche un build et un déploiement.

---

## Structure du projet

| Fichier / Dossier | Rôle |
|-------------------|------|
| `src/_data/content.js` | **Fichier principal** — toutes les entrées, métadonnées, en-tête et pied de page |
| `src/css/_colors.sass` | Tokens de couleur des points de la timeline |
| `src/css/custom.css` | Surcharges de style locales (compteur de défilement, espacement) |
| `src/index.ejs` | Template principal de la page |
| `src/js/site-js.js` | JS client — filtres et compteur de défilement |
| `scripts/france-attaques.csv` | Données source brutes (Wikipedia) |
| `scripts/csv-to-entries.js` | Convertisseur CSV → entrées `content.js` |
| `.github/workflows/deploy.yml` | Pipeline de déploiement GitHub Actions |
| `_site/` | Sortie du build (gitignorée) |

---

## Ajouter des entrées

Toutes les entrées sont dans le tableau `entries` de `src/_data/content.js`. Voir `scripts/sample-events.csv` pour le format CSV compatible avec le convertisseur.

Les icônes utilisées (FontAwesome 7 Free Solid) :
- `skull` — entrées avec morts
- `droplet` — entrées avec blessés uniquement
- `xmark` — attaques sans victime

---

## Licence

Le code du générateur est sous [licence MIT](https://github.com/molly/static-timeline-generator/blob/main/LICENSE) (Molly White). Le contenu (données des attaques) est issu de Wikipédia sous licence [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).
