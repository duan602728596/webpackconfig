/**
 * 异步加载时显示loading
 */
import React, { Component } from 'react';
import { Spin } from 'antd';
import Main from '../Main/index';
import style from './style.sass';

class SwitchLoading extends Component{
  render(): React.Element{
    return (
      <Main>
        <div className={ style.loading }>
          <Spin size="large" tip="Loading..." />
        </div>
      </Main>
    );
  }
}

export default SwitchLoading;