import React from 'react';
import {Card,Button,notification} from 'antd'

export default class Notifications extends React.Component{
  openNotification = (type,direction) => {
    if(direction){
      notification.config({
        placement: direction
      });
    }

    notification[type]({
      message: '发工资咯！'
      , description: '上个月考勤22天，迟到12天，实发工资250吗，请笑纳'
    });

    //将方向位复原
    notification.config({
      placement: 'topRight'
    });
  };

  render(){
    return (
      <div>
        <Card title='通知提醒框' className='card-wrap'>
          <Button type='primary' onClick={()=>this.openNotification('success')}>Success</Button>
          <Button type='primary' onClick={()=>this.openNotification('info')}>Info</Button>
          <Button type='primary' onClick={()=>this.openNotification('warning')}>Warning</Button>
          <Button type='primary' onClick={()=>this.openNotification('error')}>Error</Button>
        </Card>

        <Card title='方向' className='card-wrap'>
          <Button type='primary' onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
          <Button type='primary' onClick={()=>this.openNotification('info','topRight')}>Info</Button>
          <Button type='primary' onClick={()=>this.openNotification('warning','bottomLeft')}>Warning</Button>
          <Button type='primary' onClick={()=>this.openNotification('error','bottomRight')}>Error</Button>
        </Card>
      </div>
    )
  }
}
