
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { TimePicker as AntTimePicker } from 'antd';

export const TimePicker = (props) => {
  return <ThemeWrapper><AntTimePicker {...props}>{props.children}</AntTimePicker></ThemeWrapper>
}
