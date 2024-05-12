import React from "react";
import { ConfigProvider } from "antd";

const theme = {
  token: {
    colorPrimary: "#000",
    borderRadius: 100,
    colorBgContainer: "#FFF",
  },

  components: {
    Button: {},
  },
};

export const AntThemeWrapper = ({ children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default AntThemeWrapper;
