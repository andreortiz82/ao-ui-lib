import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Typography as AntTypography } from "antd";

export const Typography = (props) => {
  return (
    <ThemeWrapper>
      <AntTypography {...props}>{props.children}</AntTypography>
    </ThemeWrapper>
  );
};

Typography.Text = (props) => {
  return <AntTypography.Text {...props}>{props.children}</AntTypography.Text>;
};

Typography.Title = (props) => {
  return <AntTypography.Title {...props}>{props.children}</AntTypography.Title>;
};
