<template>
  <!--
    layout - Sider
    页面左侧菜单
    渲染二级和三级菜单
  -->
  <el-aside class="sider" width="180px">
    <el-menu style="border-right: none;" default-active="">
      <template v-for="item in $props.options">
        <!-- 渲染group -->
        <el-submenu v-if=" 'children' in item && item.children.length > 0" v-bind:key="item.id" v-bind:index="item.id">
          <template slot="title">{{ item.name }}</template>
          <el-menu-item-group>
            <el-menu-item style="padding-left: 0;" v-for="item2 in item.children" v-bind:key="item2.id" v-bind:index="item2.id">
              <router-link class="link" v-bind:to="item2.url">{{ item2.name }}</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 渲染item -->
        <el-menu-item style="padding-left: 0;" v-else v-bind:key="item.id" v-bind:index="item.id">
          <router-link class="link" v-bind:to="item.url">{{ item.name }}</router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script src="./index.js"></script>
<style src="./style.sass" scoped></style>