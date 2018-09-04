/**
 * 登录人信息
 */
import React, { Component } from 'react';
import { Icon } from 'antd';
import style from './style.sass';

class HumanInformation extends Component{
  render(): React.Element{
    return (
      <div className={ style.humanInformation }>
        <Icon className={ style.human } type="user" theme="outlined" />
        <span className={ style.username }>用户名</span>
        <button className={ style.tools } type="button" title="退出系统">
          <Icon type="export" theme="outlined" />
        </button>
      </div>
    );
  }
}

export default HumanInformation;