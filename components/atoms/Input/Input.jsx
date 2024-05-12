
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Input as AntInput } from 'antd';

export const Input = (props) => {
  return <ThemeWrapper><AntInput {...props}>{props.children}</AntInput></ThemeWrapper>
}
