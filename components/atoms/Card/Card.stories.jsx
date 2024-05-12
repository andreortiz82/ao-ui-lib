import React from "react";
import { Card } from "./Card";
import { api } from "./api.js";

export default {
  title: "Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    title: "Card Title",
    extra: <a href="#">More</a>,
    style: { width: 300 },
  },
  render: (args) => <Card {...args}>Card</Card>,
};
