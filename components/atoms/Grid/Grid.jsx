import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Row as AntRow } from "antd";
import { Col as AntCol } from "antd";

export const Row = (props) => {
  return (
    <ThemeWrapper>
      <AntRow {...props}>{props.children}</AntRow>
    </ThemeWrapper>
  );
};

export const Col = (props) => {
  return (
    <ThemeWrapper>
      <AntCol {...props}>{props.children}</AntCol>
    </ThemeWrapper>
  );
};
