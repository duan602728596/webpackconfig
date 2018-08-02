<template>
  <div class="vue-app" id="vue-app" style="height: 100%;">
    <Layout />
  </div>
</template>

<script type="text/javascript">
  import Layout from './assembly/Layout/index.vue';

  export default {
    name: 'AppModule',
    components: {
      Layout
    }
  };
</script>

<style lang="scss">
  body, html, .vue-app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>