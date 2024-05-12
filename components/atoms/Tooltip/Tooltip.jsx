
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Tooltip as AntTooltip } from 'antd';

export const Tooltip = (props) => {
  return <ThemeWrapper><AntTooltip {...props}>{props.children}</AntTooltip></ThemeWrapper>
}
