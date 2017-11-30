import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../../assembly/Main/index';
import Content from '../../assembly/Content/index';
import Title from '../../assembly/Title/index';
import Index from './Index/index';

class ModuleLayout extends Component{
  render(): Object{
    return (
      <Main>
        <Title />
        <Content>
          <Switch>
            <Route path="/" component={ Index } exact />
            <Route path="/Home" component={ Index } exact />
          </Switch>
        </Content>
      </Main>
    );
  }
}

export default ModuleLayout;