import React from "react";
import { Alert as AntAlert } from "antd";

export const Alert = (props) => {
  return <AntAlert {...props}>{props.children}</AntAlert>;
};
