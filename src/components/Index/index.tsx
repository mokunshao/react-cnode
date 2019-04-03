import React, {Component} from "react";
import {Menu, Row, Col} from 'antd';
import {Link} from "react-router-dom";
import "./index.scss";

export default class Index extends Component {
  render() {
    return <Row className='contentWrapper'>
      <Col md={6}>
        <Menu className='indexMenu'>
          <Menu.Item><Link to='/index/all'>全部</Link></Menu.Item>
          <Menu.Item><Link to='/index/good'>精华</Link></Menu.Item>
          <Menu.Item><Link to='/index/share'>分享</Link></Menu.Item>
          <Menu.Item><Link to='/index/ask'>问答</Link></Menu.Item>
          <Menu.Item><Link to='/index/job'>招聘</Link></Menu.Item>
          <Menu.Item><Link to='/index/dev'>测试</Link></Menu.Item>
        </Menu>
      </Col>
      <Col md={18} className='indexList' style={{height:'500px'}}>123</Col>
    </Row>;
  }
}
