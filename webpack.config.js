var autoprefixer = require('autoprefixer')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './app/app'
  ],
  output: {
    filename: 'app.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        include: [
          path.join(__dirname, 'app')
        ],
        loaders: ['babel', 'ts', 'tslint']
      },
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'app')
        ],
        loaders: ['style', 'css?localIdentName=circle-[name]-[local]', 'postcss', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  postcss: [autoprefixer]
}
