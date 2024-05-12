import React from "react";
import { Drawer as AntDrawer } from "antd";

export const Drawer = (props) => {
  return <AntDrawer {...props}>{props.children}</AntDrawer>;
};
