import React from 'react';
import {Card, Button, Tabs, message, Icon} from 'antd';

const TabPane = Tabs.TabPane;

export default class Xxx extends React.Component {

  // type='editable-card' 的Tabs 新增标签页时必须的属性支持
  newTabIndex = 0;

  state = {
    panes: []
    ,activeKey:null
  };

  handleCallback = (activeKey) => {
    message.info(`HI,你选择了页签${activeKey}`);
  };

  onChange = (activeKey) => {
    this.setState({activeKey})
  };

  //TODO 下面三个方法 onEdit、add、remove 是绑定使用的
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({title: `${activeKey}`, content: `New Tab Pane`, key: activeKey});
    this.setState({panes, activeKey});
  };

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const panes = this.state.panes.filter(pane => pane.key !== targetKey);

    //如果删除的那个刚好是激活的那个标签页，就让它的上一个变成激活态
    //如果删除的那个 不 是激活的那个标签页，则不改变激活的标签页
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }

    this.setState({panes, activeKey});
  };

  componentWillMount() {
    const panes = [
      {
        title: 'Tab 1'
        , content: 'React其乐无穷'
        , key: '1'
      }
      , {
        title: 'Tab 2'
        , content: 'React肥宅快乐桶'
        , key: '2'
      }
      , {
        title: 'Tab 3'
        , content: 'React！！'
        , key: '3'
      }
    ];

    this.setState({
      panes
      ,activeKey:panes[0].key
    })
  }

  render() {
    return (
      <div>
        <Card title='Tab页签' className='card-wrap'>
          {/* onChange事件会自动往回调中传入一个key值，当前选中的标签页 */}
          <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
            <TabPane tab='Tab 1' key='1'>React其乐无穷</TabPane>
            <TabPane tab='Tab 2' key='2'>React肥宅快乐桶</TabPane>
            <TabPane tab='Tab 3' key='3' disabled>React！！</TabPane>
          </Tabs>
        </Card>

        <Card title='Tab带icon' className='card-wrap'>
          {/* onChange事件会自动往回调中传入一个key值，当前选中的标签页 */}
          <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
            {/* 如果是第三方的icon话，就只能通过原始的<i>来做到了 */}
            <TabPane tab={<React.Fragment><Icon type='plus'/>Tab 1</React.Fragment>} key='1'>React其乐无穷</TabPane>
            <TabPane tab={<React.Fragment><Icon type='edit'/>Tab 2</React.Fragment>} key='2'>React肥宅快乐桶</TabPane>
            <TabPane tab={<React.Fragment><Icon type='delete'/>Tab 3</React.Fragment>} key='3'>React！！</TabPane>
          </Tabs>
        </Card>


        <Card title='Tab页可增删' className='card-wrap'>
          {/* onChange事件会自动往回调中传入一个key值，当前选中的标签页 */}
          {/* activeKey默认就是点谁谁激活，可以省略, 某些情况还不如省略， 比如你没有默认指定一个activeKey的时候，如果你省略了，系统默认会让第一个标签页激活，而如果你没有省略，state里又没有设置默认的activeKey，那么就会没有标签页处于激活态，另外动态渲染时，defaultActiveKey的设置是无效的，必须通过state设置 */}
          <Tabs
            type='editable-card'
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            defaultActiveKey='1'
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((item, index) => (
                <TabPane
                  tab={item.title}
                  key={item.key}
                >{item.content}</TabPane>
              ))
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}
