import React from "react";
import { Avatar } from "./Avatar";
import { api } from "./api.js";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    size: 64,
    src: "https://picsum.photos/100/100?random=1",
    shape: "circle",
  },
  render: (args) => <Avatar {...args} />,
};
