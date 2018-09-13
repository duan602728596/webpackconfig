import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router/dist/vue-router';
import Index from '../modules/Index/Layout.vue';
import Page from '../modules/Page/Layout.vue';

Vue.use(VueRouter);

const serverRouters: VueRouter = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
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

export default serverRouters;