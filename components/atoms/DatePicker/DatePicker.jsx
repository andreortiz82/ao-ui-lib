
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { DatePicker as AntDatePicker } from 'antd';

export const DatePicker = (props) => {
  return <ThemeWrapper><AntDatePicker {...props}>{props.children}</AntDatePicker></ThemeWrapper>
}
