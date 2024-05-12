import React from "react";
import { Cascader as AntCascader } from "antd";

export const Cascader = (props) => {
  return <AntCascader {...props}>{props.children}</AntCascader>;
};
