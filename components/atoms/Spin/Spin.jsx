import React from "react";
import { Spin as AntSpin } from "antd";

export const Spin = (props) => {
  return <AntSpin {...props}>{props.children}</AntSpin>;
};
