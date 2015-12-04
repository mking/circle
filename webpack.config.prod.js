var common = require('./webpack.config.common')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: common.entry,
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build')
  },
  resolve: common.resolve,
  module: common.module,
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    })
  ],
  postcss: common.postcss
}
