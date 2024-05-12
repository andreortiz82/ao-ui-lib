
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { List as AntList } from 'antd';

export const List = (props) => {
  return <ThemeWrapper><AntList {...props}>{props.children}</AntList></ThemeWrapper>
}
