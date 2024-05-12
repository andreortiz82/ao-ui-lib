import React from "react";
import { Mentions as AntMentions } from "antd";

export const Mentions = (props) => {
  return <AntMentions {...props}>{props.children}</AntMentions>;
};
