import React from "react";
import { Watermark as AntWatermark } from "antd";

export const Watermark = (props) => {
  return <AntWatermark {...props}>{props.children}</AntWatermark>;
};
