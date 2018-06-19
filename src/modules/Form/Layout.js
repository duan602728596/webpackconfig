import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Index from './Index/index';

@hot(module)
class ModuleLayout extends Component{
  render(): Object{
    return (
      <Switch>
        <Route path="/Form" component={ Index } exact={ true } />
      </Switch>
    );
  }
}

export default ModuleLayout;