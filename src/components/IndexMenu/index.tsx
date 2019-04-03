import React, {Component} from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";

interface Props {
  className: string;
  mode: any;
}

class IndexMenu extends Component<Props, {}> {
  render() {
    return (
      <Menu className={this.props.className} mode={this.props.mode}>
        <Menu.Item><Link to='/index/all'>全部</Link></Menu.Item>
        <Menu.Item><Link to='/index/good'>精华</Link></Menu.Item>
        <Menu.Item><Link to='/index/share'>分享</Link></Menu.Item>
        <Menu.Item><Link to='/index/ask'>问答</Link></Menu.Item>
        <Menu.Item><Link to='/index/job'>招聘</Link></Menu.Item>
        <Menu.Item><Link to='/index/dev'>测试</Link></Menu.Item>
      </Menu>
    );
  }
}

export default IndexMenu;