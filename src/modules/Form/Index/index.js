import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Radio, Button } from 'antd';
import style from './style.sass';

@Form.create()
class Forms extends Component{
  static propTypes: Object = {
    form: PropTypes.object
  };

  handleSubmit(event: Event): void{
    event.preventDefault();
    const { validateFields, getFieldsValue }: {
      validateFields: Function,
      getFieldsValue: Function
    } = this.props.form;
    validateFields((err: ?string, value: any): void=>{
      if(!err){
        console.log(getFieldsValue());
        alert('提交成功！');
      }
    });
  }
  render(): React.Element{
    const { getFieldDecorator }: { getFieldDecorator: Function } = this.props.form;  // 包装表单控件
    return (
      <Form onSubmit={ this.handleSubmit.bind(this) } layout="horizontal">
        <img src={ require('./image.jpg') } />
        <Form.Item className={ style.formGroup } label="姓名">
          {
            getFieldDecorator('name', {
              rules: [
                {
                  message: '请输入姓名',
                  required: true,
                  whitespace: true
                }
              ]
            })(
              <Input />
            )
          }
        </Form.Item>
        <Form.Item className={ style.formGroup } label="姓别">
          {
            getFieldDecorator('sex', {
              initialValue: 'man'
            })(
              <Radio.Group>
                <Radio value="man">男</Radio>
                <Radio value="woman">女</Radio>
              </Radio.Group>
            )
          }
        </Form.Item>
        <Form.Item className={ style.formGroup }>
          <Button type="primary" htmlType="submit" icon="check-circle-o">提交</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Forms;