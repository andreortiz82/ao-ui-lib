import React from "react";
import { FloatButton as AntFloatButton } from "antd";

export const FloatButton = (props) => {
  return <AntFloatButton {...props}>{props.children}</AntFloatButton>;
};
