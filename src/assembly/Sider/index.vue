<template>
  <!--
    layout - Sider
    页面左侧菜单
    渲染二级和三级菜单
  -->
  <el-aside class="sider" width="180px">
    <el-menu style="border-right: none;">
      <el-menu-item index="1">
        <router-link to="/Home">
          <span>导航1</span>
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script type="text/javascript">
  export default {
    name: 'Sider'
  };
</script>

<style lang="sass" scoped>
  .sider
    overflow-x: hidden
    overflow-y: auto
    border-right: 1px solid #e9e9e9
    background-color: transparent
</style>