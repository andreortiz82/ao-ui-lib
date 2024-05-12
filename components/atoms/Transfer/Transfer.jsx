
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Transfer as AntTransfer } from 'antd';

export const Transfer = (props) => {
  return <ThemeWrapper><AntTransfer {...props}>{props.children}</AntTransfer></ThemeWrapper>
}
