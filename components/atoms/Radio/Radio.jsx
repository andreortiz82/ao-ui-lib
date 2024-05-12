import React from "react";
import { Radio as AntRadio } from "antd";

export const Radio = (props) => {
  return <AntRadio {...props}>{props.children}</AntRadio>;
};
