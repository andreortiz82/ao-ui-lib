import React from 'react';
import {Popconfirm} from './Popconfirm';
import { api } from "./api.js";

export default {
    title: "Atoms/Popconfirm",
    component: Popconfirm,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Popconfirm {...args}>Popconfirm</Popconfirm>
    ),
  };
