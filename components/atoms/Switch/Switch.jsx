import React from "react";
import { Switch as AntSwitch } from "antd";

export const Switch = (props) => {
  return <AntSwitch {...props}>{props.children}</AntSwitch>;
};
