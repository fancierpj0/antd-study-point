import React from 'react';
import {Card, Table, Modal, Button, message} from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils';

export default class BasicTable extends React.Component {
  state = {
    dataSource: []
    , dataSource2: []
    ,selectedRowKeys:null
    ,selectedItem:null
  };

  //之所以放在这里而不是state，是因为变量的更改并不会渲染dom(???开玩笑。。。改变数据不渲染？)
  //只是借口需要
  params = {
    page: 1
  };

  componentDidMount() {
    const dataSource = [
      {
        id: '0'
        , userName: 'Jack'
        , sex: '1'
        , state: '1'
        , interest: '1'
        , birthday: '2000-01-01'
        , address: '北京市海淀区奥林匹克公园'
        , time: '09:00'
      }
      , {
        id: '2'
        , userName: 'Tom'
        , sex: '1'
        , state: '1'
        , interest: '1'
        , birthday: '2000-01-01'
        , address: '北京市海淀区奥林匹克公园'
        , time: '09:00'
      }
      , {
        id: '3'
        , userName: 'Lily'
        , sex: '1'
        , state: '1'
        , interest: '1'
        , birthday: '2000-01-01'
        , address: '北京市海淀区奥林匹克公园'
        , time: '09:00'
      }
    ];

    dataSource.map((item, index) => {
      item.key = index;
    });

    this.setState({dataSource});

    this.request();
  }

  onRowClick = (record, index) => {
    console.log('index:',index)
    Modal.info({
      title:'信息'
      ,content:`用户名:${record.userName},用户爱好${record.interest}`
    });

    //必须是一个数组
    let selectKey = [index];
    this.setState({
      selectedRowKeys:selectKey
      ,selectedItem:record
    })
  };

  //多选执行删除动作
  handleDelete = () => {
    let ids = this.state.selectedIds;
    Modal.confirm({
      title:'删除提示'
      ,content:`您确定要删除这些数据吗${ids.join(',')}`
      ,onOk:()=>{
        message.success('删除成功');
        this.request();
      }
    })
  };

  request = () => {
    let self = this;
    axios.ajax({
      url: '/table/list'
      , data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      if (res.code == 0) {
        res.result.list.map((item, index) => {
          item.key = index;
        });
        this.setState({
          dataSource2: res.result.list
          ,selectedRowKeys:null
          ,selectedIds:null
          ,pagination:Utils.pagination(res,(current)=>{
            //TODO
            self.params.page = current;
            this.request()
          })
        })
      }
    })
  };

  render() {
    const columns = [
      {
        //表格显示时的字段名
        title: 'id'
        //获取字段值用的字段名
        , dataIndex: 'id'
      }
      , {
        title: '用户名'
        , dataIndex: 'userName'
      }
      , {
        title: '性别'
        , dataIndex: 'sex'
        , render(sex) {
          return sex == 1 ? '男' : '女';
        }
      }
      , {
        title: '状态'
        , dataIndex: 'state'
        , render(state) {
          let config = {
            '1': '咸鱼一条'
            , '2': '风华浪子'
            , '3': '北大才子'
            , '4': '百度FE'
            , '5': '创业者'
          };
          return config[state];
        }
      }
      , {
        title: '爱好'
        , dataIndex: 'interest'
        , render(state) {
          let config = {
            '1': '游泳'
            , '2': '打篮球'
            , '3': '踢足球'
            , '4': '跑步'
            , '5': '爬山'
            , '6': '骑行'
            , '7': '桌球'
            , '8': '麦霸'
          };
          return config[state];
        }
      }
      , {
        title: '生日'
        , dataIndex: 'birthday'
      }
      , {
        title: '地址'
        , dataIndex: 'address'
      }
      , {
        title: '早起时间'
        , dataIndex: 'time'
      }
    ];

    const {selectedRowKeys} = this.state;

    const rowSelection = {
      type: 'radio'

      //设置了按钮才会选中，但不设置也不会影响onRow事件
      , selectedRowKeys
    };

    const rowCheckSelection = {
      type:'checkbox'
      ,selectedRowKeys

      //这个和直接在table上定义的onRow(点击一行(非)复选框触发)不一样
      //，这个是复选框点击变化的时候
      ,onChange:(selectedRowKeys,selectedRows)=>{
        let ids = [];
        selectedRows.map((item) => {
          ids.push(item.id);
        });
        this.setState({
          selectedRowKeys
          , selectedIds: ids
        });
      }
    };

    return (
      <div>
        {/*
          默认：
          无边框
          有分页
        */}
        <Card title='基础表格' className='card-wrap'>
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>

        <Card title='动态数据渲染表格' className='card-wrap'>
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>

        <Card title='表格嵌套单选按钮' className='card-wrap'>
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}

            rowSelection={rowSelection}
            onRow={(record,index)=>{
              return {
                onClick:()=>{
                  this.onRowClick(record,index);
                }
              }
            }}
          />
        </Card>

        <Card title='表格嵌套多选按钮' className='card-wrap'>
          <div style={{marginBottom:'10px'}}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
            rowSelection={rowCheckSelection}
          />
        </Card>


        {/*
          pagination
          查看Utils.pagination
        */}
        <Card title='表格分页' className='card-wrap'>
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    )
  }
}
