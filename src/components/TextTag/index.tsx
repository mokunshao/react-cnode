import React from "react";
import {Tag} from "antd";

interface Props {
  top: boolean;
  good: boolean;
  tab: string;
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

function TextTag(props: Props) {
  if(props.tab){
    const nowTab =
      tabConfig[getTab(props.top, props.good, props.tab)];
    return <Tag color={nowTab.color}>{nowTab.text}</Tag>;
  }else{
    return <Tag>主题</Tag> 
  }
}

export default TextTag;
