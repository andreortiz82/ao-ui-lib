import React from "react";
import { JoyThemeWrapper } from "./index";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

export default {
  title: "Themes/Joy UI",
  component: JoyThemeWrapper,
  tags: ["autodocs"],
};

export const Example = {
  render: (args) => (
    <JoyThemeWrapper>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Button variant="solid">Solid</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="plain">Plain</Button>
      </Box>
    </JoyThemeWrapper>
  ),
};
