
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Switch as AntSwitch } from 'antd';

export const Switch = (props) => {
  return <ThemeWrapper><AntSwitch {...props}>{props.children}</AntSwitch></ThemeWrapper>
}
