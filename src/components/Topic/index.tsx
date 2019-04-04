import React, { Component } from "react";
import { Card, Avatar } from "antd";
import data from "./data";
import TextTag from "../TextTag";
import { Link } from "react-router-dom";
const title = (
  <div>
    <h1>{data.data.title}</h1>
    <TextTag top={data.data.top} good={data.data.good} tab={data.data.tab} />
    <Avatar src={data.data.author.avatar_url} />
    <Link to={"/user/" + data.data.author.loginname}>
      {data.data.author.loginname}
    </Link>
    发表于{data.data.create_at.split("T")[0]}
  </div>
);

export default class Topic extends Component {
  render() {
    return (
      <div className="contentWrapper">
        <Card title={title} style={{ width: "100%", border: "none" }} >
        <div dangerouslySetInnerHTML={{__html:data.data.content}}></div>
        </Card>
      </div>
    );
  }
}
