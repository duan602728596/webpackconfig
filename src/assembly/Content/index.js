/**
 * layout - Content
 * 页面内容
 * 组件用于展示页面的内容
 * 默认padding为10px
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import style from './style.sass';
import ErrorBoundary from '../ErrorBoundary/index';

class Content extends Component{
  render(): Object{
    return (
      <ErrorBoundary>
        <Layout.Content className={ style.content }>
          { this.props.children }
        </Layout.Content>
      </ErrorBoundary>
    );
  }
}

export default Content;