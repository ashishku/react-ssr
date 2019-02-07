require('@babel/polyfill');
const merge = require('webpack-merge');

const common = require('./common.js');

module.exports = merge(common, {
  output: {
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  watch: true
});