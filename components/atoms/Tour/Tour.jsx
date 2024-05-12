import React from "react";
import { Tour as AntTour } from "antd";

export const Tour = (props) => {
  return <AntTour {...props}>{props.children}</AntTour>;
};
