import React from "react";
import { Mentions } from "./Mentions";
import { api } from "./api.js";

export default {
  title: "Atoms/Mentions",
  component: Mentions,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    placeholder: "Mention someone using '@'",
    options: [
      {
        value: "larry",
        label: "larry",
      },
      {
        value: "curly",
        label: "curly",
      },
      {
        value: "moe",
        label: "moe",
      },
    ],
  },
  render: (args) => <Mentions {...args} />,
};
