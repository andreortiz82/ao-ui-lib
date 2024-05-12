import React from "react";
import { Pagination as AntPagination } from "antd";

export const Pagination = (props) => {
  return <AntPagination {...props}>{props.children}</AntPagination>;
};
