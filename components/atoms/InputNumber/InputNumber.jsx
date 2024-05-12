
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { InputNumber as AntInputNumber } from 'antd';

export const InputNumber = (props) => {
  return <ThemeWrapper><AntInputNumber {...props}>{props.children}</AntInputNumber></ThemeWrapper>
}
