import React from 'react';
import {Card, Form, Input, Button, message, Icon, Checkbox} from 'antd';
const FormItem = Form.Item;

class FormLogin extends React.Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    //validateFields 只要有一个字段没有通过验证 err就不会为空
    this.props.form.validateFields((err, values) => {
      if(!err){
        message.success(`${userInfo.username} 通过验证可以提交！`);
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Card title='行内登录表单' className='card-wrap'>
          {/*
            layout='vertical'|'inline' 默认vertical
            getFieldDecorator 等同于 vue的v-model
          */}
          <Form>
            <FormItem>
              {
                getFieldDecorator('username',{
                  //验证规则
                  rules:[
                    {
                      required:true
                      ,message:'用户名不能为空'
                    }
                    ,{
                      min:5,max:10
                      ,message:'长度不再范围内'
                    }
                    ,{
                      // pattern:/^\w/g
                      pattern:new RegExp('^\\w+$','g')
                      ,message:'用户名必须为字母或则数字'
                    }
                  ]

                  //初始化值
                  // , initialValue:'Jack'
                })(<Input prefix={<Icon type='user'/>} placeholder='请输入用户名'/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password',{
                  //初始化值
                  initialValue:'666666'
                  //验证规则
                  ,rules:[]
                })(<Input prefix={<Icon type='lock'/>} placeholder='请输入密码'/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember',{
                  //必须两个属性同时设置才会打钩
                  initialValue:true
                  ,valuePropName:'checked'
                })(<Checkbox>记住密码</Checkbox>)
              }
              <a href="#" style={{float:'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type='primary' onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title='垂直登录表单' className='card-wrap'>
          <Form layout='inline'>
            <FormItem>
              <Input placeholder='请输入用户名'/>
            </FormItem>
            <FormItem>
              <Input placeholder='请输入密码'/>
            </FormItem>
            <FormItem>
              <Button type='primary'>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormLogin);
