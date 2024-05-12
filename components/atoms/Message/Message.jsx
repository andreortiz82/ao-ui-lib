import React from "react";
import { message as AntMessage } from "antd";

export const Message = (props) => {
  return <AntMessage {...props} />;
};

Message.useMessage = AntMessage.useMessage;
