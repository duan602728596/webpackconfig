import Vue from 'vue/dist/vue';
import { Helmet, HelmetProvider } from '@jnields/vue-helmet';
import classNames from 'classnames';
import './iview';
import App from './AppModule.vue';
import { storeFactory } from './store/store';
import routers from './router/routers';
import './common.sass';

Vue.component('helmet', Helmet);
Vue.component('helmet-provider', HelmetProvider);

/* app */
const app: Vue = new Vue({
  el: '#vue-app',
  store: storeFactory(window.__INITIAL_STATE__ || {}),
  router: routers,
  components: {
    App
  },
  template: '<App />'
});

Vue.prototype.classNames = classNames;

if(module.hot){
  module.hot.accept();
}