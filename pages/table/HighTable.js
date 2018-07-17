import React from 'react';
import {Card, Table, Modal, Button, message, Badge} from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils';

export default class BasicTable extends React.Component {
  state = {
    dataSource: []
    , dataSource2: []
    , selectedRowKeys: null
    , selectedItem: null
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

  handleChange = (pagination, filters, sorter) => {
    console.log('sorter:', sorter)
    this.setState({
      sortOrder: sorter.order //descend还是
    })
  };

  // 删除操作
  handleDelete = (item) => {
    let id = item.id;
    Modal.confirm({
      title: '确认'
      , content: '您确认要删除此条数据吗?'
      , onOk: () => {
        message.success('删除成功');
        this.request();
      }
    })
  };

  request = () => {
    let self = this;
    axios.ajax({
      url: '/table/high/list'
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
          dataSource: res.result.list
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
        , width: 80
        , dataIndex: 'id'
      }
      , {
        title: '用户名'
        , width: 80
        , dataIndex: 'userName'
      }
      , {
        title: '性别'
        , width: 80
        , dataIndex: 'sex'
        , render(sex) {
          return sex == 1 ? '男' : '女';
        }
      }
      , {
        title: '状态'
        , width: 80
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
        , width: 80
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
        , width: 80
        , dataIndex: 'birthday'
      }
      , {
        title: '地址'
        , width: 80
        , dataIndex: 'address'
      }
      , {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }
    ];

    const columns2 = [
      {
        //表格显示时的字段名
        title: 'id'
        //获取字段值用的字段名
        , width: 80
        , dataIndex: 'id'
        , fixed: 'left'
      }
      , {
        title: '用户名'
        , width: 80
        , dataIndex: 'userName'
        , fixed: 'left'
      }
      , {
        title: '性别'
        , width: 80
        , dataIndex: 'sex'
        , render(sex) {
          return sex == 1 ? '男' : '女';
        }
      }
      , {
        title: '状态'
        , width: 80
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
        , width: 80
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
        , width: 80
        , dataIndex: 'birthday'
      }
      , {
        title: '地址'
        , width: 80
        , dataIndex: 'address'
      }
      , {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }, {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
        , fixed: 'right'
      }
    ];

    const columns3 = [
      {
        //表格显示时的字段名
        title: 'id'
        //获取字段值用的字段名
        , width: 80
        , dataIndex: 'id'
      }
      , {
        title: '用户名'
        , width: 80
        , dataIndex: 'userName'
      }
      , {
        title: '性别'
        , width: 80
        , dataIndex: 'sex'
        , render(sex) {
          return sex == 1 ? '男' : '女';
        }
      }
      , {
        title: '年龄'
        , width: 80
        , dataIndex: 'age'
        , key: 'age'
        , sorter: (a, b) => {
          return a.age - b.age;
        }
        , sortOrder: this.state.sortOrder
      }
      , {
        title: '状态'
        , width: 80
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
        , width: 80
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
        , width: 80
        , dataIndex: 'birthday'
      }
      , {
        title: '地址'
        , width: 80
        , dataIndex: 'address'
      }
      , {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }
    ];

    const columns4 = [
      {
        //表格显示时的字段名
        title: 'id'
        //获取字段值用的字段名
        , width: 80
        , dataIndex: 'id'
      }
      , {
        title: '用户名'
        , width: 80
        , dataIndex: 'userName'
      }
      , {
        title: '性别'
        , width: 80
        , dataIndex: 'sex'
        , render(sex) {
          return sex == 1 ? '男' : '女';
        }
      }
      , {
        title: '年龄'
        , width: 80
        , dataIndex: 'age'
        , key: 'age'
      }
      , {
        title: '状态'
        , width: 80
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
        , width: 80
        , dataIndex: 'interest'
        , render(state) {
          let config = {
            '1': <Badge status='success' text="成功"/>
            , '2': <Badge status='error' text="报错"/>
            , '3': <Badge status='default' text="正常"/>
            , '4': <Badge status='processing' text="进行中"/>
            , '5': <Badge status='warning' text="警告"/>
          };
          return config[state];
        }
      }
      , {
        title: '生日'
        , width: 80
        , dataIndex: 'birthday'
      }
      , {
        title: '地址'
        , width: 80
        , dataIndex: 'address'
      }
      , {
        title: '早起时间'
        , width: 80
        , dataIndex: 'time'
      }
      , {
        title: '操作'
        , render: (text, item) => { //item一行的所有字段
          return <Button size='small' onClick={(item) => {
            this.handleDelete(item)
          }}>删除</Button>
        }
      }
    ];

    console.log('columns2.length*80:', columns2.length * 80)

    const {selectedRowKeys} = this.state;

    const rowSelection = {
      type: 'radio'

      //设置了按钮才会选中，但不设置也不会影响onRow事件
      , selectedRowKeys
    };

    const rowCheckSelection = {
      type: 'checkbox'
      , selectedRowKeys

      //这个和直接在table上定义的onRow(点击一行(非)复选框触发)不一样
      //，这个是复选框点击变化的时候
      , onChange: (selectedRowKeys, selectedRows) => {
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
          设置了scroll必须要在设置columns时给一个固定的width
        */}
        <Card title='头部固定' className='card-wrap'>
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{y: 240}}
          />
        </Card>

        {/*
          x是每列宽度的总和(略大于)
          若要固定某一列，请使用fixed:'left|right'
        */}
        <Card title='左侧固定' className='card-wrap'>
          <Table
            bordered={true}
            columns={columns2}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{x: 2970}}
          />
        </Card>


        {/*
          在定义阻断时配置sorter(方法)、sortOrder，以及使用handleChange改变sortOrder
        */}
        <Card title='表格排序' className='card-wrap'>
          <Table
            bordered={true}
            columns={columns3}
            dataSource={this.state.dataSource}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>


        <Card title='操作按钮' className='card-wrap'>
          <Table
            bordered={true}
            columns={columns3}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}
