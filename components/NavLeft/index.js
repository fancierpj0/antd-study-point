import React from 'react';
import {NavLink} from 'react-router-dom';
import MenuConfig from '../../config/menuConfig';
import {Menu, Icon} from 'antd';
import './index.less';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
  state = {
    menuTreeNode: null
  };

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({menuTreeNode});
  }

  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      //Menu.Item的title属性是类似于alt属性的提醒小气泡，而SubMenu的title就是一行的显示
      return <Menu.Item title={item.title} key={item.key}><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>
    });
  };

  render() {
    return (
      <div>
        <div className='logo'>
          <img src="/assets/logo-ant.svg"/>
          <h1>Imooc MS</h1>
        </div>
        <Menu
          theme='dark'
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}
