
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Image as AntImage } from 'antd';

export const Image = (props) => {
  return <ThemeWrapper><AntImage {...props}>{props.children}</AntImage></ThemeWrapper>
}
