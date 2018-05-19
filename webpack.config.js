var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './app.js'
  ],
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: '/\.(png|jp?g|gif)$/',
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }, {
      test: '/\.css$/',
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  }
};
