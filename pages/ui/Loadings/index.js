import React from 'react';
import {Card, Button, Spin, Icon, Alert} from 'antd';

export default class Loadings extends React.Component {
  render() {
    const icon = <Icon type='loading' style={{fontSize:'24px'}}></Icon>
    return (
      <div>
        <Card title='Spin用法' className='card-wrap'>
          <Spin size='small'/>
          <Spin/>
          <Spin size='large'/>

          {/* 需要注意的是如果图片本身不是旋转的(gif)，则不会旋转 */}
          <Spin indicator={icon}/>
        </Card>

        <Card title='内容遮罩'>
          <Alert
            message='React'
            description='呼呼呼呼呼呼哈'
            type='info'
          />



          <Spin>
            <Alert
              message='React'
              description='呼呼呼呼呼呼哈'
              type='warning'
            />
          </Spin>

          <Spin tip='加载中...'>
            <Alert
              message='React'
              description='呼呼呼呼呼呼哈'
              type='warning'
            />
          </Spin>

          <Spin tip='加载中...' indicator={icon}>
            <Alert
              message='React'
              description='呼呼呼呼呼呼哈'
              type='warning'
            />
          </Spin>
        </Card>
      </div>
    )
  }
}
