import React from 'react';
import {Tour} from './Tour';
import { api } from "./api.js";

export default {
    title: "Atoms/Tour",
    component: Tour,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Tour {...args}>Tour</Tour>
    ),
  };
