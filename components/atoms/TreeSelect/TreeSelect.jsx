import React from "react";
import { TreeSelect as AntTreeSelect } from "antd";

export const TreeSelect = (props) => {
  return <AntTreeSelect {...props}>{props.children}</AntTreeSelect>;
};
