/* 预先编译dll */
const path = require('path');
const process = require('process');
const os = require('os');
const webpack = require('webpack');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
});

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    dll: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'react-redux',
      'redux-thunk',
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
        use: ['happypack/loader?id=babel']
      }
    ]
  },
  plugins: [
    // dll
    new webpack.DllPlugin({
      path: '.dll/manifest.json',
      name: '[name]_[hash]',
      context: __dirname
    }),
    new HappyPack({
      id: 'babel',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.join(__dirname, '../.babelCache'),
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
      threadPool: happyThreadPool
    })
  ]
};
