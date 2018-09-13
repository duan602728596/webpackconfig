<template>
  <Main>
    <helmet-provider>
      <helmet title="网站title"></helmet>
    </helmet-provider>
    <Content>
      <Index />
    </Content>
  </Main>
</template>

<script type="text/javascript">
  import Main from '../../assembly/Main/index.vue';
  import Content from '../../assembly/Content/index.vue';
  import Index from './Index/index.vue';

  export default {
    components: {
      Main,
      Content,
      Index
    }
  };
</script>