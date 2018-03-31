<template>
  <!--
    layout - header
    顶部header布局
    显示logo、导航、登录人信息等
   -->
  <el-header class="header" height="50px">
    <img class="logo" src="./logo.png" alt="管理平台 demo" title="管理平台 demo">
    <nav class="nav">
      <ul class="clearfix">
        <li v-for="item in navOptions">
          <router-link v-bind:to="item.href" active-class="navActive">
            <i v-bind:class="item.icon"></i>
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <HumanInformation />
  </el-header>
</template>

<script type="text/javascript">
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
      id: 'list',
      name: '列表',
      href: '/List',
      icon: icon['cog']
    },
    {
      id: 'form',
      name: '表单',
      href: '/Form',
      icon: icon['users']
    }
  ];

  const len: boolean = navOptions.length > 0;

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
</script>

<style lang="sass" scoped>
  .header, .logo, .nav
    position: absolute
  .header
    top: 0
    left: 0
    right: 0
    color: #fff
    background-color: #0d96ea
  .logo
    left: 10px
    top: 12px
    height: 25px
  .nav, .nav ul, .nav li, .nav a
    height: 50px
  .nav
    top: 0
    left: 180px
    li
      float: left
    a
      display: block
      padding: 0 11px
      font-size: 16px
      line-height: 50px
      color: #fff
      -webkit-transition: color .5s, background-color .5s
      transition: color .5s, background-color .5s
      &:hover
        text-decoration: none
      &.navActive
        background-color: rgb(34, 91, 238)
        text-decoration: none
    span
      margin-left: 4px
      vertical-align: 2px
</style>