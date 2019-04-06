import React from "react";
import {Row, Col} from "antd";
import "./index.scss";
import IndexMenu from "../IndexMenu";
import IndexList from "../IndexList";

interface Props {
  match: { params: string };
}

function Index(props: Props) {
  return (
    <Row className="contentWrapper">
      <Col md={6} xs={0}>
        <IndexMenu className="indexMenu" mode="vertical"/>
      </Col>
      <Col md={0} xs={24}>
        <IndexMenu className="indexMenu" mode="horizontal"/>
        <IndexList className="indexList"/>
      </Col>
      <Col md={18} xs={0}>
        <IndexList className="indexList"/>
      </Col>
    </Row>
  );
}

export default Index;