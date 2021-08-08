const path = require('path')
const { merge } = require('webpack-merge')
const baseConf = require('./base.conf')

const cwd = process.cwd()

const devConf = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}

module.exports = merge(baseConf, devConf)