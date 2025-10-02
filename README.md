# Red Tetris (2025) 🎮

> **Tetris multijoueur en ligne** - Jeu Tetris temps réel utilisant les technologies JavaScript modernes pour explorer la programmation fonctionnelle, les patterns asynchrones et reactifs.

## 🎯 Objectif du Projet

Red Tetris est un **jeu Tetris multijoueur en ligne** conçu pour maîtriser le Full Stack JavaScript moderne. Ce projet explore :

- **Programmation fonctionnelle** (principe obligatoire)
- **Logique client/serveur asynchrone** avec Socket.io
- **Patterns réactifs** pour l'UI et le gameplay
- **Tests unitaires** de niveau industriel
- **Architecture réseau** pour le multijoueur temps réel

# grille de correction
https://github.com/zanninso/42-correction-files/blob/master/red-tetris.pdf


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

### 🔧 Architecture du Projet

Le projet utilise une **architecture client-serveur** avec :

- **Frontend React** : Code dans `src/client/` → Compilé vers `build/bundle.js`
- **Backend Node.js** : Code dans `src/server/` → Sert les fichiers statiques + WebSocket
- **Port principal** : **3004** (défini dans `params.js`)

### 🚀 Démarrage Rapide (avec Hot Reload)

**1. Installation des dépendances :**
```bash
npm install
```

**2. Démarrage du développement complet :**
```bash
npm run dev
```

Cette commande lance automatiquement :
- **Serveur backend** (port 3004) avec auto-reload
- **Webpack dev server** (port 8080) avec hot reload React
- **Proxy automatique** des WebSockets vers le backend

**3. Ouvrir dans le navigateur :**
```
http://localhost:8080
```

🔥 **Hot Reload activé !** Modifiez votre code React et voyez les changements instantanément !

### ⚡ Workflow de Développement (Nouveau)

**Développement moderne avec hot reload :**

1. **Démarrage** : `npm run dev` (lance tout automatiquement)
2. **Modifications** : Éditez votre code dans `src/client/` ou `src/server/`
3. **Résultat** : Changements instantanés dans le navigateur !

**Plus besoin de :**
- ❌ `npm run client-dist` après chaque modification
- ❌ Refresh manuel du navigateur
- ❌ Redémarrage manuel des serveurs

### ⚙️ Workflow Classique (si besoin)

**Pour la production ou debug spécifique :**

1. **Construction initiale du client :**
```bash
npm run client-dist
```

2. **Démarrage du serveur backend uniquement :**
```bash
npm run srv-dev
```

3. **Accès via serveur backend :**
```
http://localhost:3004
```

### 📝 Scripts Disponibles

```bash
# � Développement avec Hot Reload (Recommandé)
npm run dev            # Lance serveur backend + webpack dev server avec hot reload

# �🔨 Build & Development Classique
npm run client-dist    # Build client (production)
npm run client-dev     # Serveur webpack seul (port 8080)
npm run srv-dev        # Serveur backend seul (port 3004)
npm run srv-dist       # Build serveur (production)

# 🧪 Tests & Qualité
npm run test          # Tests unitaires
npm run coverage      # Tests + couverture de code
npm run eslint        # Analyse statique du code
```

### 🎯 Ports et URLs

- **🔥 Développement Hot Reload** : `http://localhost:8080` (webpack dev server avec proxy)
- **📡 Serveur backend direct** : `http://localhost:3004` (serveur backend classique)
- **⚙️ Configuration** : Voir `params.js` pour modifier les paramètres

### 💡 Conseils de Développement

- **🔥 Utilisez `npm run dev`** : Workflow moderne avec hot reload complet
- **⚡ Hot Reload React** : Modifications instantanées sans perte d'état
- **🔄 Auto-reload Backend** : Le serveur redémarre automatiquement sur les changements
- **🌐 Proxy automatique** : WebSockets et API redirigés vers le backend
- **🐛 Debug** : Les logs de debug sont activés avec la variable `DEBUG=tetris:*`
- **🔧 Production** : Utilisez `client-dist` + `srv-dist` pour le build de production

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