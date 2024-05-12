import React from "react";
import { Tag as AntTag } from "antd";

export const Tag = (props) => {
  return <AntTag {...props}>{props.children}</AntTag>;
};
