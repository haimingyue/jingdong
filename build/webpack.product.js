const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
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
      // {
      //   test: /\.scss$/,
      //   use: [{
      //     loader: MiniCssExtractPlugin.loader
      //   }, {
      //       loader: "css-loader"
      //   }, {
      //     loader: 'px2rem-loader',
      //   // options here
      //     options: {
      //       remUnit: 40,
      //       remPrecision: 8
      //     }
      //   }, {
      //       loader: "sass-loader" // compiles Sass to CSS
      //   }]
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
