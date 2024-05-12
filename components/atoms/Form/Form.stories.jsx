import React from "react";
import { Form } from "./Form";
import { api } from "./api.js";
import { Input } from "../Input/Input";

export default {
  title: "Atoms/Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    layout: "vertical",
  },
  render: (args) => (
    <Form {...args}>
      <Form.Item label="Full Name">
        <Input />
      </Form.Item>
      <Form.Item label="Email Address">
        <Input />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input />
      </Form.Item>
    </Form>
  ),
};
