## 🎯 Objectif du Projet

Red Tetris est un **Tetris multijoueur en ligne** conçu pour maîtriser le Full Stack JavaScript moderne. Ce projet explore :

- **Programmation fonctionnelle** (principe obligatoire)
- **Logique client/serveur asynchrone** avec Socket.io
- **Patterns réactifs** pour l'UI et le gameplay
- **Tests unitaires** de niveau industriel
- **Architecture réseau** pour le multijoueur temps réel

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

## 📦 Production

```bash
npm run client-dist  # Build client
npm run srv-dist     # Build serveur
```

## 🛠 Stack Technique

- **React 18** + Redux Toolkit (UI réactive)
- **Socket.io 4** (communication temps réel)
- **Webpack 5** + Babel 7 (build moderne)
- **Node.js 24** (serveur asynchrone)
- **Mocha 10** + ESLint 8 (tests & qualité)