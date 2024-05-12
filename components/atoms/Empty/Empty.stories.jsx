import React from "react";
import { Empty } from "./Empty";
import { api } from "./api.js";

export default {
  title: "Atoms/Empty",
  component: Empty,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} {...args} />,
};
