var autoprefixer = require('autoprefixer')
var path = require('path')

function compileCSSWithClassPrefix(prefix) {
  return ['style', `css?localIdentName=${prefix}-[name]-[local]`, 'postcss', 'sass']
}

module.exports = {
  entry: './app/circle/app',
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
  postcss: [autoprefixer]
}
