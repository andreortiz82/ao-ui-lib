import React from "react";
import { Upload as AntUpload } from "antd";

export const Upload = (props) => {
  return <AntUpload {...props}>{props.children}</AntUpload>;
};
