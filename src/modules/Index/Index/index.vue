<template>
  <div>
    <div>Index</div>
    <div>{{ $store.getters['index/getCount']() }}</div>
    <button type="button" v-on:click="handleAddState()">添加</button>
  </div>
</template>

<script src="./index.js"></script>