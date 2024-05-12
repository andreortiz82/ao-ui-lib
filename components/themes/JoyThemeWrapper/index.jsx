import React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

const palette = {
  text: {
    primary: "#ff0099",
    secondary: "#ff0099",
  },
  primary: {
    solidBg: "var(--color-primary)",
    solidBorder: "var(--color-primary)",
    solidHoverBg: "var(--color-primary)",
    solidHoverBorder: "var(--color-primary)",
    solidActiveBg: "var(--color-primary)",
    solidActiveBorder: "var(--color-primary)",
    solidDisabledBg: "var(--component-disabled)",
    solidDisabledBorder: "var(--component-disabled)",
  },
  neutral: {
    solidBg: "#6c757d",
    solidBorder: "#6c757d",
    solidHoverBg: "#5c636a",
    solidHoverBorder: "#565e64",
    solidActiveBg: "#565e64",
    solidActiveBorder: "#51585e",
    solidDisabledBg: "#6c757d",
    solidDisabledBorder: "#6c757d",
    // btn-light
    softColor: "#000",
    softBg: "#f8f9fa",
    softBorder: "#f8f9fa",
    softHoverBg: "#f9fafb",
    softHoverBorder: "#f9fafb",
    softActiveBg: "#f9fafb",
    softActiveBorder: "#f9fafb",
    softDisabledBg: "#f8f9fa",
    softDisabledBorder: "#f8f9fa",
  },
  success: {
    solidBg: "#198754",
    solidBorder: "#198754",
    solidHoverBg: "#157347",
    solidHoverBorder: "#146c43",
    solidActiveBg: "#146c43",
    solidActiveBorder: "#13653f",
    solidDisabledBg: "#198754",
    solidDisabledBorder: "#198754",
  },
  danger: {
    solidBg: "#dc3545",
    solidBorder: "#dc3545",
    solidHoverBg: "#bb2d3b",
    solidHoverBorder: "#b02a37",
    solidActiveBg: "#b02a37",
    solidActiveBorder: "#a52834",
    solidDisabledBg: "#dc3545",
    solidDisabledBorder: "#dc3545",
  },
  warning: {
    solidColor: "#000",
    solidBg: "#ffc107",
    solidBorder: "#ffc107",
    solidHoverBg: "#ffca2c",
    solidHoverBorder: "#ffc720",
    solidActiveBg: "#ffcd39",
    solidActiveBorder: "#ffc720",
    solidDisabledBg: "#ffc107",
    solidDisabledBorder: "#ffc107",
  },
  info: {
    solidColor: "#000",
    solidBg: "#0dcaf0",
    solidBorder: "#0dcaf0",
    solidHoverBg: "#31d2f2",
    solidHoverBorder: "#25cff2",
    solidActiveBg: "#3dd5f3",
    solidActiveBorder: "#25cff2",
    solidDisabledBg: "#0dcaf0",
    solidDisabledBorder: "#0dcaf0",
  },
};

const theme = extendTheme({
  cssVarPrefix: "ao",
  colorSchemes: {
    light: { palette },
    dark: { palette },
  },
  styleOverrides: {
    root: {
      borderRadius: "100px",
    },
  },
});

export const JoyThemeWrapper = ({ children }) => {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
};
