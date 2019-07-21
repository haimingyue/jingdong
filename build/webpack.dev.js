const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  mode: 'development',
  devServer: {
    // 如果你需要提供一个静态文件，在哪里输出
    contentBase: path.join(__dirname, '../dist'),
    // 开启gzip压缩
    compress: true,
    // 开启的端口
    port: 9000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        oneOf: [{
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]_[hash:base64:5]'
              }
            }, {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }, {
          use: [
            'vue-style-loader',
            'css-loader', {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }],
      }, {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  }
}