
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Upload as AntUpload } from 'antd';

export const Upload = (props) => {
  return <ThemeWrapper><AntUpload {...props}>{props.children}</AntUpload></ThemeWrapper>
}
