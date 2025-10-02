# Red Tetris (2025) 🎮

> **Tetris multijoueur en ligne** - Jeu Tetris temps réel utilisant les technologies JavaScript modernes pour explorer la programmation fonctionnelle, les patterns asynchrones et reactifs.

## 🎯 Objectif du Projet

Red Tetris est un **jeu Tetris multijoueur en ligne** conçu pour maîtriser le Full Stack JavaScript moderne. Ce projet explore :

- **Programmation fonctionnelle** (principe obligatoire)
- **Logique client/serveur asynchrone** avec Socket.io
- **Patterns réactifs** pour l'UI et le gameplay
- **Tests unitaires** de niveau industriel
- **Architecture réseau** pour le multijoueur temps réel

*Parfait pour perturber vos sessions de gaming intergalactiques pendant vos marathons de code nocturnes ! 🚀*

## 🎮 Spécifications du Jeu

### 🕹️ Contrôles
- **Flèches ←/→** : Déplacement horizontal
- **Flèche ↑** : Rotation de pièce
- **Flèche ↓** : Chute lente (soft drop)
- **Espace** : Chute instantanée (hard drop)

### 🌐 Multijoueur
**URL de connexion :**
```
http://<server>:<port>/<room>/<player_name>
```

**Règles :**
- **Premier joueur** = Host (contrôle start/restart)
- **Départ du host** = Transfert automatique du rôle
- **Parties simultanées** supportées
- **Synchronisation** : Mêmes pièces, mêmes positions pour tous
- **Fin de partie** : Dernier joueur restant gagne

### 🏗️ Architecture Client/Serveur

**Client (SPA React)** :
- Single Page Application dans le navigateur
- Chargement unique : `index.html` + `bundle.js`
- Communication via Socket.io
- Routing avec React Router

**Serveur (Node.js)** :
- Gestion des parties et joueurs
- Distribution synchronisée des pièces
- Mise à jour des spectres en temps réel
- Boucle asynchrone avec Socket.io + HTTP

## 🛠 Stack Technique

- **React 18** + Redux Toolkit (UI réactive)
- **Socket.io 4** (communication temps réel)
- **Webpack 5** + Babel 7 (build moderne)
- **Node.js 24** (serveur asynchrone)
- **Mocha 10** + ESLint 8 (tests & qualité)

## 🚀 Installation

```bash
npm install
```

**Prérequis :** Node.js 20+ et npm 11+

## 💻 Développement

```bash
# Démarrer le serveur
npm run srv-dev

# Démarrer le client (dans un autre terminal)
npm run client-dev
```

Ouvrir `http://localhost:8080`

## 🧪 Tests

```bash
npm run test
npm run coverage
```

### 🎯 Objectifs de Test

Les tests garantissent un **JavaScript de niveau Enterprise** avec :

- **Fiabilité des releases** - Détection automatique des bugs
- **Livraison accélérée** - Pipelines d'automatisation  
- **Qualité produit** - Maintenabilité à long terme
- **Standards industriels** - Tests automatisés comme .NET/Java

### 📊 Couverture de Code Requise

**Objectifs minimums :**
- **70%** de couverture : Statements, Functions, Lines
- **50%** de couverture : Branches

**4 métriques de coverage :**
- **Statements** : Taux de couverture des instructions
- **Functions** : Taux de couverture des fonctions  
- **Lines** : Taux de couverture des lignes de code
- **Branches** : Taux de couverture des chemins d'exécution

## 📦 Production

```bash
npm run client-dist  # Build client
npm run srv-dist     # Build serveur
```

## 🆕 Modernisé 2025

Projet entièrement migré vers les technologies JavaScript de pointe :
- React 15 → 18 (Hooks, JSX Transform)
- Redux 3 → Redux Toolkit (state management simplifié)
- Webpack 1 → 5 (optimisations avancées)
- Socket.io 1 → 4 (protocole réseau moderne)