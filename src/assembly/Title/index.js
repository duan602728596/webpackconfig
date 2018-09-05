/* 可以用来改变网页title的组件 */
const defaultTitle: string = document.title;  // 保存网页默认的标题

export default {
  name: 'Title',
  props: ['title'],
  beforeMount(): void{
    // 组件挂载时添加标题
    document.title = 'title' in this.$props ? this.$props.title : defaultTitle;
  }
};