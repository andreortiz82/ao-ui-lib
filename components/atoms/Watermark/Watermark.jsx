
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Watermark as AntWatermark } from 'antd';

export const Watermark = (props) => {
  return <ThemeWrapper><AntWatermark {...props}>{props.children}</AntWatermark></ThemeWrapper>
}
