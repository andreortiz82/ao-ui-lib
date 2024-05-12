
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { FloatButton as AntFloatButton } from 'antd';

export const FloatButton = (props) => {
  return <ThemeWrapper><AntFloatButton {...props}>{props.children}</AntFloatButton></ThemeWrapper>
}
