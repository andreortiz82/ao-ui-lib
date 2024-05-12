import React from "react";
import { InputNumber } from "./InputNumber";
import { api } from "./api.js";

export default {
  title: "Atoms/InputNumber",
  component: InputNumber,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    placeholder: "0",
  },
  render: (args) => <InputNumber {...args} />,
};
