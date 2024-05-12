
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Affix as AntAffix } from 'antd';

export const Affix = (props) => {
  return <ThemeWrapper><AntAffix {...props}>{props.children}</AntAffix></ThemeWrapper>
}
