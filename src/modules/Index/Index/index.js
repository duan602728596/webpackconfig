import React, { Component } from 'react';
import { Row, Col } from 'antd';
import style from './style.sass';
import ListDisplay from './listDisplay';

class Index extends Component{
  render(): React.Element{
    return (
      <Row type="flex" gutter={ 10 }>
        {/* 左侧显示列表 */}
        <Col xs={ 24 } sm={ 24 } md={ 12 } lg={ 10 } xl={ 10 } className={ style.mb10 }>
          <ListDisplay />
        </Col>
        {/* 右侧显示图表 */}
        <Col xs={ 24 } sm={ 24 } md={ 12 } lg={ 14 } xl={ 14 }>
          <Row type="flex" gutter={ 10 }>
            <Col xs={ 24 } sm={ 12 } md={ 24 } lg={ 12 } xl={ 12 } className={ style.mb10 }>图表</Col>
            <Col xs={ 24 } sm={ 12 } md={ 24 } lg={ 12 } xl={ 12 } className={ style.mb10 }>图表</Col>
            <Col xs={ 24 } sm={ 12 } md={ 24 } lg={ 12 } xl={ 12 } className={ style.mb10 }>图表</Col>
            <Col xs={ 24 } sm={ 12 } md={ 24 } lg={ 12 } xl={ 12 } className={ style.mb10 }>图表</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Index;