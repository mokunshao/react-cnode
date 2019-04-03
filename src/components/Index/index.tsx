import React, { Component } from "react";
import { Menu, Row, Col } from "antd";
import "./index.scss";
import IndexMenu from "../IndexMenu";
import IndexList from "../IndexList";

interface Props {
  match: { params: string };
}

export default class Index extends Component<Props, {}> {
  render() {
    console.log(this.props.match.params);
    return (
      <Row className="contentWrapper">
        <Col md={6} xs={0}>
          <IndexMenu className="indexMenu" mode="vertical" />
        </Col>
        <Col md={0} xs={24}>
          <IndexMenu className="indexMenu" mode="horizontal" />
          <IndexList />
        </Col>
        <Col md={18} xs={0} className="indexList">
          <IndexList />
        </Col>
      </Row>
    );
  }
}
