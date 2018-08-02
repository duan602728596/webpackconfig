<template>
  <!--
    layout
    页面整体布局
    Header 显示页面header
    Footer 显示版权信息
    Routers 根据路由渲染页面
   -->
  <el-container class="layout">
    <Header />
    <router-view />
    <el-footer class="footer" height="30px">版权所有</el-footer>
  </el-container>
</template>

<script type="text/javascript">
  import Header from '../Header/index.vue';

  export default {
    name: 'Layout',
    components: {
      Header
    }
  };
</script>

<style lang="scss" scoped>
  .layout {
    height: 100%;
  }
  .footer {
    line-height: 30px;
    font-size: 12px;
    background-color: #ddd;
    text-align: center;
  }
</style>