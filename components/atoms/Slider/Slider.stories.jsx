import React from 'react';
import {Slider} from './Slider';
import { api } from "./api.js";

export default {
    title: "Atoms/Slider",
    component: Slider,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Slider {...args}>Slider</Slider>
    ),
  };
