import React from "react";
import { Select as AntSelect } from "antd";

export const Select = (props) => {
  return <AntSelect {...props}>{props.children}</AntSelect>;
};
