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

<script src="./index.js"></script>
<style src="./style.sass" scoped></style>