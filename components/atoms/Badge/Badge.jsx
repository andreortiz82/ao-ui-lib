import React from "react";
import { Badge as AntBadge } from "antd";

export const Badge = (props) => {
  return <AntBadge {...props}>{props.children}</AntBadge>;
};
