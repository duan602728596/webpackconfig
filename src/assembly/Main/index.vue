<template>
  <!--
    layout - main
    页面中部内容布局
    包含左侧的菜单Sider和右侧的内容Content
  -->
  <el-container class="main">
    <slot />
  </el-container>
</template>

<script type="text/javascript">
  export default {
    name: 'Main'
  };
</script>

<style lang="scss" scoped>
  .main {
    height: calc(100% - 80px);
    background-color: #fff;
  }
</style>