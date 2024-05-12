
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Rate as AntRate } from 'antd';

export const Rate = (props) => {
  return <ThemeWrapper><AntRate {...props}>{props.children}</AntRate></ThemeWrapper>
}
