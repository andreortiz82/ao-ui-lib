import React from "react";
import { Checkbox as AntCheckbox } from "antd";

export const Checkbox = (props) => {
  return <AntCheckbox {...props}>{props.children}</AntCheckbox>;
};
