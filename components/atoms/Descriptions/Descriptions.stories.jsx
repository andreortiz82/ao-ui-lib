import React from "react";
import { Descriptions } from "./Descriptions";
import { api } from "./api.js";

export default {
  title: "Atoms/Descriptions",
  component: Descriptions,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    title: "User Info",
    items: [
      {
        key: "1",
        label: "UserName",
        children: <p>Zhou Maomao</p>,
      },
      {
        key: "2",
        label: "Telephone",
        children: <p>1810000000</p>,
      },
      {
        key: "3",
        label: "Live",
        children: <p>Hangzhou, Zhejiang</p>,
      },
      {
        key: "4",
        label: "Remark",
        children: <p>empty</p>,
      },
      {
        key: "5",
        label: "Address",
        children: (
          <p>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</p>
        ),
      },
    ],
  },
  render: (args) => <Descriptions {...args} />,
};
