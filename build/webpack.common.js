const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const proConfig = require('./webpack.product')


const commonConfig = {
  entry: {
    app: './app/js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    })
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
    console.log(JSON.stringify(merge(commonConfig, devConfig).module.rules))
    return merge(commonConfig, devConfig)
  }
}