import React from "react";
import { Avatar as AntAvatar } from "antd";

export const Avatar = (props) => {
  return <AntAvatar {...props}>{props.children}</AntAvatar>;
};
