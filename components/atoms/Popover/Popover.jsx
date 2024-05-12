import React from "react";
import { Popover as AntPopover } from "antd";

export const Popover = (props) => {
  return <AntPopover {...props}>{props.children}</AntPopover>;
};
