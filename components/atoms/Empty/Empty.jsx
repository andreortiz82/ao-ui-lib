import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Empty as AntEmpty } from "antd";

export const Empty = (props) => {
  return (
    <ThemeWrapper>
      <AntEmpty {...props}>{props.children}</AntEmpty>
    </ThemeWrapper>
  );
};

Empty.PRESENTED_IMAGE_SIMPLE = AntEmpty.PRESENTED_IMAGE_SIMPLE;
Empty.PRESENTED_IMAGE_DEFAULT = AntEmpty.PRESENTED_IMAGE_DEFAULT;
