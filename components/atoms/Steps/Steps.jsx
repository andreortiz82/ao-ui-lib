import React from "react";
import { Steps as AntSteps } from "antd";

export const Steps = (props) => {
  return <AntSteps {...props}>{props.children}</AntSteps>;
};
