import React from "react";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button/Button";
import { api } from "./api.js";

export default {
  title: "Atoms/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    items: [...Array(5)].map((_, index) => ({
      key: index,
      label: <span> Item {index}</span>,
    })),
  },
  render: (args) => (
    <Dropdown {...args} menu={{ items: args.items }}>
      <Button>Dropdown</Button>
    </Dropdown>
  ),
};
