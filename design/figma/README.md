# Extraction Figma — référence

Source : `https://www.figma.com/design/utVzxYKh4Rzyp7wW4OIhNz/Untitled`
Extrait le 2026-08-16 via le serveur MCP Figma distant (5 appels sur un quota
Starter de 20/mois). **Aucun crédit supplémentaire n'est nécessaire pour
terminer l'intégration** : tout est ici.

## Fichiers

- `metadata-0-1.xml` — arbre complet des calques (955 lignes, `get_metadata`)
- `main-1-21.tsx.txt` — code React+Tailwind du frame `Main` (2214 lignes,
  685 nœuds, `get_design_context` avec `forceCode`)

Les assets référencés sont dans `public/figma/` (153 fichiers) et mappés par
`src/lib/figma-assets.ts`. Les URLs Figma d'origine ont expiré 7 jours après
l'extraction — ne pas s'y fier.

## Découpage des sections restant à intégrer

| Nœud     | Section                              | Lignes      |
| -------- | ------------------------------------ | ----------- |
| `1:359`  | Bloc fonctionnalités                 | 662–1005    |
| `1:500`  | Section + témoignage Amity Sensei    | 1006–1079   |
| `1:522`  | Espaces / Dossiers et tags / Collections | 1080–1331 |
| `1:657`  | « Rendez-le incontestablement vôtre » + Deanna | 1332–1848 |
| `1:897`  | Section + témoignage Leo             | 1849–1941   |
| `1:927`  | « Restez dans la boucle »            | 1942–2059   |
| `1:1056` | Tarifs                               | 2060–2163   |
| `1:1104` | CTA final « Commençons »             | 2164–2204   |

Déjà intégrés : `1:22`, `1:134`, `1:163`, `1:206`, `1:1130` (footer),
`1:1220` (header).
