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

<script src="./index.js"></script>
<style src="./style.sass" scoped></style>