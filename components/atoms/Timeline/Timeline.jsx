
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Timeline as AntTimeline } from 'antd';

export const Timeline = (props) => {
  return <ThemeWrapper><AntTimeline {...props}>{props.children}</AntTimeline></ThemeWrapper>
}
