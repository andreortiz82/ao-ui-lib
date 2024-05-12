import React from "react";
import { Notification as AntNotification } from "antd";

export const Notification = (props) => {
  return <AntNotification {...props}>{props.children}</AntNotification>;
};
