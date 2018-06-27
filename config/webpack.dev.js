/* 开发环境 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');
const cssConfig = require('./css.config');
const sassConfig = require('./sass.config');
const babelConfig = require('./babel.config');

/* 合并配置 */
module.exports = config({
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=500&reload=true',
      path.join(__dirname, '../src/app.js')
    ]
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'script/[name].js',
    chunkFilename: 'script/[name]_chunk.js',
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      { // sass
        test: /^.*\.s(a|c)ss$/,
        oneOf: [
          {
            resourceQuery: /scoped/,
            use: ['vue-style-loader', 'css-loader', sassConfig]
          },
          {
            use: ['vue-style-loader', cssConfig, sassConfig]
          }
        ]
      },
      { // css
        test: /^.*\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
    // html模板
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.join(__dirname, '../src/index.pug')
    })
  ]
});
