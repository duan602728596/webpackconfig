import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncModule from './asyncModule';
import Index from '../modules/Index/Layout';
import List from 'bundle-loader?lazy&name=list!../modules/List/Layout';
import Form from 'bundle-loader?lazy&name=form!../modules/Form/Layout';

const ListBundle: Function = asyncModule(List);
const FormBundle: Function = asyncModule(Form);

class Routers extends Component{
  render(): Object{
    return (
      <Switch>
        <Route path="/" component={ Index } exact={ true } />
        <Route path="/Index" component={ Index } />
        <Route path="/List" component={ ListBundle } />
        <Route path="/Form" component={ FormBundle } />
      </Switch>
    );
  }
}

export default Routers;