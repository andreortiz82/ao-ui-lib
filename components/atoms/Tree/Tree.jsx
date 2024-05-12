
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Tree as AntTree } from 'antd';

export const Tree = (props) => {
  return <ThemeWrapper><AntTree {...props}>{props.children}</AntTree></ThemeWrapper>
}
