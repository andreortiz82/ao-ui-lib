import React from "react";
import { Typography as AntTypography } from "antd";

export const Typography = (props) => {
  return <AntTypography {...props}>{props.children}</AntTypography>;
};

Typography.Text = (props) => {
  return <AntTypography.Text {...props}>{props.children}</AntTypography.Text>;
};

Typography.Paragraph = (props) => {
  return (
    <AntTypography.Paragraph {...props}>
      {props.children}
    </AntTypography.Paragraph>
  );
};

Typography.Title = (props) => {
  return <AntTypography.Title {...props}>{props.children}</AntTypography.Title>;
};
