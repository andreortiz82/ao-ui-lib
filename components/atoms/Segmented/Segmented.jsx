import React from "react";
import { Segmented as AntSegmented } from "antd";

export const Segmented = (props) => {
  return <AntSegmented {...props}>{props.children}</AntSegmented>;
};
