import React from "react";
import { ColorPicker } from "./ColorPicker";
import { api } from "./api.js";

export default {
  title: "Atoms/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    defaultValue: "#000",
  },
  render: (args) => <ColorPicker {...args} />,
};
