import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';

interface Props {
  mode: any;
  className?: string;
}

function Nav(props:Props) {
  return (
    <Menu
      mode={props.mode}
      theme='light'
      className={props.className}
    >
      <Menu.Item><Link to='/index/all'><Icon type='home'/>首页</Link></Menu.Item>
      <Menu.Item><Link to='/tutorial'><Icon type='book'/> 教程</Link></Menu.Item>
      <Menu.Item><Link to='/about'><Icon type='info-circle-o'/>关于</Link></Menu.Item>
    </Menu>
  );
}

export default Nav;