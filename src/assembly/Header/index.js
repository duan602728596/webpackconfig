import icon from '../Icon/style.sass';
import HumanInformation from './HumanInformation.vue';

type options = {
  id: string,
  name: string,
  href: string,
  icon: string
};

export const navOptions: options[] = [
  {
    id: 'home',
    name: '主页',
    href: '/Home',
    icon: icon['home']
  },
  {
    id: 'page',
    name: '列表',
    href: '/Page',
    icon: icon['cog']
  },
  {
    id: 'form',
    name: '表单',
    href: '/Form',
    icon: icon['users']
  }
];

export default {
  name: 'Header',
  components: {
    HumanInformation
  },
  data(): Object{
    return {
      navOptions
    };
  }
};