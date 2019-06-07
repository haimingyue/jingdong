var MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader : MiniCssExtractPlugin.loader
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
          loader: MiniCssExtractPlugin.loader
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
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
