
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Anchor as AntAnchor } from 'antd';

export const Anchor = (props) => {
  return <ThemeWrapper><AntAnchor {...props}>{props.children}</AntAnchor></ThemeWrapper>
}
