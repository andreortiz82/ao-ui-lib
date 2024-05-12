import React from "react";
import { Divider as AntDivider } from "antd";

export const Divider = (props) => {
  return <AntDivider {...props}>{props.children}</AntDivider>;
};
