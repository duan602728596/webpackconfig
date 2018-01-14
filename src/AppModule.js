import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { hot } from 'react-hot-loader'
import store from './store/store';
import './common.sass';
import Layout from './assembly/Layout';

/* 热替换 */
@hot(module)
class App extends Component{
  render(): Object{
    return (
      <Provider store={ store }>
        <LocaleProvider locale={ zhCN }>
          <BrowserRouter>
            <Switch>
              <Route path="/Login" component={ (props: Object): Object=>(<div>登录</div>) } exact />
              <Route component={ Layout } exact />
            </Switch>
          </BrowserRouter>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;