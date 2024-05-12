import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Badge as AntBadge } from "antd";

export const Badge = (props) => {
  return (
    <ThemeWrapper>
      <AntBadge {...props}>{props.children}</AntBadge>
    </ThemeWrapper>
  );
};
