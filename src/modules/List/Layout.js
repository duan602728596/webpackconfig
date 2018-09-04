import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Helmet from 'react-helmet';
import Main from '../../assembly/Main/index';
import Sider from '../../assembly/Sider/index';
import Content from '../../assembly/Content/index';
import Index from './Index/index';

/* 配置二、三级导航菜单 */
const options: {
  id: string,
  name: string,
  url: string,
  icon: ?(string | React.Element),    // 传入一个字符串或节点
  component: Function,
  children: ?{
    id: string,
    name: string,
    url: string,
    icon: ?(string | React.Element),  // 传入一个字符串或节点
    component: Function
  }[]
}[] = [
  {
    id: 's1',
    name: '导航菜单1',
    url: '/List/S1'
  },
  {
    id: 's2',
    name: '导航菜单2',
    url: '/List/S2'
  },
  {
    id: 's3',
    name: '导航菜单3',
    children: [
      {
        id: 'c31',
        name: '子导航1',
        url: '/List/S3/C1'
      },
      {
        id: 'c32',
        name: '子导航2',
        url: '/List/S3/C2'
      }
    ]
  }
];

@hot(module)
class ModuleLayout extends Component{
  render(): React.ChildrenArray<React.Element>{
    return [
      <Helmet key="helmet">
        <title>列表展示</title>
      </Helmet>,
      <Main key="main">
        <Sider options={ options } />
        <Content>
          <Switch>
            <Route path="/List" component={ Index } exact={ true } />
            <Route path="/List/S1" component={ Index } exact={ true } />
            <Route path="/List/S2" component={ Index } exact={ true } />
            <Route path="/List/S3/C1" component={ Index } exact={ true } />
            <Route path="/List/S3/C2" component={ Index } exact={ true } />
          </Switch>
        </Content>
      </Main>
    ];
  }
}

export default ModuleLayout;
export reducer from './store/reducer';