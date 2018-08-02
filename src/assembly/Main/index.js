/**
 * layout - main
 * 页面中部内容布局
 * 包含左侧的菜单Sider和右侧的内容Content
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import style from './style.sass';

class Main extends Component{
  static propTypes: Object = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.element
    ])
  };

  render(): React.Element{
    return (
      <Layout className={ style.main }>
        { this.props.children }
      </Layout>
    );
  }
}

export default Main;