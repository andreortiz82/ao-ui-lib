import React from 'react';
import {Popover} from './Popover';
import { api } from "./api.js";

export default {
    title: "Atoms/Popover",
    component: Popover,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Popover {...args}>Popover</Popover>
    ),
  };
