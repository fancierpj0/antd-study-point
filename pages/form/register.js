import React from 'react';
import {Card, Form, Button, Input, Checkbox, Radio, Select, Switch,DatePicker, TimePicker, Upload, Icon, message, InputNumber} from 'antd';
import moment from 'moment'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component{
  state = {
    userImg: ''
  };

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  handleChange = (info) => {
    if(info.file.status === 'uploading'){
      this.setState({loading: true});
      return;
    }

    if(info.file.status === 'done'){
      //一般是返回已经存好在服务器上的图片地址
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg:imageUrl
        , loading: false
      }));
    }
  };

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo));

    //reset
    this.props.form.resetFields();
  };

  render(){
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol:{
        xs:24
        ,sm:4
      }
      ,wrapperCol:{
        xs:24
        ,sm:20
      }
    };

    const offsetLayout = {
      wrapperCol: {
        xs: 24
        , sm: {
          span: 12
          , offset: 4
        }
      }
    };

    return (
      <div>
        <Card title='注册表单'>
          <Form layout='horizontal'>
            <FormItem label='用户名' {...formItemLayout}>
              {
                getFieldDecorator('username',{
                  rules:[
                    {
                      required:true
                      ,message:'用户名不能为空'
                    }
                  ]
                })(<Input  placeholder='请输入用户名'/>)
              }
            </FormItem>

            <FormItem label='密码' {...formItemLayout}>
              {
                getFieldDecorator('password',{
                  //不设置rules里的required属性就不会label开头就不会有红星
                  initialValue:''
                })(<Input  placeholder='请输入密码'/>)
              }
            </FormItem>

            <FormItem label='性别' {...formItemLayout}>
              {
                getFieldDecorator('sex',{
                  initialValue:''
                })(<RadioGroup>
                  <Radio value='1'>男</Radio>
                  <Radio value='2'>女</Radio>
                </RadioGroup>)
              }
            </FormItem>

            <FormItem label='年龄' {...formItemLayout}>
              {
                getFieldDecorator('age',{
                  initialValue:15
                })(<InputNumber/>)
              }
            </FormItem>

            <FormItem label='当前状态' {...formItemLayout}>
              {
                getFieldDecorator('state',{
                  initialValue:'4'
                })(<Select>
                  <Option value='1'>咸鱼一条</Option>
                  <Option value='2'>风华浪子</Option>
                  <Option value='3'>北大才子</Option>
                  <Option value='4'>百度FE</Option>
                  <Option value='5'>创业者</Option>
                </Select>)
              }
            </FormItem>

            <FormItem label='爱好' {...formItemLayout}>
              {
                getFieldDecorator('interest',{
                  initialValue:['2','6']
                })(<Select mode='multiple'>
                  <Option value='1'>游泳</Option>
                  <Option value='2'>打篮球</Option>
                  <Option value='3'>踢足球</Option>
                  <Option value='4'>跑步</Option>
                  <Option value='5'>爬山</Option>
                  <Option value='6'>骑行</Option>
                  <Option value='7'>桌球</Option>
                  <Option value='8'>麦霸</Option>
                </Select>)
              }
            </FormItem>

            <FormItem label='是否已婚' {...formItemLayout}>
              {
                getFieldDecorator('isMarried',{
                  initialValue:true
                  ,valuePropName:'checked'
                })(<Switch />)
              }
            </FormItem>

            {/* 默认datepicker是不会显示时间的，需要设置showTime */}
            <FormItem label='生日' {...formItemLayout}>
              {
                getFieldDecorator('birthday',{
                  //默认值必须是一个moment对象
                  initialValue:moment('2018-07-17 05:00:31')
                })(<DatePicker
                  showTime
                  format='YYYY-MM-DD HH:mm:ss'
                />)
              }
            </FormItem>

            {/* 注意autosize为小写 */}
            <FormItem label='联系地址' {...formItemLayout}>
              {
                getFieldDecorator('address',{
                  initialValue:'火星天外天糖果郡'
                })(<TextArea
                  autosize={{minRows:3,maxRows:6}}
                />)
              }
            </FormItem>

            <FormItem label='早起时间' {...formItemLayout}>
              {
                getFieldDecorator('time')(<TimePicker/>)
              }
            </FormItem>

            {/* onChange 的回调 会接受一个info参数 */}
            <FormItem label='头像' {...formItemLayout}>
              {
                getFieldDecorator('userImg')(<Upload
                  listType='picture-card'
                  showUploadList={false}
                  action='//jsonplaceholder.typicode.com/posts/'
                  onChange={this.handleChange}
                >
                  {this.state.userImg?<img src={this.state.userImg} />:<Icon type='plus'/>}
                </Upload>)
              }
            </FormItem>

            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('xieyi')(<Checkbox>
                  我已经阅读<a href="#">卖身契</a>
                </Checkbox>)
              }
            </FormItem>

            <FormItem {...offsetLayout}>
              <Button type='primary' onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>

        </Card>
      </div>
    )
  }
}

export default Form.create()(FormRegister);
