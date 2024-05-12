import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { ColorPicker as AntColorPicker } from "antd";

export const ColorPicker = (props) => {
  return (
    <ThemeWrapper>
      <AntColorPicker {...props}>{props.children}</AntColorPicker>
    </ThemeWrapper>
  );
};
