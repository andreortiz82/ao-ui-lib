import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Avatar as AntAvatar } from "antd";

export const Avatar = (props) => {
  return (
    <ThemeWrapper>
      <AntAvatar {...props}>{props.children}</AntAvatar>
    </ThemeWrapper>
  );
};
