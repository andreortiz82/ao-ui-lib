import React from "react";
import { Message } from "./Message";
import { Button } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import { api } from "./api.js";

export default {
  title: "Atoms/Message",
  component: Message,
  tags: ["autodocs"],
  argTypes: api,
};

const Demo = () => {
  const [messageApi, contextHolder] = Message.useMessage();
  const info = () => {
    messageApi.info("AO!");
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display message
      </Button>
    </>
  );
};

export const Example = {
  render: (args) => <Demo />,
};
