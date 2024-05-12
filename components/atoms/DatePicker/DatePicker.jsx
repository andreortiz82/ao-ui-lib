import React from "react";
import { DatePicker as AntDatePicker } from "antd";

export const DatePicker = (props) => {
  return <AntDatePicker {...props}>{props.children}</AntDatePicker>;
};
