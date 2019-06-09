const path = require('path')
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
        use: [{
          loader : 'vue-style-loader'
        }, {
            loader: "css-loader"
        }, {
          loader: 'px2rem-loader',
          // options here
          options: {
            remUnit: 40,
            remPrecision: 8
          }
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  }
}