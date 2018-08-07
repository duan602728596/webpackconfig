/* webpack配置 */
const process = require('process');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const babelConfig = require('./babel.config');

function config(options){
  const { NODE_ENV } = process.env;
  const fileName = NODE_ENV === 'development' ? '[name].[ext]' : '[hash:5].[ext]';
  const conf = {
    mode: NODE_ENV,
    entry: {
      app: [path.join(__dirname, '../src/app.js')]
    },
    module: {
      rules: [
        { // js
          test: /^.*\.js$/,
          use: [babelConfig, 'eslint-loader'],
          exclude: /(dll\.js|node_modules)/
        },
        { // vue
          test: /^.*\.vue$/,
          use: ['vue-loader']
        },
        {
          test: /dll\.js/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: fileName,
                outputPath: 'script/'
              }
            }
          ]
        },
        { // 图片
          test: /^.*\.(jpg|jpeg|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 3000,
                name: fileName,
                outputPath: 'image/'
              }
            }
          ]
        },
        { // 图标
          test: /^.*\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
        { // 矢量图片 & 文字
          test: /^.*\.(eot|svg|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: fileName,
                outputPath: 'file/'
              }
            }
          ]
        },
        { // pug
          test: /^.*\.pug$/,
          use: [
            {
              loader: 'pug-loader',
              options: {
                pretty: NODE_ENV === 'development',
                name: '[name].html'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // html模板
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(__dirname, '../src/index.pug'),
        NODE_ENV
      }),
      new VueLoaderPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  };

  /* 合并 */
  conf.module.rules = conf.module.rules.concat(options.module.rules);       // 合并rules
  conf.plugins = conf.plugins.concat(options.plugins);                      // 合并插件
  conf.output = options.output;                                             // 合并输出目录
  if('devtool' in options) conf.devtool = options.devtool;                  // 合并source-map配置
  if('optimization' in options) conf.optimization = options.optimization;   // 合并optimization

  return conf;
}

module.exports = config;