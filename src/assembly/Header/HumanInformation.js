/**
 * 登录人信息
 */
import React, { Component } from 'react';
import { css } from '../../utilities';
import style from './style.sass';
import icon from '../Icon/style.sass';

class HumanInformation extends Component{
  render(): React.Element{
    return (
      <div className={ style.humanInformation }>
        <i className={ css(icon.userTie, style.human) } />
        <span className={ style.username }>用户名</span>
        <button className={ style.tools } type="button" title="退出系统">
          <i className={ icon.exit } />
        </button>
      </div>
    );
  }
}

export default HumanInformation;