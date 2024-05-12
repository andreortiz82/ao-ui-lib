
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Mentions as AntMentions } from 'antd';

export const Mentions = (props) => {
  return <ThemeWrapper><AntMentions {...props}>{props.children}</AntMentions></ThemeWrapper>
}
