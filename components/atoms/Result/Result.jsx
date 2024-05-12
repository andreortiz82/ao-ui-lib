import React from "react";
import { Result as AntResult } from "antd";

export const Result = (props) => {
  return <AntResult {...props}>{props.children}</AntResult>;
};
