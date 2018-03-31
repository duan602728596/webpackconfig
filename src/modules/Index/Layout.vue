<template>
  <Main>
    <Title title="网站title" />
    <Content>
      <Index />
    </Content>
  </Main>
</template>

<script type="text/javascript">
  import Main from '../../assembly/Main/index.vue';
  import Content from '../../assembly/Content/index.vue';
  import Title from '../../assembly/Title/index.vue';
  import Index from './Index/index.vue';

  export default {
    components: {
      Main,
      Content,
      Title,
      Index
    }
  };
</script>