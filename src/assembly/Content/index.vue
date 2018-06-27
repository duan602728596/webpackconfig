<template>
  <!--
    layout - Content
    页面内容
    组件用于展示页面的内容
    默认padding为10px
  -->
  <el-main class="content">
    <slot />
  </el-main>
</template>

<script type="text/javascript">
  export default {
    name: 'Content'
  };
</script>

<style lang="scss" scoped>
  .content {
    padding: 10px;
    overflow: auto;
  }
</style>