import React from "react";
import { Empty as AntEmpty } from "antd";

export const Empty = (props) => {
  return <AntEmpty {...props}>{props.children}</AntEmpty>;
};

Empty.PRESENTED_IMAGE_SIMPLE = AntEmpty.PRESENTED_IMAGE_SIMPLE;
Empty.PRESENTED_IMAGE_DEFAULT = AntEmpty.PRESENTED_IMAGE_DEFAULT;
