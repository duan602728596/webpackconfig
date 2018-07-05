/* 服务器端渲染组件 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Index from '../modules/Index/Layout';
import List from '../modules/List/Layout';
import Form from '../modules/Form/Layout';

class ServerRouters extends Component{
  render(): React.Element{
    return (
      <Switch>
        <Route path="/" component={ Index } exact={ true } />
        <Route path="/Index" component={ Index } />
        <Route path="/List" component={ List } />
        <Route path="/Form" component={ Form } />
      </Switch>
    );
  }
}

export default ServerRouters;