import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './Index/index';

class ModuleLayout extends Component{
  render(): Object{
    return (
      <Switch key={ 1 }>
        <Route path="/" component={ Index } exact={ true } />
        <Route path="/Index" component={ Index } exact={ true } />
      </Switch>
    );
  }
}

export default ModuleLayout;