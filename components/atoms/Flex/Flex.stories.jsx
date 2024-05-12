import React from "react";
import { Flex } from "./Flex";
import { api } from "./api.js";

export default {
  title: "Atoms/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => (
    <Flex {...args}>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
      ></div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "green" }}
      ></div>
    </Flex>
  ),
};
