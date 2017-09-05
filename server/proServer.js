/* 生产环境 服务器 */
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const convert = require('koa-convert');
const staticCache = require('koa-static-cache');
const mime = require('mime-types');

const app = new Koa();
const router = new Router();
const port = 5051;                                    // 配置端口
const serverFile = path.join(__dirname, '/../build'); // 文件夹地址

function readFile(file){
  return new Promise((resolve, reject)=>{
    fs.readFile(file, (err, data)=>{
      if(err){
        resolve([404, err]);
      }else{
        resolve([200, data]);
      }
    });
  });
}

/* index路由 */
router.get(/^\/[^\.]*$/, async (ctx, next)=>{
  const [state, text] = await readFile(serverFile + '/index.html');

  ctx.state = state;
  ctx.type = 'text/html';
  ctx.body = text;

  await next();
});

/* 静态文件 */
router.get(/^.*\.[^\.]+$/, async (ctx, next)=>{
  const pathFile = ctx.path;
  const [state, text] = await readFile(serverFile + pathFile);

  ctx.state = state;
  ctx.type = state === 200 ? mime.lookup(pathFile) : 'text/plain';
  ctx.body = text;

  await next();
});

/* 日志 */
app.use(logger());

/* 缓存 */
app.use(convert(
  staticCache(serverFile, {
    maxAge: 60 * 60 * 24 * 365
  })
));

/* ronter */
app.use(router.routes())
  .use(router.allowedMethods());

app.listen(port);
console.log('\x1B[32m%s\x1B[39m', `\nListening at http://localhost:${ port }\n`);