import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Card as AntCard } from "antd";

export const Card = (props) => {
  return (
    <ThemeWrapper>
      <AntCard {...props}>{props.children}</AntCard>
    </ThemeWrapper>
  );
};
