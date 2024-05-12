
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Select as AntSelect } from 'antd';

export const Select = (props) => {
  return <ThemeWrapper><AntSelect {...props}>{props.children}</AntSelect></ThemeWrapper>
}
