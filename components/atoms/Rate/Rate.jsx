import React from "react";
import { Rate as AntRate } from "antd";

export const Rate = (props) => {
  return <AntRate {...props}>{props.children}</AntRate>;
};
