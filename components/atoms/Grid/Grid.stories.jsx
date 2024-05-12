import React from "react";
import { Row, Col } from "./Grid";
import { api } from "./api.js";

export default {
  title: "Atoms/Grid",
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => (
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
  ),
};
