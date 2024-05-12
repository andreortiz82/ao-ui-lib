import React from "react";
import { Popconfirm as AntPopconfirm } from "antd";

export const Popconfirm = (props) => {
  return <AntPopconfirm {...props}>{props.children}</AntPopconfirm>;
};
