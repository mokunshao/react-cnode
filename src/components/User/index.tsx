import React, { useEffect } from "react";
import { Avatar, Col, Row } from "antd";
import "./user.scss";
import UserInfoList from "../UserInfoList";
import { connect } from "react-redux";
import { updateUser } from "../../redux/actions";

function User(props: any) {
  useEffect(() => {
    props.updateUser(props.match.params.loginname);
    window.scrollTo && window.scrollTo(0, 0);
  }, [props.match.params.loginname]);
  return (
    <div className="contentWrapper" style={{ flexDirection: "column" }}>
      <Avatar src={props.data.avatar_url} className="userAvatar" />
      <Row className="userInfo">
        <Col md={8}>用户名:{props.data.loginname}</Col>
        <Col md={8}>积分:{props.data.score}</Col>
        <Col md={8}>注册时间:{props.data.create_at.split("T")[0]}</Col>
      </Row>
      <UserInfoList
        type="inner"
        loading={props.loading}
        title={"最近创建的话题"}
        data={props.data.recent_topics}
      />
      <UserInfoList
        type="inner"
        loading={props.loading}
        title={"最近回复的话题"}
        data={props.data.recent_replies}
      />
    </div>
  );
}

const mapStateFromProps = (state: any) => {
  return {
    data: state.user.data,
    loading: state.user.loading
  };
};

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateFromProps,
  mapDispatchToProps
)(User);
