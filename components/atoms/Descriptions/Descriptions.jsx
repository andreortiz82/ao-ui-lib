import React from "react";
import { Descriptions as AntDescriptions } from "antd";

export const Descriptions = (props) => {
  return <AntDescriptions {...props}>{props.children}</AntDescriptions>;
};
