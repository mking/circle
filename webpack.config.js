var autoprefixer = require('autoprefixer')
var path = require('path')
var webpack = require('webpack')

function compileCSSWithClassPrefix(prefix) {
  return ['style', `css?localIdentName=${prefix}-[name]-[local]`, 'postcss', 'sass']
}

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './app/circle/app'
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
          path.join(__dirname, 'app/circle'),
          path.join(__dirname, 'app/common')
        ],
        loaders: compileCSSWithClassPrefix('circle')
      },
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'app/builds')
        ],
        loaders: compileCSSWithClassPrefix('circle-builds')
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
