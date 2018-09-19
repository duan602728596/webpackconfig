<template>
  <!--
    layout - Sider
    页面左侧菜单
    渲染二级和三级菜单
  -->
  <i-sider class="sider" width="180">
    <i-menu width="180" default-active="">
      <template v-for="item, index in $props.options">
        <!-- 渲染group -->
        <i-submenu v-if=" 'children' in item && item.children.length > 0"
          v-bind:key="item.id"
          v-bind:index="item.id"
          :name="'submenu-' + index"
        >
          <template slot="title">{{ item.name }}</template>
          <i-menu-item v-for="item2, index2 in item.children"
              v-bind:key="item2.id"
              v-bind:index="item2.id"
              :name="'item-' + index + '-' + index2"
          >
            <router-link class="link" v-bind:to="item2.url">{{ item2.name }}</router-link>
          </i-menu-item>
        </i-submenu>
        <!-- 渲染item -->
        <i-menu-item v-else v-bind:key="item.id" v-bind:index="item.id" :name="'item-' + index">
          <router-link class="link" v-bind:to="item.url">{{ item.name }}</router-link>
        </i-menu-item>
      </template>
    </i-menu>
  </i-sider>
</template>

<script src="./index.js"></script>
<style src="./style.sass" lang="sass" scoped></style>