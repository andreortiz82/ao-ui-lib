
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Popconfirm as AntPopconfirm } from 'antd';

export const Popconfirm = (props) => {
  return <ThemeWrapper><AntPopconfirm {...props}>{props.children}</AntPopconfirm></ThemeWrapper>
}
