import React from "react";
import { ThemeWrapper } from "./ThemeWrapper";
import { Button } from "../atoms/Button/Button";
import { Space } from "../atoms/Space/Space";

export default {
  title: "Organisms/Theme Wrapper",
  component: ThemeWrapper,
  tags: ["autodocs"],
};
export const Example = {
  render: (args) => (
    <ThemeWrapper>
      <Space>
        <Button>Button</Button>
        <Button type="primary">Button</Button>
      </Space>
    </ThemeWrapper>
  ),
};
