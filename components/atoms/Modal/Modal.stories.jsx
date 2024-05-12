import React from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { api } from "./api.js";

export default {
  title: "Atoms/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    visible: true,
    maskClosable: true,
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal
          {...args}
          visible={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  },
};
