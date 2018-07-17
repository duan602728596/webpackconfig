import React, { Component } from 'react';
import { Table } from 'antd';

function dataSource(): Object[]{
  const arr: Object[] = [];
  for(let i: number = 0, j: number = 32; i < j; i++){
    arr.push({
      id: `PRO${ i }`,
      name: `胡彦斌${ i }`,
      age: 20 + i,
      address: '西湖区湖底公园1号'
    });
  }
  return arr;
}

class Index extends Component{
  columns(): Object[]{
    return [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: '30%'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: '30%'
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
        width: '40%'
      }
    ];
  }
  render(): React.ChildrenArray<React.Element>{
    return [
      <Table key={ 0 }
        dataSource={ dataSource() }
        rowKey={ (item: Object): string => item.id }
        columns={ this.columns() }
        pagination={{
          defaultPageSize: 20,
          showSizeChanger: true,
          showQuickJumper: true
        }}
        bordered={ true }
      />
    ];
  }
}

export default Index;