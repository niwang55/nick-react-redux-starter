const webpack = require('webpack');
const path = require('path');

// TODO: set up HMR/react hot replacement
module.exports = {
  entry: './client/src/index.js',

  devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, 'client', 'compiled'),
    publicPath: '/compiled/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },

  devServer: {
    contentBase: "./client",
    open: true,
    inline: true,
    historyApiFallback: true,
    noInfo: true,
    stats: 'errors-only',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        secure: false
      }
    },
  }
};