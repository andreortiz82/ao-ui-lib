import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Form as AntForm } from "antd";

export const Form = (props) => {
  return (
    <ThemeWrapper>
      <AntForm {...props}>{props.children}</AntForm>
    </ThemeWrapper>
  );
};

Form.Item = AntForm.Item;
Form.List = AntForm.List;
Form.Provider = AntForm.Provider;
