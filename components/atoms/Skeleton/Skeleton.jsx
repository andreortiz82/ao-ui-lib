
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Skeleton as AntSkeleton } from 'antd';

export const Skeleton = (props) => {
  return <ThemeWrapper><AntSkeleton {...props}>{props.children}</AntSkeleton></ThemeWrapper>
}
