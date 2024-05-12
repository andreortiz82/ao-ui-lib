import React from 'react';
import {List} from './List';
import { api } from "./api.js";

export default {
    title: "Atoms/List",
    component: List,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <List {...args}>List</List>
    ),
  };
