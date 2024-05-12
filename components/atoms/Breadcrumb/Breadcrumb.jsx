import React from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";

export const Breadcrumb = (props) => {
  return <AntBreadcrumb {...props}>{props.children}</AntBreadcrumb>;
};
