/* element按需加载 */
import Vue from 'vue/dist/vue';
import { Layout, Header, Sider, Content, Footer, Menu, MenuItem, Submenu } from 'iview';
import 'iview/src/styles/index.less';

Vue.component('iview-layout', Layout);
Vue.component('iview-header', Header);
Vue.component('iview-sider', Sider);
Vue.component('iview-content', Content);
Vue.component('iview-footer', Footer);
Vue.component('iview-menu', Menu);
Vue.component('iview-menu-item', MenuItem);
Vue.component('iview-submenu', Submenu);