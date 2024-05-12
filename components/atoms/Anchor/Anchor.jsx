import React from "react";
import { Anchor as AntAnchor } from "antd";

export const Anchor = (props) => {
  return <AntAnchor {...props}>{props.children}</AntAnchor>;
};
