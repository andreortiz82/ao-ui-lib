
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Dropdown as AntDropdown } from 'antd';

export const Dropdown = (props) => {
  return <ThemeWrapper><AntDropdown {...props}>{props.children}</AntDropdown></ThemeWrapper>
}
