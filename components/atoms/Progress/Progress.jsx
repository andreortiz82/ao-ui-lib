
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Progress as AntProgress } from 'antd';

export const Progress = (props) => {
  return <ThemeWrapper><AntProgress {...props}>{props.children}</AntProgress></ThemeWrapper>
}
