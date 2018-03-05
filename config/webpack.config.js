/* webpack配置 */
const process = require('process');
const os = require('os');
const webpack = require('webpack');
const HappyPack = require('happypack');
const babelConfig = require('./babel.config');
const manifest = require('../.dll/manifest.json');

const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
});

function config(options){
  const conf = {
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        { // react & js
          test: /^.*\.js$/,
          use: ['happypack/loader?id=babel'],
          exclude: /(dll\.js|node_modules)/
        },
        {
          test: /dll\.js/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]_[hash].[ext]',
                outputPath: 'script/'
              }
            }
          ]
        },
        { // 图片
          test: /^.*\.(jpg|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 3000,
                name: '[name]_[hash].[ext]',
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
                name: '[name]_[hash].[ext]',
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
                pretty: process.env.NODE_ENV === 'development',
                name: '[name].html'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // dll
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: manifest
      }),
      new HappyPack({
        id: 'babel',
        loaders: [babelConfig],
        threadPool: happyThreadPool
      })
    ]
  };

  /* 合并 */
  conf.entry = options.entry;                                               // 合并入口文件
  conf.module.rules = conf.module.rules.concat(options.module.rules);       // 合并rules
  conf.plugins = conf.plugins.concat(options.plugins);                      // 合并插件
  conf.output = options.output;                                             // 合并输出目录
  if('devtool' in options) conf.devtool = options.devtool;                  // 合并source-map配置

  return conf;
}

module.exports = config;
