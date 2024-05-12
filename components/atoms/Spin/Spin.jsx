
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Spin as AntSpin } from 'antd';

export const Spin = (props) => {
  return <ThemeWrapper><AntSpin {...props}>{props.children}</AntSpin></ThemeWrapper>
}
