import React from "react";
import { AntThemeWrapper } from "./index";
import { Button, Space } from "antd";

export default {
  title: "Organisms/Ant Theme Wrapper",
  component: AntThemeWrapper,
  tags: ["autodocs"],
};

export const Example = {
  render: (args) => (
    <AntThemeWrapper>
      <Space>
        <Button>Button</Button>
        <Button type="primary">Button</Button>
      </Space>
    </AntThemeWrapper>
  ),
};
