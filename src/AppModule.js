import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { hot } from 'react-hot-loader';
import { storeFactory } from './store/store';
import './common.sass';
import Layout from './assembly/Layout';

/* 热替换 */
@hot(module)
class App extends Component{
  render(): React.Element{
    return (
      <Provider store={ storeFactory(window.__INITIAL_STATE__ || {}) }>
        <LocaleProvider locale={ zhCN }>
          <BrowserRouter>
            <Switch>
              <Route path="/Login" component={ (props: Object): React.Element => <div>登录</div> } exact={ true } />
              <Route component={ Layout } exact={ true } />
            </Switch>
          </BrowserRouter>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;