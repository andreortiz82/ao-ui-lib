
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Carousel as AntCarousel } from 'antd';

export const Carousel = (props) => {
  return <ThemeWrapper><AntCarousel {...props}>{props.children}</AntCarousel></ThemeWrapper>
}
