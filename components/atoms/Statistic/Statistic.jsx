
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Statistic as AntStatistic } from 'antd';

export const Statistic = (props) => {
  return <ThemeWrapper><AntStatistic {...props}>{props.children}</AntStatistic></ThemeWrapper>
}
