import React from 'react';
import {Checkbox} from './Checkbox';
import { api } from "./api.js";

export default {
    title: "Atoms/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Checkbox {...args}>Checkbox</Checkbox>
    ),
  };
