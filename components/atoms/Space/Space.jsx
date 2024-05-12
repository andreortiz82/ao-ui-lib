import React from "react";
import { Space as AntSpace } from "antd";

export const Space = (props) => {
  return <AntSpace {...props}>{props.children}</AntSpace>;
};
