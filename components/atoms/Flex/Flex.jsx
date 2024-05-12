import React from "react";
import { Flex as AntFlex } from "antd";

export const Flex = (props) => {
  return <AntFlex {...props}>{props.children}</AntFlex>;
};
