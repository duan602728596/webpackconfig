// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../modules/Home/Layout';
import List from '../modules/List/Layout';
import Form from '../modules/Form/Layout';

/**
 * 路由模块
 * 此处全部使用同步加载的方式，防止Menu组件报错
 */
class Router extends Component{
  render(): Object{
    return(
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/Home" component={ Home } />
        <Route path="/List" component={ List } />
        <Route path="/Form" component={ Form } />
      </Switch>
    );
  }
}

export default Router;