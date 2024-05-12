import React from "react";
import { Message as AntMessage } from "antd";

export const Message = (props) => {
  return <AntMessage {...props}>{props.children}</AntMessage>;
};
