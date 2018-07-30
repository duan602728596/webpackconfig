/* 开发环境 服务器 */
const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const mime = require('mime-types');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack');
const devConfig = require('../config/webpack.dev');

const app = new Koa();
const router = new Router();

(async function(){
  /* router */
  app.use(router.routes())
    .use(router.allowedMethods());

  /* webpack中间件 */
  const middleware = await koaWebpack({
    compiler: webpack(devConfig),
    hotClient: {
      host: {
        client: '*',
        server: '0.0.0.0'
      },
      port: 65050
    }
  });
  app.use(middleware);

  /* 重定向 */
  router.get(/^\/[^._\-]*$/, async(ctx, next)=>{
    const file = ctx.path;
    const mimeType = mime.lookup(file);
    if(file !== '/' && mimeType === false){
      ctx.path = '/';
      ctx._path = file;
    }
    await next();
  });

  /* 服务 */
  http.createServer(app.callback()).listen(5050);
})();