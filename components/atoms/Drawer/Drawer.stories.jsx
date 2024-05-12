import React from "react";
import { Drawer } from "./Drawer";
import { Button } from "../Button/Button";
import { api } from "./api.js";

export default {
  title: "Atoms/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: api,
};

export const Example = {
  args: {
    visible: true,
    maskClosable: true,
    title: "Drawer Title",
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer {...args} visible={open} onClose={() => setOpen(false)}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  },
};
