<template>
  <div class="vue-app" id="vue-app">
    <Layout />
  </div>
</template>

<script type="text/javascript">
  import Layout from './assembly/Layout/index.vue';

  export default {
    name: 'ApModule',
    components: {
      Layout
    }
  };
</script>

<style lang="sass">
  body, html, .vue-app
    width: 100%
    height: 100%
    overflow: hidden
  .vue-app
    position: relative
</style>