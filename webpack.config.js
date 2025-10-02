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
    port: 8080
  },

  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map'
};
