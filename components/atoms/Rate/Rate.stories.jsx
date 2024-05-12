import React from 'react';
import {Rate} from './Rate';
import { api } from "./api.js";

export default {
    title: "Atoms/Rate",
    component: Rate,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Rate {...args}>Rate</Rate>
    ),
  };
