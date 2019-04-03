import React, { Component } from "react";
import { Tag } from "antd";

interface Props {
  good: boolean;
  tab: string;
  top: boolean;
}

const tabConfig: any = {
  top: {
    color: "magenta",
    text: "置顶"
  },
  good: {
    color: "geekblue",
    text: "精华"
  },
  job: {
    color: "cyan",
    text: "招聘"
  },
  share: {
    color: "purple",
    text: "分享"
  },
  ask: {
    color: "green",
    text: "问答"
  },
  dev: {
    color: "lime",
    text: "测试"
  }
};

function getTab(top: boolean, good: boolean, tab: string): string {
  return top ? "top" : good ? "good" : tab;
}

class TextTag extends Component<Props, {}> {
  render() {
    const nowTab =
      tabConfig[getTab(this.props.top, this.props.good, this.props.tab)];
    return <Tag color={nowTab.color}>{nowTab.text}</Tag>;
  }
}

export default TextTag;
