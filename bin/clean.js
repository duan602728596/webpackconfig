/* 删除文件的脚本 */
const fs = require('fs');
const path = require('path');

/* 删除文件 */
function unlink(filePath){
  return new Promise((resolve, reject)=>{
    fs.unlink(filePath, (err)=>{
      if(err){
        reject(err);
      }else{
        console.log(`DELETE: ${ filePath }`);
        resolve();
      }
    });
  }).catch((err)=>{
    console.error(err);
  });
}

/* 删除文件夹 */
function rmdir(filePath){
  return new Promise((resolve, reject)=>{
    fs.rmdir(filePath, (err)=>{
      if(err){
        reject(err);
      }else{
        console.log(`DELETE: ${ filePath }`);
        resolve();
      }
    });
  }).catch((err)=>{
    console.error(err);
  });
}

/* 列出目录下的所有文件 */
function readdir(filePath){
  return new Promise((resolve, reject)=>{
    fs.readdir(filePath, (err, files)=>{
      if(err){
        reject(err);
      }else{
        resolve(files);
      }
    });
  }).catch((err)=>{
    console.error(err);
  });
}

(async function(){
  try{
    // 删除dll文件
    await unlink(path.resolve(__dirname, '../build/script/dll.js'));
    // 删除rmdir
    const imgPath = path.resolve(__dirname, '../build-server/image');
    if(fs.existsSync(imgPath)){
      await rmdir(imgPath);
    }
  }catch(err){
    console.error(err);
  }
})();