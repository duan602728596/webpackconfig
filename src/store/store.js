import Vue from 'vue/dist/vue';
import Vuex from 'vuex/dist/vuex';
import index from '../modules/Index/store/index';

Vue.use(Vuex);

const store: Vuex.Store = {};

export function storeFactory(initialState: ?Object): Object{
  /* store */
  Object.assign(store, new Vuex.Store({
    state: initialState,
    getters: {
      getInitialStateData: (state: Object): Function => (key: string): number => state[key]
    },
    modules: {
      index
    }
  }));

  return store;
}


export default store;