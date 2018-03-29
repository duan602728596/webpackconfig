import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router/dist/vue-router';
import Index from '../modules/Index/index.vue';
import Page from 'bundle-loader?lazy&name=page!../modules/Page/index.vue';

Vue.use(VueRouter);

const routers: VueRouter = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Page',
      name: 'page',
      component: Page
    }
  ]
});

export default routers;