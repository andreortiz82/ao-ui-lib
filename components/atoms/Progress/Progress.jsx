import React from "react";
import { Progress as AntProgress } from "antd";

export const Progress = (props) => {
  return <AntProgress {...props}>{props.children}</AntProgress>;
};
