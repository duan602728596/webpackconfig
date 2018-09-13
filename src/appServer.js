import Vue from 'vue/dist/vue';
import { Helmet, HelmetProvider } from '@jnields/vue-helmet';
import classNames from 'classnames';
import { createRenderer } from 'vue-server-renderer';
import App from './AppModule.vue';
import { storeFactory } from './store/store';
import serverRouters from './router/serverRouters';
import './common.sass';

Vue.component('helmet', Helmet);
Vue.component('helmet-provider', HelmetProvider);

const renderer: Object = createRenderer();

function server(url: string, context: Object = {}, initialState: Object): string{
  /* app */
  const app: Vue = new Vue({
    store: storeFactory(initialState),
    router: serverRouters,
    components: {
      App
    },
    template: '<App />'
  });

  Vue.prototype.classNames = classNames;

  serverRouters.push('_path' in context ? context._path : context.path);

  return new Promise((resolve: Function, reject: Function): void=>{
    serverRouters.onReady((): void=>{
      renderer.renderToString(app, (err: any, html: string): void=>{
        if(err){
          reject(err);
        }else{
          resolve(html);
        }
      });
    });
  });
}

export default server;