import React from "react";
import { Tabs as AntTabs } from "antd";

export const Tabs = (props) => {
  return <AntTabs {...props}>{props.children}</AntTabs>;
};
