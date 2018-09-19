<template>
  <!-- 登录人信息 -->
  <div class="humanInformation">
    <i class="human" v-bind:class="icon['userTie']"></i>
    <span class="username">用户名</span>
    <button class="tools" type="button" title="退出系统">
      <i v-bind:class="icon['exit']"></i>
    </button>
  </div>
</template>

<script src="./humanInformation.js"></script>
<style src="./style.sass" lang="sass" scoped></style>