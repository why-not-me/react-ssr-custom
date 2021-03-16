const path = require('path');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, clientConfig);