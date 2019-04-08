import React, {useState} from "react";
import {Row, Col} from "antd";
import "./index.scss";
import IndexMenu from "../IndexMenu";
import IndexList from "../IndexList";

function Index(props:any) {
  window.scrollTo && window.scrollTo(0, 0);
  return (
    <Row className="contentWrapper">
      <Col md={6} xs={0}>
        <IndexMenu className="indexMenu" mode="vertical"/>
      </Col>
      <Col md={0} xs={24}>
        <IndexMenu className="indexMenu" mode="horizontal"/>
        <IndexList className="indexList" section={props.match.params.section}/>
      </Col>
      <Col md={18} xs={0}>
        <IndexList className="indexList" section={props.match.params.section}/>
      </Col>
    </Row>
  );
}

export default Index;