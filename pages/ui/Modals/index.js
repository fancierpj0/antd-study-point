import React from 'react';
import {Card, Button, Modal} from 'antd';

export default class Modals extends React.Component {
  state = {
    showModal1: false
    ,showModal2: false
    ,showModal3: false
    ,showModal4: false
  };

  handleOpen = (type) => {
    this.setState({[type]:true})
  };

  handleConfirm = (type) => {
    Modal[type]({
      title:'确认?'
      ,content:'你确定你学会了React吗'
      ,onOk(){
        console.log('Ok');
      }
      ,onCancel(){
        console.log('Cancel');
      }
    });
  };

  render() {
    return (
      <div>
        <Card title='基础模态框' className='card-wrap'>
          <Button type='primary' onClick={()=>this.handleOpen('showModal1')}>Open</Button>
          <Button type='primary' onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type='primary' onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type='primary' onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>

        <Card title='信息确认框' className='card-wrap'>
          <Button type='primary' onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
          <Button type='primary' onClick={()=>this.handleConfirm('info')}>Info</Button>
          <Button type='primary' onClick={()=>this.handleConfirm('success')}>Success</Button>
          <Button type='primary' onClick={()=>this.handleConfirm('warning')}>Warning</Button>
        </Card>

        {
          //onCancel 会作用于cancel按钮 和 X
          //visible 决定模态框是否显示
        }
        <Modal
          title='React'
          visible={this.state.showModal1}
          onCancel={()=>{
            this.setState({showModal1:false})
          }}
          onOk={()=>{
            this.setState({showModal1:false})
          }}
        >
          <p>onCancel,visible</p>
        </Modal>


        {
          //自定义按钮文本
          //okText
          //cancelText
        }
        <Modal
          title='React'
          visible={this.state.showModal2}
          onCancel={()=>{
            this.setState({showModal2:false})
          }}
          onOk={()=>{
            this.setState({showModal1:false})
          }}
          okText='okText'
          cancelText='cancelText'
        >
          <p>自定义按钮文本</p>
        </Modal>


        {
          //自定义弹框位置
          //需要针对antd做出修改
          //详情请看查看ui.less
        }
        <Modal
          title='React'
          style={{top:'20px'}}
          visible={this.state.showModal3}
          onCancel={()=>{
            this.setState({showModal3:false})
          }}
          onOk={()=>{
            this.setState({showModal1:false})
          }}
        >
          <p>自定义弹框位置</p>
        </Modal>


        {
          //垂直居中，通过自定义类名vertical-center-modal所设置的样式
          //wrapClassName是给模态框最外层容器设置类名
        }
        <Modal
          title='React'
          wrapClassName='vertical-center-modal'
          visible={this.state.showModal4}
          onCancel={()=>{
            this.setState({showModal4:false})
          }}
          onOk={()=>{
            this.setState({showModal1:false})
          }}
        >
          <p>自定义弹框位置</p>
        </Modal>


      </div>
    )
  }
}
