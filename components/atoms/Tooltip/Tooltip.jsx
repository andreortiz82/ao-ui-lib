import React from "react";
import { Tooltip as AntTooltip } from "antd";

export const Tooltip = (props) => {
  return <AntTooltip {...props}>{props.children}</AntTooltip>;
};
