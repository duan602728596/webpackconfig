// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../../components/Main/index';
import Sider from '../../components/Sider/index';
import Content from '../../components/Content/index';
import Title from '../../components/Title/index';
import asyncModule from '../../router/asyncModule';
import Index from 'bundle-loader?lazy&name=form!./Index/index';

/* 配置二、三级导航菜单 */
const options: {
  id: string,
  name: string,
  url: string,
  icon: ?(string | Object),   // 传入一个字符串或节点
  children: ?{
    id: string,
    name: string,
    url: string,
    icon: ?(string | Object)  // 传入一个字符串或节点
  }[]
}[] = [
  {
    id: 's1',
    name: '导航菜单1',
    url: '/Form/S1'
  }
];

class Home extends Component{
  render(): Object{
    return(
      <Main>
        <Title>表单展示</Title>
        <Sider options={ options } />
        <Content>
          <Switch>
            <Route path="/Form" component={ asyncModule(Index) } exact />
            <Route path="/Form/S1" component={ asyncModule(Index) } exact />
          </Switch>
        </Content>
      </Main>
    );
  }
}

export default Home;