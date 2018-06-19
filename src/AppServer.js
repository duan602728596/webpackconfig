import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Switch } from 'react-router';
import { Provider } from 'react-redux';
import storeFactory from './store/store';
import './common.sass';
import ServerRouters from './router/ServerRouters';

function server(url: string, context: Object = {}, shareData: Object): string{
  return renderToString(
    <Provider store={ storeFactory(shareData) }>
      <StaticRouter location={ url } context={ context }>
        <Switch>
          <ServerRouters />
        </Switch>
      </StaticRouter>
    </Provider>
  );
}

export default server;