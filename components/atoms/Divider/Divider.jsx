
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Divider as AntDivider } from 'antd';

export const Divider = (props) => {
  return <ThemeWrapper><AntDivider {...props}>{props.children}</AntDivider></ThemeWrapper>
}
