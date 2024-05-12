
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Slider as AntSlider } from 'antd';

export const Slider = (props) => {
  return <ThemeWrapper><AntSlider {...props}>{props.children}</AntSlider></ThemeWrapper>
}
