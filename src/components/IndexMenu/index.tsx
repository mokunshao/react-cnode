import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import Item from "antd/lib/list/Item";

interface Props {
  className: string;
  mode: any;
  section: string;
}

const section = [
  { text: "全部", tab: "all" },
  { text: "精华", tab: "good" },
  { text: "分享", tab: "share" },
  { text: "问答", tab: "ask" },
  { text: "工作", tab: "job" },
  { text: "测试", tab: "dev" }
];

function IndexMenu(props: Props) {
  return (
    <Menu
      className={props.className}
      mode={props.mode}
      selectedKeys={[props.section]}
    >
      {section.map(item => (
        <Menu.Item key={item.tab}>
          <Link to={"/index/" + item.tab}>{item.text}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default withRouter((props: any) => {
  return (
    <IndexMenu
      className={props.className}
      mode={props.mode}
      section={props.match.params.section}
    />
  );
});
