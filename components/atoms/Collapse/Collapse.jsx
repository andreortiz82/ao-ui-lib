import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Collapse as AntCollapse } from "antd";

export const Collapse = (props) => {
  return (
    <ThemeWrapper>
      <AntCollapse {...props}>{props.children}</AntCollapse>
    </ThemeWrapper>
  );
};
