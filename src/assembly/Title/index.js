/**
 * 可以用来改变网页title的组件
 */
import React, { Component } from 'react';

const defaultTitle: string = document.title;  // 保存网页默认的标题

class Title extends Component{
  componentWillMount(): void{
    // 组件挂载时添加标题
    document.title = 'children' in this.props ? this.props.children : defaultTitle;
  }
  render(): boolean{
    return false;
  }
}

export default Title;