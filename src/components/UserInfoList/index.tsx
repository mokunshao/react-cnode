import React from "react";
import {Card} from "antd";

interface Props {
  type: "inner" | undefined;
}

function UserInfoList(props: Props) {
  return (
    <div>
      UserInfoList
      <Card type={props.type} title='leihao'/>
    </div>
  );
}
export default UserInfoList;
