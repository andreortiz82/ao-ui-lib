import React from 'react';
import {Tag} from './Tag';
import { api } from "./api.js";

export default {
    title: "Atoms/Tag",
    component: Tag,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Tag {...args}>Tag</Tag>
    ),
  };
