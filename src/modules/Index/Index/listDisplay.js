/**
 * 首页数据列表展示
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { Card, Spin } from 'antd';
import QueueAnim from 'rc-queue-anim';
import style from './style.sass';
import { listDisplayChange } from '../store/reducer';

/* state */
const state: Function = createStructuredSelector({
  listDisplay: createSelector(
    ($$state: Immutable.Map): Immutable.Map => $$state.get('index'),
    ($$data: Immutable.Map): Array => $$data.get('listDisplay').toJS()
  )
});

/* dispatch */
const dispatch: Function = (dispatch: Function): Object=>({
  action: bindActionCreators({
    listDisplayChange
  }, dispatch)
});

function simulationData(): Promise{
  return new Promise((resolve: Function, reject: Function): void=>{
    const data: string[] = [];
    for(let i: number = 0, j: number = 18; i < j; i++){
      data.push(`这是一条测试数据 ${ i }`);
    }
    setTimeout(resolve, 1500, data);
  });
}

@connect(state, dispatch)
class ListDisplay extends Component{
  state: {
    loading: boolean
  };

  static propTypes: Object = {
    listDisplay: PropTypes.array,
    action: PropTypes.objectOf(PropTypes.func)
  };

  constructor(): void{
    super(...arguments);

    this.state = {
      loading: true
    };
  }
  // 显示list
  listDisplay(): React.ChildrenArray<React.Element>{
    return this.props.listDisplay.map((item: string, index: number): Object=>{
      return (
        <li key={ index }>
          <Link to="/" title={ item }>{ item }</Link>
        </li>
      );
    });
  }
  async componentWillMount(): void{
    const data: Array = await simulationData();
    this.props.action.listDisplayChange({
      listDisplay: data
    });
    this.setState({
      loading: false
    });
  }
  render(): React.Element{
    return (
      <Card title="数据列表展示" extra={
        <Link className={ style.more } to="/" title="更多">更多</Link>
      }>
        <Spin size="default" spinning={ this.state.loading }>
          <QueueAnim className={ style.listDisplay } component="ul" type="alpha" interval={ 0 }>
            { this.listDisplay() }
          </QueueAnim>
        </Spin>
      </Card>
    );
  }
}

export default ListDisplay;