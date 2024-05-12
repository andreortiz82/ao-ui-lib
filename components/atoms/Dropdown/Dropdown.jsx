import React from "react";
import { Dropdown as AntDropdown } from "antd";

export const Dropdown = (props) => {
  return <AntDropdown {...props}>{props.children}</AntDropdown>;
};
