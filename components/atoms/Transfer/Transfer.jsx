import React from "react";
import { Transfer as AntTransfer } from "antd";

export const Transfer = (props) => {
  return <AntTransfer {...props}>{props.children}</AntTransfer>;
};
