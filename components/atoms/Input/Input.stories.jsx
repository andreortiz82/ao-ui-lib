import React from "react";
import { Input } from "./Input";
import { api } from "./api.js";

export default {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    placeholder: "Placeholder",
  },
  render: (args) => <Input {...args} />,
};
