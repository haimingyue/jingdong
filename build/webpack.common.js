const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const proConfig = require('./webpack.product')


const commonConfig = {
  entry: ['./app/js/viewport.js', './app/js/main.js'],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../dist')
  }
}

module.exports = env => {
  if (env && env.production) {
    return merge(commonConfig, proConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}