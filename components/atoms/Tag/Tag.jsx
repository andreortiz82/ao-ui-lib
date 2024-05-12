
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Tag as AntTag } from 'antd';

export const Tag = (props) => {
  return <ThemeWrapper><AntTag {...props}>{props.children}</AntTag></ThemeWrapper>
}
