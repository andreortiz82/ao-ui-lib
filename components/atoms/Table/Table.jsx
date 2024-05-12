import React from "react";
import { Table as AntTable } from "antd";

export const Table = (props) => {
  return <AntTable {...props}>{props.children}</AntTable>;
};
