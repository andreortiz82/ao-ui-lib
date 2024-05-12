import React from 'react';
import {InputNumber} from './InputNumber';
import { api } from "./api.js";

export default {
    title: "Atoms/InputNumber",
    component: InputNumber,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <InputNumber {...args}>InputNumber</InputNumber>
    ),
  };
