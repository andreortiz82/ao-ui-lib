
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Drawer as AntDrawer } from 'antd';

export const Drawer = (props) => {
  return <ThemeWrapper><AntDrawer {...props}>{props.children}</AntDrawer></ThemeWrapper>
}
