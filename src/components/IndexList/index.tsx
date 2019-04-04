import React, { Component } from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import data from "./data.json";
import TextTag from "../TextTag";
interface Props {
  className: string;
}
class IndexList extends Component<Props, {}> {
  render() {
    console.log(data);
    return (
      <List
        className={this.props.className}
        loading={false}
        dataSource={data.data}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={["回复:" + item.reply_count, "访问:" + item.visit_count]}
          >
            <List.Item.Meta
              style={{ paddingLeft: "10px" }}
              avatar={
                <Link to={"/user/" + item.author.loginname}>
                  <Avatar src={item.author.avatar_url} />
                </Link>
              }
              title={
                <div>
                  <TextTag good={item.good} tab={item.tab} top={item.top} />
                  <Link to={"/topic/" + item.id}>{item.title}</Link>
                </div>
              }
              description={
                <div>
                  <Link to={"/user/" + item.author.loginname}>
                    {item.author.loginname}
                  </Link>{" "}
                  发表于 {item.create_at.split("T")[0]}
                </div>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}

export default IndexList;
