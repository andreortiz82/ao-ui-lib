import React from "react";
import { Menu as AntMenu } from "antd";

export const Menu = (props) => {
  return <AntMenu {...props}>{props.children}</AntMenu>;
};

Menu.Item = AntMenu.Item;
Menu.SubMenu = AntMenu.SubMenu;
Menu.Divider = AntMenu.Divider;
