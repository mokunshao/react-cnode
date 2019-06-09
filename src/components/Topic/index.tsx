import React, { useEffect } from "react";
import { Card, Avatar, List } from "antd";
import TextTag from "../TextTag";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateTopic } from "../../redux/actions";

interface Props {
  data: {
    title: string;
    top: boolean;
    good: boolean;
    tab: string;
    author: { avatar_url: string; loginname: string };
    create_at: string;
    content: string;
    reply_count: number;
    id: string;
    replies: [
      {
        ups: any;
        author: any;
        content: string;
        id: string;
        create_at: string;
      }
    ];
  };
  loading: boolean;
  updateTopic: any;
  match: { params: { id: string } };
}

function Topic(props: Props) {
  window.scrollTo && window.scrollTo(0, 0);
  let title = (
    <div>
      <h1 style={{whiteSpace:'normal'}}>{props.data.title}</h1>
      <TextTag
        top={props.data.top}
        good={props.data.good}
        tab={props.data.tab}
      />
      <Avatar src={props.data.author.avatar_url} />
      <Link to={"/user/" + props.data.author.loginname}>
        {props.data.author.loginname}
      </Link>
      发表于{props.data.create_at.split("T")[0]}
    </div>
  );
  useEffect(() => {
    props.updateTopic(props.match.params.id);
  }, []);
  return (
    <div className="contentWrapper" style={{ flexDirection: "column" }}>
      <Card
        title={title}
        style={{ width: "100%", border: "none" }}
        loading={props.loading}
      >
        <div dangerouslySetInnerHTML={{ __html: props.data.content }} />
      </Card>
      <Card
        loading={props.loading}
        title={props.data.reply_count + "条回复"}
        type="inner"
      >
        <List
          dataSource={props.data.replies}
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
                    <div
                      dangerouslySetInnerHTML={{ __html: item.content }}
                      style={{ width: "100%" }}
                    />
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

const mapStateToProps = (state: any) => ({
  data: state.topic.data,
  loading: state.topic.loading
});

const mapDispatchToProps = {
  updateTopic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);
