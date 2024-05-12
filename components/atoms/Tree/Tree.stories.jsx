import React from 'react';
import {Tree} from './Tree';
import { api } from "./api.js";

export default {
    title: "Atoms/Tree",
    component: Tree,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Tree {...args}>Tree</Tree>
    ),
  };
