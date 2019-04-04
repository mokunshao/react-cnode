import React, { Component } from "react";
import { Card, Avatar, List } from "antd";
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
      <div className="contentWrapper" style={{ flexDirection: "column" }}>
        <Card
          title={title}
          style={{ width: "100%", border: "none" }}
          loading={false}
        >
          <div dangerouslySetInnerHTML={{ __html: data.data.content }} />
        </Card>
        <Card loading={false} title={"条回复"} type="inner">
          <List
            dataSource={data.data.replies}
            renderItem={item => (
              <List.Item
                key={item.id}
                extra={
                  item.ups.length > 0 ? (
                    <span>有{item.ups.length}个人觉得很赞</span>
                  ) : (
                    ""
                  )
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.author.avatar_url} />}
                  description={
                    <div>
                      <div>
                        <Link to={"/user/" + item.author.loginname}>
                          {item.author.loginname}
                        </Link>
                        发表于{item.create_at.split("T")[0]}
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: item.content }} style={{width:'100%'}}/>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    );
  }
}
