import React from "react";
import { Anchor } from "./Anchor";
import { api } from "./api.js";

export default {
  title: "Atoms/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    items: [
      {
        key: "part-1",
        href: "#part-1",
        title: "Part 1",
      },
      {
        key: "part-2",
        href: "#part-2",
        title: "Part 2",
      },
      {
        key: "part-3",
        href: "#part-3",
        title: "Part 3",
      },
    ],
  },
  render: (args) => <Anchor {...args} />,
};
