
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Radio as AntRadio } from 'antd';

export const Radio = (props) => {
  return <ThemeWrapper><AntRadio {...props}>{props.children}</AntRadio></ThemeWrapper>
}
