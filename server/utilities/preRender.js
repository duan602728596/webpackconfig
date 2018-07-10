const replaceTemplate = require('./replaceTemplate');
const server = require('../../build-server/server').default;

// 渲染新的html
function preRender(html, file, context){
  const shareData = {
    index: {
      text: 'Hello, world!'
    }
  };
  const render = server(file, context, shareData);
  return replaceTemplate(html.toString(), {
    render,
    shareData: JSON.stringify(shareData)
  });
}

module.exports = preRender;