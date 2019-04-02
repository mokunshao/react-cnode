import React from "react";
// import Layout from "antd/lib/layout";
// import Row from "antd/lib/row";
// import Col from "antd/lib/col";
import {Layout,Row,Col} from 'antd'
import './Header.scss'

export default function Header() {
  return (
    <Layout.Header>
      <Row className="headerRow">
        <Col md={6} xs={24}>
          <h1 className='headerLogo'>cNode</h1>
        </Col>
        <Col md={18} xs={0}/>
      </Row>
    </Layout.Header>
  );
}
