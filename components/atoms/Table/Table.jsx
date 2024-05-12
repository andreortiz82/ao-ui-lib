
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Table as AntTable } from 'antd';

export const Table = (props) => {
  return <ThemeWrapper><AntTable {...props}>{props.children}</AntTable></ThemeWrapper>
}
