<template>
  <div>
    <div>Index</div>
    <div>{{ count }}</div>
    <button type="button" v-on:click="add()">添加</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(): Object{
      return {
        count: this.$store.getters['index/getCount']()
      };
    },
    methods: {
      add(){
        this.$store.dispatch('index/add');
      }
    }
  };
</script>