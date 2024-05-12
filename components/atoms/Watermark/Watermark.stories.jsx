import React from "react";
import { Watermark } from "./Watermark";
import { api } from "./api.js";
import { Card } from "antd";

export default {
  title: "Atoms/Watermark",
  component: Watermark,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    content: "AO UI Library",
  },
  render: (args) => (
    <Watermark {...args}>
      <Card title="Card title" bordered={false}>
        Stuff here
      </Card>
    </Watermark>
  ),
};
