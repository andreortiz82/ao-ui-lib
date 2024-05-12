
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { AutoComplete as AntAutoComplete } from 'antd';

export const AutoComplete = (props) => {
  return <ThemeWrapper><AntAutoComplete {...props}>{props.children}</AntAutoComplete></ThemeWrapper>
}
