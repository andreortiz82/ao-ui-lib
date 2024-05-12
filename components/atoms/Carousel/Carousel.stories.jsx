import React from "react";
import { Carousel } from "./Carousel";
import { api } from "./api.js";

export default {
  title: "Atoms/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: api,
};

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#000",
};

export const Example = {
  render: (args) => (
    <Carousel>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  ),
};
