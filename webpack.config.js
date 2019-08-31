/* global require, module, __dirname */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/InfiniteList.js',
  output: {
    filename: 'infinite-list.js',
    path: path.join(__dirname, '/dist')
  }
};
