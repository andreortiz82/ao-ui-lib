import React from "react";
import { ConfigProvider } from "antd";

const theme = {
  token: {},
  components: {
    Button: {},
  },
};

function ThemeWrapper({ children }) {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}

export default ThemeWrapper;
