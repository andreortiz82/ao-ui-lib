import React from "react";
import { DatePicker } from "./DatePicker";
import { api } from "./api.js";

export default {
  title: "Atoms/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => <DatePicker {...args} />,
};
