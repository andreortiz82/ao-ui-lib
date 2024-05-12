import React from 'react';
import {Space} from './Space';
import { api } from "./api.js";

export default {
    title: "Atoms/Space",
    component: Space,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Space {...args}>Space</Space>
    ),
  };
