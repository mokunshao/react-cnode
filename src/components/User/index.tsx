import React from "react";
import {Avatar, Col, Row} from "antd";
import data from "./data";
import "./user.scss";
import UserInfoList from '../UserInfoList';

function User() {
  return (
    <div className="contentWrapper" style={{flexDirection: 'column'}}>
      <Avatar src={data.data.avatar_url} className="userAvatar"/>
      <Row className='userInfo'>
        <Col md={8}>用户名:{data.data.loginname}</Col>
        <Col md={8}>积分:{data.data.score}</Col>
        <Col md={8}>注册时间:{data.data.create_at.split('T')[0]}</Col>
      </Row>
      <UserInfoList type='inner' loading={false} title={'最近创建的话题'} data={data.data.recent_topics}/>
      <UserInfoList type='inner' loading={false} title={'最近回复的话题'} data={data.data.recent_replies}/>
    </div>
  );
}

export default User;
