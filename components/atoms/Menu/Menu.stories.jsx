import React from 'react';
import {Menu} from './Menu';
import { api } from "./api.js";

export default {
    title: "Atoms/Menu",
    component: Menu,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Menu {...args}>Menu</Menu>
    ),
  };
