import React from "react";
import { ColorPicker as AntColorPicker } from "antd";

export const ColorPicker = (props) => {
  return <AntColorPicker {...props}>{props.children}</AntColorPicker>;
};
