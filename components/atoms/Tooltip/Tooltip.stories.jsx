import React from 'react';
import {Tooltip} from './Tooltip';
import { api } from "./api.js";

export default {
    title: "Atoms/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Tooltip {...args}>Tooltip</Tooltip>
    ),
  };
