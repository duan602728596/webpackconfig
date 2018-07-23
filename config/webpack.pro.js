/* 生产环境 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.config');
const cssConfig = require('./css.config');
const sassConfig = require('./sass.config');
const postCssConfig = require('./postcss.config');

/* 合并配置 */
module.exports = config({
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'script/[name].[chunkhash].js',
    chunkFilename: 'script/[name].chunk.[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { // sass
        test: /^.*\.s(a|c)ss$/,
        oneOf: [
          {
            resourceQuery: /scoped/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', postCssConfig, sassConfig]
          },
          {
            use: [MiniCssExtractPlugin.loader, cssConfig, postCssConfig, sassConfig]
          }
        ]
      },
      { // css
        test: /^.*\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    // html模板
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.join(__dirname, '../src/index.pug'),
      minify: {
        minifyCSS: true,
        minifyJS: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[chunkhash].css',
      chunkFilename: 'style/[name].chunk.[chunkhash].css'
    }),
    new OptimizeCssAssets()
  ]
});