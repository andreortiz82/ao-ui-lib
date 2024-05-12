import React from "react";
import { App } from "./App";
import { Space } from "../Space/Space";
import { Button } from "../Button/Button";
import { api } from "./api.js";

const MyPage = () => {
  const { message, modal, notification } = App.useApp();

  const showMessage = () => {
    message.success("Success!");
  };

  const showModal = () => {
    modal.warning({
      title: "This is a warning message",
      content: "some messages...some messages...",
    });
  };

  const showNotification = () => {
    notification.info({
      message: `Notification topLeft`,
      description: "Hello, Ant Design!!",
      placement: "topLeft",
    });
  };

  return (
    <Space wrap>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

export default {
  title: "Atoms/App",
  component: App,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => (
    <App {...args}>
      <MyPage />
    </App>
  ),
};
