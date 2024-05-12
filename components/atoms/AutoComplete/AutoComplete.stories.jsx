import React from "react";
import { AutoComplete } from "./AutoComplete";
import { api } from "./api.js";

export default {
  title: "Atoms/AutoComplete",
  component: AutoComplete,
  tags: ["autodocs"],
  argTypes: api,
};

export const Example = {
  args: {
    options: [...Array(20)].map((_, idx) => ({
      value: `Option ${idx.toString()}`,
    })),
    style: { width: 200 },
    placeholder: "Find option",
  },
  render: (args) => <AutoComplete {...args} />,
};
