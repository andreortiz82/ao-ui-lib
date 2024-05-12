
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Result as AntResult } from 'antd';

export const Result = (props) => {
  return <ThemeWrapper><AntResult {...props}>{props.children}</AntResult></ThemeWrapper>
}
