
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Segmented as AntSegmented } from 'antd';

export const Segmented = (props) => {
  return <ThemeWrapper><AntSegmented {...props}>{props.children}</AntSegmented></ThemeWrapper>
}
