import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";

interface Props {
  mode: any;
  pathname: string;
  className?: string;
}

function Nav(props: Props) {
  const [currentTab, changeCurrentTab] = useState("index");
  useEffect(() => {
    changeCurrentTab(props.pathname.split("/")[1]);
  }, [props.pathname]);
  return (
    <Menu
      mode={props.mode}
      theme="light"
      className={props.className}
      selectedKeys={[currentTab]}
    >
      <Menu.Item key={"index"}>
        <Link to="/index/all">
          <Icon type="home" />
          首页
        </Link>
      </Menu.Item>
      <Menu.Item key={"tutorial"}>
        <Link to="/tutorial">
          <Icon type="book" /> 教程
        </Link>
      </Menu.Item>
      <Menu.Item key={"about"}>
        <Link to="/about">
          <Icon type="info-circle-o" />
          关于
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter((props: any) => {
  return (
    <Nav
      mode={props.mode}
      className={props.className}
      pathname={props.location.pathname}
    />
  );
});
