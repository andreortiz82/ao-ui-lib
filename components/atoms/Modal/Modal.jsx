
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Modal as AntModal } from 'antd';

export const Modal = (props) => {
  return <ThemeWrapper><AntModal {...props}>{props.children}</AntModal></ThemeWrapper>
}
