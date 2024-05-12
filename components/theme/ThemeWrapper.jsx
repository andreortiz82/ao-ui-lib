import React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { palette } from "./palette";

const theme = extendTheme({
  cssVarPrefix: "ao",
  colorSchemes: {
    light: { palette },
    dark: { palette },
  },
  spacing: {},
  typography: {},
  variants: {},
});

function ThemeWrapper({ children }) {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
}

export default ThemeWrapper;
