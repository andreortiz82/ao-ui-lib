import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { App as AntApp } from "antd";

export const App = (props) => {
  return (
    <ThemeWrapper>
      <AntApp {...props}>{props.children}</AntApp>
    </ThemeWrapper>
  );
};

App.useApp = AntApp.useApp;
