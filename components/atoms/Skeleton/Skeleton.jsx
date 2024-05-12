import React from "react";
import { Skeleton as AntSkeleton } from "antd";

export const Skeleton = (props) => {
  return <AntSkeleton {...props}>{props.children}</AntSkeleton>;
};
