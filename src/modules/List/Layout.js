import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Icon } from 'antd';
import Main from '../../assembly/Main/index';
import Sider from '../../assembly/Sider/index';
import Content from '../../assembly/Content/index';
import icon from '../../assembly/Icon/style.sass';
import Index from './Index/index';

/* 配置二、三级导航菜单 */
const options: {
  id: string,
  name: string,
  url: string,
  icon: ?(string | Element),   // 传入一个字符串或节点
  children: ?{
    id: string,
    name: string,
    url: string,
    icon: ?(string | Element)  // 传入一个字符串或节点
  }[]
}[] = [
  {
    id: 's1',
    name: '导航菜单1',
    url: '/List/S1',
    icon: <Icon type="area-chart" />
  },
  {
    id: 's2',
    name: '导航菜单2',
    url: '/List/S2',
    icon: icon.cog
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

class ModuleLayout extends Component{
  render(): Array{
    return [
      <Helmet key={ 0 }>
        <title>列表展示</title>
      </Helmet>,
      <Main key={ 1 }>
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