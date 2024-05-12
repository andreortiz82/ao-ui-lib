import React from "react";
import { Form as AntForm } from "antd";

export const Form = (props) => {
  return <AntForm {...props}>{props.children}</AntForm>;
};

Form.Item = AntForm.Item;
Form.List = AntForm.List;
Form.Provider = AntForm.Provider;
