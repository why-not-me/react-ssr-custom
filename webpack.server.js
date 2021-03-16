const path = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');

const serverConfig = {
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()]
}

module.exports = merge(baseConfig, serverConfig);