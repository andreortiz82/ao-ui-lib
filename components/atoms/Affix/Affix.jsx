import React from "react";
import { Affix as AntAffix } from "antd";

export const Affix = (props) => {
  return <AntAffix {...props}>{props.children}</AntAffix>;
};
