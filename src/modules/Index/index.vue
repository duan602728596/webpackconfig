<template>
  <div>
    <div>Index</div>
    <div>{{ $store.getters['index/getCount']() }}</div>
    <button type="button" v-on:click="add()">添加</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(): Object{
      return {};
    },
    methods: {
      add(){
        this.$store.dispatch('index/add');
      }
    }
  };
</script>

<style scoped>
</style>