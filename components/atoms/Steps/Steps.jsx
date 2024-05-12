
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Steps as AntSteps } from 'antd';

export const Steps = (props) => {
  return <ThemeWrapper><AntSteps {...props}>{props.children}</AntSteps></ThemeWrapper>
}
