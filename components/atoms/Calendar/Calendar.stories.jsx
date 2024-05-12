import React from "react";
import { Calendar } from "./Calendar";
import { api } from "./api.js";

export default {
  title: "Atoms/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => <Calendar {...args} />,
};
