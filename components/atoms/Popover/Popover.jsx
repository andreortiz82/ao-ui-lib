
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Popover as AntPopover } from 'antd';

export const Popover = (props) => {
  return <ThemeWrapper><AntPopover {...props}>{props.children}</AntPopover></ThemeWrapper>
}
