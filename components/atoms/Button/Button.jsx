import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Button as AntButton } from "antd";

export const Button = (props) => {
  return (
    <ThemeWrapper>
      <AntButton {...props}>{props.children}</AntButton>
    </ThemeWrapper>
  );
};
