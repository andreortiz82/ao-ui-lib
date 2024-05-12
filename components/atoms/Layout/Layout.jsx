import React from "react";
import { Layout as AntLayout } from "antd";

export const Layout = (props) => {
  return <AntLayout {...props}>{props.children}</AntLayout>;
};

Layout.Header = (props) => {
  return <AntLayout.Header {...props}>{props.children}</AntLayout.Header>;
};

Layout.Footer = (props) => {
  return <AntLayout.Footer {...props}>{props.children}</AntLayout.Footer>;
};

Layout.Sider = (props) => {
  return <AntLayout.Sider {...props}>{props.children}</AntLayout.Sider>;
};

Layout.Content = (props) => {
  return <AntLayout.Content {...props}>{props.children}</AntLayout.Content>;
};
