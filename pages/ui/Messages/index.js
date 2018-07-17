import React from 'react';
import {Card, Button, message} from 'antd';

//TODO 表示，触发了一个动作， 相较于notification的及时性更高， 用于需要及时的反馈
export default class Messages extends React.Component {
  showMessage = (type) => {
    message[type]('恭喜你')
  };

  render() {
    return (
      <div>
        <Card title='全局提示框' className='card-wrap'>
          <Button type='primary' onClick={()=>this.showMessage('success')}>Success</Button>
          <Button type='primary' onClick={()=>this.showMessage('info')}>Info</Button>
          <Button type='primary' onClick={()=>this.showMessage('warning')}>Warning</Button>
          <Button type='primary' onClick={()=>this.showMessage('error')}>Error</Button>
          <Button type='primary' onClick={()=>this.showMessage('loading')}>Loading</Button>
        </Card>
      </div>
    )
  }
}
