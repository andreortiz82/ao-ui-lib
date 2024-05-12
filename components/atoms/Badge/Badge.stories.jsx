import React from "react";
import { Badge } from "./Badge";
import { Avatar } from "../Avatar/Avatar";
import { api } from "./api.js";

export default {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => (
    <Badge count={5}>
      <Avatar shape="square" size="large">
        AO
      </Avatar>
    </Badge>
  ),
};
