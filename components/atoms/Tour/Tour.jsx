
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Tour as AntTour } from 'antd';

export const Tour = (props) => {
  return <ThemeWrapper><AntTour {...props}>{props.children}</AntTour></ThemeWrapper>
}
