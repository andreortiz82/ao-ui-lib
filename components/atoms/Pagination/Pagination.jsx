
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Pagination as AntPagination } from 'antd';

export const Pagination = (props) => {
  return <ThemeWrapper><AntPagination {...props}>{props.children}</AntPagination></ThemeWrapper>
}
