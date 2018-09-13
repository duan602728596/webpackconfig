<template>
  <div>
    <helmet-provider>
      <helmet>
        <title>首页</title>
      </helmet>
    </helmet-provider>
    <Index />
  </div>
</template>

<script type="text/javascript">
  import Index from './Index/index.vue';

  export default {
    components: {
      Index
    }
  };
</script>