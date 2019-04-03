import React, { Component } from "react";
import { List, Avatar } from "antd";
import {Link} from 'react-router-dom'
import data from "./data.json";
class IndexList extends Component {
  render() {
    console.log(data);
    return (
      <List
        loading={false}
        dataSource={data.data}
        renderItem={item => (
          <List.Item actions={['回复:'+item.reply_count,'访问:'+item.visit_count]}>
            <List.Item.Meta style={{paddingLeft:'10px'}} avatar={<Link to={'/user/'+item.author.loginname}><Avatar src={item.author.avatar_url}/></Link>} title={<Link to={'/topic/'+item.id}>{item.title}</Link>} description={<div><Link to={'/user/'+item.author.loginname}>{item.author.loginname}</Link> 发表于 {item.create_at.split("T")[0]}</div>}/>
          </List.Item>
        )}
      />
    );
  }
}

export default IndexList;
