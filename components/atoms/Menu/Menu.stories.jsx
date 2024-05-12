import React from "react";
import { Menu } from "./Menu";
import { api } from "./api.js";
import { Horse, Heart, Cube } from "@phosphor-icons/react";

export default {
  title: "Atoms/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  args: {
    items: [
      {
        key: "sub1",
        label: "Navigation One",
        icon: <Horse weight="fill" />,
        children: [
          {
            key: "g1",
            label: "Item 1",
            type: "group",
            children: [
              {
                key: "1",
                label: "Option 1",
              },
              {
                key: "2",
                label: "Option 2",
              },
            ],
          },
          {
            key: "g2",
            label: "Item 2",
            type: "group",
            children: [
              {
                key: "3",
                label: "Option 3",
              },
              {
                key: "4",
                label: "Option 4",
              },
            ],
          },
        ],
      },
      {
        key: "sub2",
        label: "Navigation Two",
        icon: <Heart weight="fill" />,
        children: [
          {
            key: "5",
            label: "Option 5",
          },
          {
            key: "6",
            label: "Option 6",
          },
          {
            key: "sub3",
            label: "Submenu",
            children: [
              {
                key: "7",
                label: "Option 7",
              },
              {
                key: "8",
                label: "Option 8",
              },
            ],
          },
        ],
      },
      {
        type: "divider",
      },
      {
        key: "sub4",
        label: "Navigation Three",
        icon: <Cube weight="fill" />,
        children: [
          {
            key: "9",
            label: "Option 9",
          },
          {
            key: "10",
            label: "Option 10",
          },
          {
            key: "11",
            label: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
          },
        ],
      },
      {
        key: "grp",
        label: "Group",
        type: "group",
        children: [
          {
            key: "13",
            label: "Option 13",
          },
          {
            key: "14",
            label: "Option 14",
          },
        ],
      },
    ],
  },
  render: (args) => <Menu {...args} />,
};
