import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Flex as AntFlex } from "antd";

export const Flex = (props) => {
  return (
    <ThemeWrapper>
      <AntFlex {...props}>{props.children}</AntFlex>
    </ThemeWrapper>
  );
};
