import React from 'react';
import {Select} from './Select';
import { api } from "./api.js";

export default {
    title: "Atoms/Select",
    component: Select,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Select {...args}>Select</Select>
    ),
  };
