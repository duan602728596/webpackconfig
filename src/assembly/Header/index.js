/**
 * layout - header
 * 顶部header布局
 * 显示logo、导航、登录人信息等
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Icon } from 'antd';
import style from './style.sass';
import ErrorBoundary from '../ErrorBoundary/index';
import HumanInformation from './HumanInformation';

type options = {
  id: string,
  name: string,
  href: string,
  icon: ?(string | React.Element)
};

export const navOptions: options[] = [
  {
    id: 'home',
    name: '主页',
    href: '/Index',
    icon: <Icon className={ style.icon } type="home" theme="outlined" />
  },
  {
    id: 'list',
    name: '列表',
    href: '/List',
    icon: <Icon className={ style.icon } type="bars" theme="outlined" />
  },
  {
    id: 'form',
    name: '表单',
    href: '/Form',
    icon: <Icon className={ style.icon } type="table" theme="outlined" />
  }
];

const len: boolean = navOptions.length > 0;

class Header extends Component{
  // 判断首页home
  oddEvent(item: options, match: Object, location: Object): boolean{
    const { pathname }: { pathname: string } = location;
    const { href }: { href: string } = item;
    const reg: RegExp = new RegExp(`^${ href }.*$`, 'ig');
    if(len && pathname === '/' && href === navOptions[0].href){
      return true;
    }
    return match && reg.test(pathname);
  }
  navList(options: options[]): React.ChildrenArray<React.Element>{
    return options.map((item: options, index: number): Object=>{
      return (
        <li key={ item.id }>
          <NavLink to={ item.href } activeClassName={ style.navActive } isActive={ this.oddEvent.bind(this, item) }>
            {
              do{
                if(item.icon){
                  typeof item.icon === 'string'
                    ? <i className={ item.icon } />
                    : item.icon;
                }
              }
            }
            <span>{ item.name }</span>
          </NavLink>
        </li>
      );
    });
  }
  render(): React.Element{
    return (
      <ErrorBoundary>
        <img className={ style.logo } src={ require('./logo.png') } alt="管理平台 demo" title="管理平台 demo" />
        <nav className={ style.nav }>
          <ul className={ classNames(style.navList, 'clearfix') }>
            { this.navList(navOptions) }
          </ul>
        </nav>
        <HumanInformation />
      </ErrorBoundary>
    );
  }
}

export default Header;