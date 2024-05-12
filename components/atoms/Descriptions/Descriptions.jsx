
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Descriptions as AntDescriptions } from 'antd';

export const Descriptions = (props) => {
  return <ThemeWrapper><AntDescriptions {...props}>{props.children}</AntDescriptions></ThemeWrapper>
}
