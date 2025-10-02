# Red Tetris Boilerplate (2025 Edition) 🎮

[![Node.js](https://img.shields.io/badge/Node.js-24.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.0-purple.svg)](https://redux-toolkit.js.org/)
[![Webpack](https://img.shields.io/badge/Webpack-5.x-lightblue.svg)](https://webpack.js.org/)

> **🚀 Modernized starter kit** for building a Full Stack JavaScript Tetris game with cutting-edge technologies (2025 edition)

This fully modernized boilerplate provides everything you need to develop **Red Tetris** - a real-time multiplayer Tetris game. It can also serve as a starting point for any modern React/Redux application with Socket.io.

## ✨ Features

- **Modern React 18** with new JSX Transform
- **Redux Toolkit** for simplified state management  
- **Webpack 5** with Hot Module Replacement
- **Babel 7** for ES6+ transpilation
- **ESLint 8** with React hooks support
- **Mocha 10** with modern testing setup
- **Socket.io 4** for real-time communication
- **Development & Production** build configurations

## 🛠 Tech Stack

### Frontend
- **React 18.2** - Modern UI library with latest features
- **Redux Toolkit 2.0** - Simplified Redux with best practices
- **React-Redux 9.1** - Official React bindings for Redux

### Backend  
- **Node.js 24+** - JavaScript runtime
- **Socket.io 4.8** - Real-time bidirectional communication

### Build Tools
- **Webpack 5** - Module bundler with advanced optimizations
- **Babel 7** - JavaScript compiler with preset-env
- **ESLint 8** - Code linting with React plugins

### Testing
- **Mocha 10** - JavaScript test framework
- **Chai 4** - BDD/TDD assertion library
- **React Testing Library** - Simple and complete testing utilities
- **NYC/Istanbul** - Code coverage reporting

## 📦 Installation

### Prerequisites
- **Node.js 20.17.0+** or **22.9.0+** 
- **npm 11.6.0+**

```bash
# Install dependencies
npm install
```

## 🚀 Development

### Start the Server
```bash
npm run srv-dev
```
Launches a Node.js server with Socket.io, listening for connections and ready to handle `ping/pong` messages.

### Start the Client  
```bash
npm run client-dev
```
Starts Webpack dev server with Hot Module Replacement at `http://localhost:8080`

**Features:**
- ⚡ **Hot Reload** - Automatic browser refresh on file changes
- 🔍 **Source Maps** - Easy debugging in development
- 📱 **Network Access** - Available on `0.0.0.0:8080` for mobile testing

You should see: `"Soon, will be here a fantastic Tetris ..."` and Redux action logs in the console.

## 🧪 Testing

### Run All Tests
```bash
npm run test
```

### Test Coverage
```bash
npm run coverage
```
Open `./coverage/lcov-report/index.html` in your browser to view detailed coverage reports.

### Test Types

#### 1. Unit Tests (`test/fake.js`)
Simple unit tests for pure functions and utilities.

#### 2. React Component Tests (`test/react1.js`)  
Tests React components using React Testing Library:
```javascript
import { render } from '@testing-library/react'
// Modern React component testing
```

#### 3. Redux Integration Tests (`test/redux1.js`)
Tests actions and reducers together using a custom middleware:
```javascript
import {configureStoreTest} from './helpers/server'
// Test Redux workflow with state verification
```

#### 4. Full-Stack Tests (`test/server1.js`)
End-to-end tests covering client ↔ server Socket.io communication:
```javascript
// Tests: action → socket.emit → server → client callback → action → reducer
```

## 🏗 Production Build

### Build Client Bundle
```bash
npm run client-dist
```
Creates optimized production bundle with:
- **Minification** - Reduced file size
- **Tree Shaking** - Dead code elimination  
- **Source Maps** - Production debugging support

### Build Server
```bash
npm run srv-dist  
```
Compiles server code to `dist/` directory

### Run Production Server
```bash
DEBUG=tetris:* node dist/server/main.js
```

## 📁 Project Structure

```
src/
├── client/                 # Frontend React app
│   ├── actions/           # Redux actions
│   ├── components/        # React components  
│   ├── containers/        # Connected components
│   ├── middleware/        # Redux middleware
│   ├── reducers/          # Redux reducers
│   └── index.js          # App entry point
├── server/                # Backend Node.js
│   ├── index.js          # Server logic
│   └── main.js           # Server entry point
test/                      # Test suites
├── helpers/              # Test utilities
├── fake.js              # Unit tests
├── react1.js            # React tests  
├── redux1.js            # Redux tests
└── server1.js           # Integration tests
```

## ⚙ Configuration Files

- `babel.config.js` - Babel 7 configuration with modern presets
- `webpack.config.js` - Webpack 5 setup with dev/prod modes
- `.eslintrc.json` - ESLint 8 with React hooks support
- `.mocharc.json` - Mocha test runner configuration
- `params.js` - Application parameters

## 🔧 Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run client-dev` | Start development server with HMR |
| `npm run client-dist` | Build production client bundle |
| `npm run srv-dev` | Start development server with auto-reload |
| `npm run srv-dist` | Build production server |
| `npm run test` | Run all tests |
| `npm run coverage` | Generate test coverage report |
| `npm run eslint` | Run ESLint code analysis |

## 🆕 What's New in 2025 Edition

### Major Updates
- ⬆️ **React 15 → 18** - Latest React with concurrent features
- ⬆️ **Redux 3 → Redux Toolkit 2** - Modern Redux with RTK
- ⬆️ **Babel 6 → 7** - Modern JavaScript compilation  
- ⬆️ **Webpack 1 → 5** - Advanced bundling and optimization
- ⬆️ **ESLint 2 → 8** - Modern linting with React hooks
- ⬆️ **Socket.io 1 → 4** - Latest real-time communication
- ⬆️ **Node.js 18 → 24** - Latest LTS with performance improvements

### New Features
- 🎣 **React Hooks** support
- 🔥 **Modern JSX Transform** (no more `import React`)
- ⚡ **Webpack 5** with improved Hot Module Replacement
- 🛡️ **TypeScript ready** architecture
- 🧪 **React Testing Library** for better component testing
- 📦 **Modern package management** with npm 11+

## 🎯 Getting Started with Development

1. **Clone and install:**
   ```bash
   git clone <your-repo>
   cd RedTetris
   npm install
   ```

2. **Start development environment:**
   ```bash
   # Terminal 1 - Start server
   npm run srv-dev
   
   # Terminal 2 - Start client  
   npm run client-dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:8080` and start coding!

4. **Run tests:**
   ```bash
   npm run test
   npm run coverage
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Ready to build the next generation Tetris? Let's code! 🎮✨**