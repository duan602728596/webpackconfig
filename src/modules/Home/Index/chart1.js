// @flow
/**
 * 柱状图
 */
import React, { Component } from 'react';
import { Card } from 'antd';
import ReactEchart from 'echarts-for-react';

/* 模拟数据 */
const option: Object = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type : 'category',
      data : ['节点一', '节点二', '节点三', '节点四', '节点五', '节点六', '节点七'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type : 'value'
    }
  ],
  series: [
    {
      name: '数据',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};

class Chart1 extends Component{
  render(): Object{
    return (
      <Card title="柱状图">
        <ReactEchart option={ option } />
      </Card>
    );
  }
}

export default Chart1;