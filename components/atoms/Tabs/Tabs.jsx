
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Tabs as AntTabs } from 'antd';

export const Tabs = (props) => {
  return <ThemeWrapper><AntTabs {...props}>{props.children}</AntTabs></ThemeWrapper>
}
