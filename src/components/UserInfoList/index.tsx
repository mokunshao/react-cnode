import React from "react";
import {Card, List, Avatar} from "antd";
import {Link} from "react-router-dom";
import './userInfoList.scss';

interface Props {
  type: "inner" | undefined;
  loading: boolean;
  title: string;
  data: any[];
}

function UserInfoList(props: Props) {
  return (
    <div className={'userInfoList'}>
      <Card type={props.type} loading={props.loading} title={props.title}/>
      <List dataSource={props.data} renderItem={(item) => {
        return <List.Item key={item.id}>
          <Link to={'/user/' + item.author.loginname}><Avatar src={item.author.avatar_url}/></Link>
          <Link to={'/user/' + item.author.loginname} className={'username'}>{item.author.loginname}</Link>
          <Link to={'/topic/' + item.id}>{item.title}</Link>
          <time>最后回复时间:{item.last_reply_at.split('T')[0]}</time>
        </List.Item>;
      }}/>
    </div>
  );
}

export default UserInfoList;
