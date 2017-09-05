// @flow
import React, { Component } from 'react';
import { Form, Input, Radio, Button, Icon } from 'antd';
import style from './style.sass';

@Form.create()
class Forms extends Component{
  onHandleSubmit(event: Object): void{
    event.preventDefault();
    const { validateFields, getFieldsValue }: {
      validateFields: Function,
      getFieldsValue: Function
    } = this.props.form;
    validateFields((err: ?string, value: any)=>{
      if(!err){
        console.log(getFieldsValue());
        alert('提交成功！');
      }
    });
  }
  render(): Object{
    const { getFieldDecorator }: { getFieldDecorator: Function } = this.props.form;  // 包装表单控件
    return(
      <div>
        <Form onSubmit={ this.onHandleSubmit.bind(this) } layout="horizontal">
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
            <Button type="primary" htmlType="submit">
              <Icon type="check-circle-o" />
              <span>提交</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Forms;