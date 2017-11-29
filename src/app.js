import 'core-js/es6/promise';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './common.sass';
import Layout from './assembly/Layout';

/* app */
ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={ (props: Object): Object=>(<div>登录</div>) } exact />
        <Route component={ Layout } exact />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-app')
);

/* 热替换 */
if(module.hot){
  module.hot.accept();
}