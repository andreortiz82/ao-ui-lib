
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Space as AntSpace } from 'antd';

export const Space = (props) => {
  return <ThemeWrapper><AntSpace {...props}>{props.children}</AntSpace></ThemeWrapper>
}
