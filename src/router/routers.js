import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router/dist/vue-router';
import Index from '../modules/Index/Layout.vue';

Vue.use(VueRouter);

const routers: VueRouter = new VueRouter({
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
      component: (): Promise => import('../modules/Page/Layout.vue')
    }
  ]
});

export default routers;