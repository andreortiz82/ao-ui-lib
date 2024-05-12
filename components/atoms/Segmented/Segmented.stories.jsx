import React from 'react';
import {Segmented} from './Segmented';
import { api } from "./api.js";

export default {
    title: "Atoms/Segmented",
    component: Segmented,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Segmented {...args}>Segmented</Segmented>
    ),
  };
