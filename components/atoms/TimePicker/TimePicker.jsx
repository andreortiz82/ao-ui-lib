import React from "react";
import { TimePicker as AntTimePicker } from "antd";

export const TimePicker = (props) => {
  return <AntTimePicker {...props}>{props.children}</AntTimePicker>;
};
