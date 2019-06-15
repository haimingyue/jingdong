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
            loader: 'vue-loader',
            options: {
              cssModules: {
                localIdentName: '[path][name]---[local]---[hash:base64:5]',
                camelCase: true
              },
              oaders: {
                css: ExtractTextPlugin.extract({
                  use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8',
                  fallback: 'vue-style-loader' 
                }),
                scss: ExtractTextPlugin.extract({
                  use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader',
                  fallback: 'vue-style-loader'
                })
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader : 'vue-style-loader'
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  }
}