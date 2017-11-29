/**
 * layout - Sider
 * 页面左侧菜单
 * 渲染二级和三级菜单
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import style from './style.sass';
import ErrorBoundary from '../ErrorBoundary/index';

@withRouter
class Sider extends Component{
  // 根据pathname获取默认的selectKey
  getSelectKey(arr): ?string{
    let key: ?string = null;
    const reg: RegExp = new RegExp(`^${ this.props.location.pathname }.*$`, 'ig');
    for(let i: number = 0, j: number = arr.length; i < j; i++){
      if('children' in arr[i] && arr[i].children.length > 0){
        const key2: ?string = this.getSelectKey(arr[i].children);
        if(key2){
          key = key2;
          break;
        }
      }else{
        if(reg.test(arr[i].url)){
          key = arr[i].id;
          break;
        }
      }
    }
    return key;
  }
  // 判断图标的显示
  hasIcon(item: Object): boolean | Object{
    if('icon' in item){
      return typeof item.icon === 'string' ? (<i className={ style.icon + ' ' + item.icon } />) : item.icon;
    }else{
      return false;
    }
  }
  // 渲染菜单
  menu(arr: Array): Object{
    return arr.map((item: Object, index: number): Object=>{
      if('children' in item && item.children.length > 0){
        // 当有children时，返回Menu.SubMenu，里面包裹Menu.Item
        return (
          <Menu.SubMenu key={ item.id } title={
            <span className="clearfix">
              { this.hasIcon(item) }
              <span>{ item.name }</span>
            </span>
          }>
            { this.menu(item.children) }
          </Menu.SubMenu>
        );
      }else{
        // 当没有children时，返回Menu.Item
        return (
          <Menu.Item key={ item.id }>
            <Link className={ style.link } to={ item.url }>
              { this.hasIcon(item) }
              <span>{ item.name }</span>
            </Link>
          </Menu.Item>
        );
      }
    });
  }
  render(): Object{
    const options: Array = this.props.options || [];
    const sk = this.getSelectKey(options);
    return (
      <ErrorBoundary>
        <Layout.Sider className={ style.sider } width={ 180 }>
          <Menu theme="light" mode="inline" defaultSelectedKeys={ [sk] } style={{ borderRight: 'none' }}>
            { this.menu(options) }
          </Menu>
        </Layout.Sider>
      </ErrorBoundary>
    );
  }
}

Sider.__ANT_LAYOUT_SIDER = true;

export default Sider;