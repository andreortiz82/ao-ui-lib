import React from "react";
import { Layout } from "./Layout";
import { Flex } from "../Flex/Flex";
import { api } from "./api.js";

export default {
  title: "Atoms/Layout",
  component: Layout,
  tags: ["autodocs"],
  argTypes: api,
};

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#000",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#444",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#222",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#000",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 8px)",
};

export const Example = {
  args: {},
  render: (args) => (
    <Flex gap={16} wrap {...args}>
      <Layout style={layoutStyle}>
        <Layout.Header style={headerStyle}>Layout.Header</Layout.Header>
        <Layout.Content style={contentStyle}>Layout.Content</Layout.Content>
        <Layout.Footer style={footerStyle}>Layout.Footer</Layout.Footer>
      </Layout>

      <Layout style={layoutStyle}>
        <Layout.Header style={headerStyle}>Layout.Header</Layout.Header>
        <Layout>
          <Layout.Sider width="25%" style={siderStyle}>
            Sider
          </Layout.Sider>
          <Layout.Content style={contentStyle}>Layout.Content</Layout.Content>
        </Layout>
        <Layout.Footer style={footerStyle}>Layout.Footer</Layout.Footer>
      </Layout>

      <Layout style={layoutStyle}>
        <Layout.Header style={headerStyle}>Layout.Header</Layout.Header>
        <Layout>
          <Layout.Content style={contentStyle}>Layout.Content</Layout.Content>
          <Layout.Sider width="25%" style={siderStyle}>
            Sider
          </Layout.Sider>
        </Layout>
        <Layout.Footer style={footerStyle}>Layout.Footer</Layout.Footer>
      </Layout>

      <Layout style={layoutStyle}>
        <Layout.Sider width="25%" style={siderStyle}>
          Sider
        </Layout.Sider>
        <Layout>
          <Layout.Header style={headerStyle}>Layout.Header</Layout.Header>
          <Layout.Content style={contentStyle}>Layout.Content</Layout.Content>
          <Layout.Footer style={footerStyle}>Layout.Footer</Layout.Footer>
        </Layout>
      </Layout>
    </Flex>
  ),
};
