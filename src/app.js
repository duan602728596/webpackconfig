// @flow
import 'core-js/es6/promise';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './common.sass';
import Layout from './components/Layout';

/* 判断是否需要登录 */
@withRouter
class App extends Component{
  render(): Object{
    const { pathname }: { pathname: string } = this.props.location; // 判断登录渲染
    return !/^\/login$/ig.test(pathname) ?
      (<Layout />) :
      (<div>登录</div>);
  }
}

/* app */
ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-app')
);

/* 热替换 */
if(module.hot){
  module.hot.accept();
}