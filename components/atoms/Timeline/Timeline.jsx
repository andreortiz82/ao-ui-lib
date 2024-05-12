import React from "react";
import { Timeline as AntTimeline } from "antd";

export const Timeline = (props) => {
  return <AntTimeline {...props}>{props.children}</AntTimeline>;
};
