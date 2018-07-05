/**
 * layout
 * 页面整体布局
 * Header 显示页面header
 * Footer 显示版权信息
 * Routers 根据路由渲染页面
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import style from './style.sass';
import Header from '../Header/index';
import Routers from '../../router/Routers';

class MyLayout extends Component{
  render(): React.Element{
    return (
      <Layout className={ style.layout }>
        <Layout.Header className={ style.header }>
          <Header />
        </Layout.Header>
        <Routers />
        <Layout.Footer className={ style.footer }>版权所有</Layout.Footer>
      </Layout>
    );
  }
}

export default MyLayout;