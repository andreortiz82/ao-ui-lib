import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Alert as AntAlert } from "antd";

export const Alert = (props) => {
  return (
    <ThemeWrapper>
      <AntAlert {...props}>{props.children}</AntAlert>
    </ThemeWrapper>
  );
};
