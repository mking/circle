var common = require('./webpack.config.common')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    common.entry
  ],
  output: {
    filename: 'app.js',
    publicPath: '/build/'
  },
  resolve: common.resolve,
  module: common.module,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  postcss: common.postcss
}
