import React from 'react';
import {Table} from './Table';
import { api } from "./api.js";

export default {
    title: "Atoms/Table",
    component: Table,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Table {...args}>Table</Table>
    ),
  };
