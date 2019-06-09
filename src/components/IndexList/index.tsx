import React, { useState, useEffect } from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import TextTag from "../TextTag";
import { connect } from "react-redux";
import { updateList } from "../../redux/actions";

interface Props {
  section: string;
  className: string;
  loading?: boolean;
  data?: {
    id: string;
    reply_count: number;
    visit_count: number;
    author: { loginname: string; avatar_url: string };
    good: boolean;
    top: boolean;
    tab: string;
    title: string;
    create_at: string;
  }[];
  updateList: any;
}

function IndexList(props: Props) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    props.updateList(props.section, page);
    window.scrollTo && window.scrollTo(0, 0);
  }, [page]);
  useEffect(() => {
    setPage(1);
    props.updateList(props.section, page);
  }, [props.section]);
  let pagination = {
    current: page,
    pageSize: 10,
    total: 100,
    onChange: (current: any) => {
      setPage(current);
    }
  };
  return (
    <List
      pagination={pagination}
      className={props.className}
      loading={props.loading}
      dataSource={props.data}
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
                <TextTag
                  good={item.good || false}
                  tab={item.tab || ""}
                  top={item.top || false}
                />
                <Link to={"/topic/" + item.id}>{item.title}</Link>
              </div>
            }
            description={
              <div>
                <Link to={"/user/" + item.author.loginname}>
                  {item.author.loginname}
                </Link>
                发表于 {item.create_at.split("T")[0]}
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
}

const mapStateToProps = (state: any) => ({
  data: state.home.data,
  loading: state.home.loading
});

const mapDispatchToProps = {
  updateList
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexList);
