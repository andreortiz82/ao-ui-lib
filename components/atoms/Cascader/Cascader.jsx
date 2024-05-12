import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Cascader as AntCascader } from "antd";

export const Cascader = (props) => {
  return (
    <ThemeWrapper>
      <AntCascader {...props}>{props.children}</AntCascader>
    </ThemeWrapper>
  );
};
