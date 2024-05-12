import React from "react";
import { Button } from "./Button";
import { api } from "./api.js";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => <Button {...args}>Button</Button>,
};
