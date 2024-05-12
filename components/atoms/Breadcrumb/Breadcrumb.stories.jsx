import React from "react";
import { Breadcrumb } from "./Breadcrumb";
import { api } from "./api.js";

export default {
  title: "Atoms/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    separator: "/",
    items: [
      {
        title: "Home",
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: "An Application",
      },
    ],
  },
  render: (args) => <Breadcrumb {...args} />,
};
