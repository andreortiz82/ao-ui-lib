import React from 'react';
import {TreeSelect} from './TreeSelect';
import { api } from "./api.js";

export default {
    title: "Atoms/TreeSelect",
    component: TreeSelect,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <TreeSelect {...args}>TreeSelect</TreeSelect>
    ),
  };
