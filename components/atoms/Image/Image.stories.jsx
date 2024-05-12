import React from "react";
import { Image } from "./Image";
import { api } from "./api.js";

export default {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    alt: "placeholder",
    src: "https://picsum.photos/400/300?random=1",
  },

  render: (args) => <Image {...args}>Image</Image>,
};
