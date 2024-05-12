import React from "react";
import { App as AntApp } from "antd";

export const App = (props) => {
  return <AntApp {...props}>{props.children}</AntApp>;
};

App.useApp = AntApp.useApp;
