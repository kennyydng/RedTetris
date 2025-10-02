const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/client/index.js',
  
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'build')
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
    proxy: [
      {
        context: ['/socket.io'],
        target: 'http://localhost:3004',
        ws: true,
        changeOrigin: true
      },
      {
        context: ['/api'],
        target: 'http://localhost:3004',
        changeOrigin: true
      }
    ],
    setupMiddlewares: (middlewares, devServer) => {
      // Servir index.html pour toutes les routes non-API
      devServer.app.get('*', (req, res, next) => {
        if (req.path.startsWith('/socket.io') || req.path.startsWith('/api') || req.path.startsWith('/bundle.js')) {
          return next();
        }
        res.sendFile(path.join(__dirname, 'index.html'));
      });
      return middlewares;
    }
  },

  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map'
};
