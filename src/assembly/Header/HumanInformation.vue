<template>
  <!-- 登录人信息 -->
  <div class="humanInformation">
    <i class="human" v-bind:class="icon['userTie']"></i>
    <span class="username">用户名</span>
    <button class="tools" type="button" title="退出系统">
      <i v-bind:class="icon['exit']"></i>
    </button>
  </div>
</template>

<script type="text/javascript">
  import icon from '../Icon/style.sass';

  export default {
    name: 'HumanInformation',
    data(): Object{
      return {
        icon
      };
    }
  };
</script>

<style lang="scss" scoped>
  .humanInformation {
    position: absolute;
    right: 30px;
    top: 14px;
    line-height: 16px;
  }
  .human, .username {
    cursor: default;
  }
  .human {
    font-size: 18px;
  }
  .username {
    margin: 0 20px 0 5px;
    font-size: 14px;
    vertical-align: 2px;
  }
  .tools {
    border: none;
    font-size: 16px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
  }
</style>