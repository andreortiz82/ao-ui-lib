import React from "react";
import { Collapse as AntCollapse } from "antd";

export const Collapse = (props) => {
  return <AntCollapse {...props}>{props.children}</AntCollapse>;
};
