import Vue from 'vue/dist/vue';
import VueHelmet from 'vue-helmet';
import './iview';
import App from './AppModule.vue';
import { storeFactory } from './store/store';
import routers from './router/routers';
import './common.sass';

Vue.use(VueHelmet);

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

if(module.hot){
  module.hot.accept();
}