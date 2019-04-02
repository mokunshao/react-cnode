import React from "react";
import './Header.scss';
import {Link} from 'react-router-dom';
import {Layout, Row, Col, Divider, Menu, Icon} from 'antd';


export default function Header() {
  return (
    <Layout.Header>
      <Row className="headerRow">
        <Col md={6} xs={24}>
          <h1 className='headerLogo'>cNode</h1>
        </Col>
        <Col md={18} xs={0}>
          <Divider type="vertical" className='headerDivider'/>
          <Menu mode='horizontal' theme='light' className='headerMenu'>
            <Menu.Item><Link to='/index'><Icon type='home'/>首页</Link></Menu.Item>
            <Menu.Item><Link to='/tutorial'><Icon type='book'/> 教程</Link></Menu.Item>
            <Menu.Item><Link to='/about'><Icon type='info-circle-o'/>关于</Link></Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  );
}
