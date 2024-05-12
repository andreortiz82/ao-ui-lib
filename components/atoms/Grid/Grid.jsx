import React from "react";
import { Row as AntRow } from "antd";
import { Col as AntCol } from "antd";

export const Row = (props) => {
  return <AntRow {...props}>{props.children}</AntRow>;
};

export const Col = (props) => {
  return <AntCol {...props}>{props.children}</AntCol>;
};
