import React from "react";
import { Cascader } from "./Cascader";
import { api } from "./api.js";

export default {
  title: "Atoms/Cascader",
  component: Cascader,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    options: [
      {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
          {
            value: "hangzhou",
            label: "Hangzhou",
            children: [
              {
                value: "xihu",
                label: "West Lake",
              },
            ],
          },
        ],
      },
      {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
          {
            value: "nanjing",
            label: "Nanjing",
            children: [
              {
                value: "zhonghuamen",
                label: "Zhong Hua Men",
              },
            ],
          },
        ],
      },
    ],
    placeholder: "Choose option",
  },
  render: (args) => <Cascader {...args} />,
};
