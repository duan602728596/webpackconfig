<template>
  <!--
    layout
    页面整体布局
    Header 显示页面header
    Footer 显示版权信息
    Routers 根据路由渲染页面
   -->
  <iview-layout class="layout">
    <Header />
    <router-view />
    <iview-footer class="footer">版权所有</iview-footer>
  </iview-layout>
</template>

<script src="./index.js"></script>
<style src="./style.sass" scoped></style>