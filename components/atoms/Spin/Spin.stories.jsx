import React from 'react';
import {Spin} from './Spin';
import { api } from "./api.js";

export default {
    title: "Atoms/Spin",
    component: Spin,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Spin {...args}>Spin</Spin>
    ),
  };
