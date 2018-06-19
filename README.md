# webpack-react的配置文件。

* 输入命令 `$ npm start` 运行开发环境。
* 输入命令 `$ npm build` 编译到文件夹。
* 输入命令 `$ npm run devdll` 编译开发环境dll文件。
* 输入命令 `$ npm run prodll` 编译生产环境编译dll文件。
* 输入命令 `$ npm run npmi` 或 `$ yarn run yarni` 安装生产环境依赖。
* 输入命令 `$ npm run server-start` 编译服务器端开发环境代码。
* 输入命令 `$ npm run server-build` 编译服务器端生产环境代码。
* 输入命令 `$ npm run server` 运行一个小型服务器来查看生产环境。

### 关于dll

无论是开发环境还是生产环境，首先要**编译dll文件**，将公共模块提取出来。

### 关于node-sass

node-sass如果安装失败，可以先到[https://github.com/sass/node-sass/releases](https://github.com/sass/node-sass/releases)下载**binding.node**文件，然后将该文件添加到**SASS_BINARY_PATH**环境变量内。
