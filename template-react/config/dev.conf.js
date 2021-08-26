const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConf = require('./base.conf')
baseConf.entry.unshift('')
const cwd = process.cwd()

const devConf = {
  mode: 'development',
  target: 'web',
  output: {
    publicPath: '/',
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    port: 3000,
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: false,
  },
  resolve: {
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(baseConf, devConf)