import React from "react";
import Box from "./Box";

export default {
  title: "Atoms/Box",
  component: Box,
  tags: ["autodocs"],
};

export const Example = {
  args: {
    children: <div>Box content</div>,
    display: "flex",
    alignItems: "center",
    gap: 8,
    p: 8,
  },
};
