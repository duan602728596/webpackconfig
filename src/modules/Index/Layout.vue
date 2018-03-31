<template>
  <Main>
    <Title title="网站title" />
    <Sider v-bind:options="options" />
    <Content>
      <div>1212</div>
    </Content>
  </Main>
</template>

<script type="text/javascript">
  import Main from '../../assembly/Main/index.vue';
  import Sider from '../../assembly/Sider/index.vue';
  import Content from '../../assembly/Content/index.vue';
  import Title from '../../assembly/Title/index.vue';

  /* 配置二、三级导航菜单 */
  const options: {
    id: string,
    name: string,
    url: string,
    children: ?{
      id: string,
      name: string,
      url: string
    }[]
  }[] = [
    {
      id: 's1',
      name: '导航菜单1',
      url: '/Home/S1'
    },
    {
      id: 's2',
      name: '导航菜单2',
      url: '/Home/S2'
    },
    {
      id: 's3',
      name: '导航菜单3',
      children: [
        {
          id: 'c31',
          name: '子导航1',
          url: '/Home/S3/C1'
        },
        {
          id: 'c32',
          name: '子导航2',
          url: '/Home/S3/C2'
        }
      ]
    }
  ];

  export default {
    components: {
      Main,
      Sider,
      Content,
      Title
    },
    data(): Object{
      return {
        options
      };
    }
  };
</script>