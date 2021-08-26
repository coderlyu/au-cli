const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const webpack = require('webpack')

const cwd = process.cwd()
const isProd = process.env.NODE_ENV === 'production'

const commonCss = isProd ? [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      esModule: false,
    }
  },
  'css-loader'
] : ['style-loader', 'css-loader']

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader:'url-loader',
        options:{
          limit: 8 * 1024,
          esModule: false,
          name:'[hash:10].[ext]',
          outputPath: 'static/images'
        }
      },
      { test:/\.css$/, use: [...commonCss] },
      { test: /\.less$/, use: [...commonCss,  'less-loader' ] },
      {
        test: /\.(scss|sass)$/,
        use: [...commonCss, 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          esModule: false,
          outputPath: 'static/fonts',
          useRelativePath: true
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'views': path.resolve(__dirname, '../src/views'),
    },
    extensions: ['.jsx', '.js', '.json', '.css'],
    // fallback: {
    //   process: require.resolve('process/browser')
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      minify: isProd,
      inject: true,
      title: 'react App'
    }),
    // new webpack.ProvidePlugin({
    //   process: 'process'
    // }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // })
  ]
}