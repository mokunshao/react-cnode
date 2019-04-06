import React from "react";
import './Header.scss';
import {Layout, Row, Col, Divider, Menu, Icon, Dropdown, Button} from 'antd';
import Nav from '../Nav';

function Header() {
  return (
    <Layout.Header>
      <Row className="headerRow">
        <Col md={6} xs={24}>
          <h1 className='headerLogo'>cNode</h1>
        </Col>
        <Col md={18} xs={0}>
          <Divider type="vertical" className='headerDivider'/>
          <Nav
            mode='horizontal'
            className='headerMenu'
          />
        </Col>
        <Col md={0} xs={24} className='headerXsMenu'>
          <Dropdown overlay={<Nav mode='vertical'/>} placement='bottomRight'>
            <Button>
              <Icon type='bars'/>
            </Button>
          </Dropdown>
        </Col>
      </Row>

    </Layout.Header>
  );
}

export default Header;