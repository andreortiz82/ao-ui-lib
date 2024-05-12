import React from "react";
import { List as AntList } from "antd";

export const List = (props) => {
  return <AntList {...props}>{props.children}</AntList>;
};

List.Item = AntList.Item;
