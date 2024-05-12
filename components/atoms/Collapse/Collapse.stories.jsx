import React from "react";
import { Collapse } from "./Collapse";
import { api } from "./api.js";

export default {
  title: "Atoms/Collapse",
  component: Collapse,
  tags: ["autodocs"],
  argTypes: api,
};

const text = `A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const Example = {
  args: {
    items: [
      {
        key: "1",
        label: "This is panel header 1",
        children: <p>{text}</p>,
      },
      {
        key: "2",
        label: "This is panel header 2",
        children: <p>{text}</p>,
      },
      {
        key: "3",
        label: "This is panel header 3",
        children: <p>{text}</p>,
      },
    ],
  },
  render: (args) => <Collapse {...args} />,
};
