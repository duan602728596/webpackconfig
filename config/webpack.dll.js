/* 预先编译dll */
const path = require('path');
const os = require('os');
const process = require('process');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
});

module.exports = {
  entry: {
    dll: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'redux-logger',
      'redux-actions',
      'immutable',
      'redux-immutable',
      'reselect',
      'rc-queue-anim'
    ]
  },
  output: {
    path: path.join(__dirname, '../.dll'),
    filename: '[name].js',
    library: '[name]_[hash]',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      { // js
        test: /^.*\.js$/,
        use: [
          {
            loader: 'happypack/loader',
            options: {
              id: 'babel_loader'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // dll
    new webpack.DllPlugin({
      path: '.dll/manifest.json',
      name: '[name]_[hash]',
      context: __dirname,
      sourceType: 'var'
    }),
    // 代码压缩
    new UglifyJSPlugin({
      uglifyOptions: {
        warnings: true,
        output: {
          comments: false,
          beautify: false,
          quote_style: 3
        }
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    /* HappyPack */
    // js
    new HappyPack({
      id: 'babel_loader',
      loaders: [
        {
          path: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    ie: 11,
                    edge: 12,
                    chrome: 40,
                    firefox: 40
                  },
                  debug: false,
                  modules: false,
                  useBuiltIns: false,
                  uglify: false
                }
              ]
            ]
          }
        }
      ],
      threadPool: happyThreadPool,
      verbose: true
    })
  ]
};