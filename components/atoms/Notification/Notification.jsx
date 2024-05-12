
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Notification as AntNotification } from 'antd';

export const Notification = (props) => {
  return <ThemeWrapper><AntNotification {...props}>{props.children}</AntNotification></ThemeWrapper>
}
