import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';

interface Props {
  mode: any;
  className?: string;
}

class Nav extends Component<Props, {}> {
  render() {
    return (
      <Menu
        mode={this.props.mode}
        theme='light'
        className={this.props.className}
      >
        <Menu.Item><Link to='/index'><Icon type='home'/>首页</Link></Menu.Item>
        <Menu.Item><Link to='/tutorial'><Icon type='book'/> 教程</Link></Menu.Item>
        <Menu.Item><Link to='/about'><Icon type='info-circle-o'/>关于</Link></Menu.Item>
      </Menu>
    );
  }
}

export default Nav;