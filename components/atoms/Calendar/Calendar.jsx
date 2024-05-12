
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Calendar as AntCalendar } from 'antd';

export const Calendar = (props) => {
  return <ThemeWrapper><AntCalendar {...props}>{props.children}</AntCalendar></ThemeWrapper>
}
