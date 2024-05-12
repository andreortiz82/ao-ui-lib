import React from "react";
import { Statistic as AntStatistic } from "antd";

export const Statistic = (props) => {
  return <AntStatistic {...props}>{props.children}</AntStatistic>;
};
