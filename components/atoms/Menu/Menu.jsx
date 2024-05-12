
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Menu as AntMenu } from 'antd';

export const Menu = (props) => {
  return <ThemeWrapper><AntMenu {...props}>{props.children}</AntMenu></ThemeWrapper>
}
