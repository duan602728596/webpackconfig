/* babel-loader 配置 */
const path = require('path');
const process = require('process');

const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: 11,
        edge: 16,
        chrome: 62,
        firefox: 56
      },
      debug: process.env.NODE_ENV === 'development',
      modules: false,
      useBuiltIns: 'usage'
    }
  ],
  '@babel/preset-flow'
];

const plugins = [
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ],
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-do-expressions',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-class-properties',
  "@babel/plugin-syntax-dynamic-import",
  [
    'import',
    {
      libraryName: 'iview',
      libraryDirectory: 'src/components'
    }
  ]
];

module.exports = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: path.join(__dirname, '../.babelCache'),
    presets,
    plugins
  }
};