/* babel-loader 配置 */
const process = require('process');

function output(env){
  switch(env){
    case 'development': // 开发环境
      return true;
    case 'production':  // 生产环境
      return false;
  }
}

// 根据当前环境配置debug
// development
// production
const env = process.env.NODE_ENV;
const debug = output(env);

module.exports = {
  path: 'babel-loader',
  query: {
    cacheDirectory: true,
    presets: [
      [
        'env',
        {
          targets: {      // 兼容列表：https://cloud.githubusercontent.com/assets/588473/19214029/58deebce-8d48-11e6-9004-ee3fbcb75d8b.png
            // ie: 11,    // 兼容Ie：     v11(!bug)
            edge: 12,     // 兼容Edge：   v12
            chrome: 40,   // 兼容Chrome： v40
            firefox: 40   // 兼容Firefox：v40
          },
          debug: debug,
          modules: false,
          useBuiltIns: 'usage',
          uglify: false
        }
      ],
      'flow',
      'react'
    ],
    plugins: [
      'transform-decorators',
      'transform-object-rest-spread',
      [
        'import',
        {
          'libraryName': 'antd',
          'style': 'css'
        }
      ]
    ]
  }
};