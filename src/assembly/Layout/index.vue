<template>
  <!--
    layout
    页面整体布局
    Header 显示页面header
    Footer 显示版权信息
    Routers 根据路由渲染页面
   -->
  <i-layout class="layout">
    <Header />
    <router-view />
    <i-footer class="footer">版权所有</i-footer>
  </i-layout>
</template>

<script src="./index.js"></script>
<style src="./style.sass" lang="sass" scoped></style>