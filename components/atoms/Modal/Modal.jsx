import React from "react";
import { Modal as AntModal } from "antd";

export const Modal = (props) => {
  return <AntModal {...props}>{props.children}</AntModal>;
};
