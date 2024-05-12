
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Checkbox as AntCheckbox } from 'antd';

export const Checkbox = (props) => {
  return <ThemeWrapper><AntCheckbox {...props}>{props.children}</AntCheckbox></ThemeWrapper>
}
