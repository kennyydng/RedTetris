const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/client/index.js',
  
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    static: [
      {
        directory: path.join(__dirname),
        publicPath: '/',
        serveIndex: false,
        watch: true
      }
    ],
    historyApiFallback: {
      index: '/index.html'
    },
    hot: true,
    open: true,
    port: 8080,
    proxy: [
      {
        context: ['/socket.io'],
        target: 'http://localhost:3004',
        ws: true,
        changeOrigin: true
      }
    ]
  },

  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map'
};
