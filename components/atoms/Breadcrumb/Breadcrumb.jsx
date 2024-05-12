
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Breadcrumb as AntBreadcrumb } from 'antd';

export const Breadcrumb = (props) => {
  return <ThemeWrapper><AntBreadcrumb {...props}>{props.children}</AntBreadcrumb></ThemeWrapper>
}
