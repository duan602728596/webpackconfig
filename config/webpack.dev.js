/* 开发环境 */
const path = require('path');
const os = require('os');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const config = require('./webpack.config');
const babelConfig = require('./babel.config');
const cssConfig = require('./css.config');
const sassConfig = require('./sass.config');

const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
});

/* 合并配置 */
module.exports = config({
  entry: {
    // 热部署模块
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
        test: /^.*\.sass$/,
        use: [
          {
            loader: 'happypack/loader',
            options: {
              id: 'sass_loader'
            }
          }
        ]
      },
      { // css
        test: /^.*\.css$/,
        use: [
          {
            loader: 'happypack/loader',
            options: {
              id: 'css_loader'
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
              pretty: true,
              name: '[name].html'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /* HappyPack */
    // sass
    new HappyPack({
      id: 'sass_loader',
      loaders: ['style-loader', cssConfig, sassConfig],
      threadPool: happyThreadPool,
      verbose: true
    }),
    // css
    new HappyPack({
      id: 'css_loader',
      loaders: ['style-loader', 'css-loader'],
      threadPool: happyThreadPool,
      verbose: true
    }),
    // react
    new HappyPack({
      id: 'babel_loader',
      loaders: ['react-hot-loader/webpack', babelConfig],
      threadPool: happyThreadPool,
      verbose: true
    }),
    // 允许错误不打断程序
    new webpack.NoEmitOnErrorsPlugin(),
    // WebpackHotMiddleware
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // html模板
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.join(__dirname, '../src/index.pug')
    })
  ]
});