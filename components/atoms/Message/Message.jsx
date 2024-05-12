
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Message as AntMessage } from 'antd';

export const Message = (props) => {
  return <ThemeWrapper><AntMessage {...props}>{props.children}</AntMessage></ThemeWrapper>
}
