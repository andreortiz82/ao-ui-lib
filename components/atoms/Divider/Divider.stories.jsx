import React from "react";
import { Divider } from "./Divider";
import { api } from "./api.js";

export default {
  title: "Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => <Divider {...args}>Divider</Divider>,
};
