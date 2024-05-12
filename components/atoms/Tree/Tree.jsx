import React from "react";
import { Tree as AntTree } from "antd";

export const Tree = (props) => {
  return <AntTree {...props}>{props.children}</AntTree>;
};
