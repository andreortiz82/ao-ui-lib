import React from "react";
import { Alert } from "./Alert";
import { api } from "./api.js";
import { message } from "antd";

export default {
  title: "Atoms/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    closable: true,
    description: "This is a description",
    message: "This is a message",
    type: "success",
    showIcon: true,
  },
  render: (args) => <Alert {...args} />,
};
