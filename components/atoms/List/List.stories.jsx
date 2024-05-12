import React from "react";
import { List } from "./List";
import { api } from "./api.js";
import { Typography } from "antd";

export default {
  title: "Atoms/List",
  component: List,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    bordered: true,
    dataSource: [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires.",
    ],
    footer: "List Footer",
    header: "List Header",
    loading: false,
    renderItem: (item) => {
      return (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      );
    },
  },
  render: (args) => <List {...args} />,
};
