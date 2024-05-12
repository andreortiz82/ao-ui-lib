import React from "react";
import { Carousel as AntCarousel } from "antd";

export const Carousel = (props) => {
  return <AntCarousel {...props}>{props.children}</AntCarousel>;
};
