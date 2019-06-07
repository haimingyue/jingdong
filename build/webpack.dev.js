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
        test: /\.css$/,
        use: [{
          loader : 'vue-style-loader'
        }, {
          loader: 'css-loader',
          options: {
            // 开启 CSS Modules
            modules: true,
            // 自定义生成的类名
            localIdentName: '[local]_[hash:base64:8]'
          }
        }, {
          loader: 'px2rem-loader',
          // options here
          options: {
            remUni: 75,
            remPrecision: 8
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader : 'vue-style-loader'
        }, {
            loader: "css-loader",
            options: {
              // 开启 CSS Modules
              modules: true,
              // 自定义生成的类名
              localIdentName: '[local]_[hash:base64:8]'
            } // translates CSS into CommonJS
        }, {
          loader: 'px2rem-loader',
        // options here
          options: {
            remUni: 75,
            remPrecision: 8
          }
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  }
}