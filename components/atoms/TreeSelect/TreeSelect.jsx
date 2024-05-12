
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { TreeSelect as AntTreeSelect } from 'antd';

export const TreeSelect = (props) => {
  return <ThemeWrapper><AntTreeSelect {...props}>{props.children}</AntTreeSelect></ThemeWrapper>
}
