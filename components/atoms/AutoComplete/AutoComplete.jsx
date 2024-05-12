import React from "react";
import { AutoComplete as AntAutoComplete } from "antd";

export const AutoComplete = (props) => {
  return <AntAutoComplete {...props}>{props.children}</AntAutoComplete>;
};
