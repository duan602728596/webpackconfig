import Vue from 'vue/dist/vue';
import Vuex from 'vuex/dist/vuex';
import index from '../modules/Index/store/index';

Vue.use(Vuex);

const store: Vuex.Store = new Vuex.Store({
  modules: {
    index
  }
});

export default store;