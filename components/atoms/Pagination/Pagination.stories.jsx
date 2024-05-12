import React from 'react';
import {Pagination} from './Pagination';
import { api } from "./api.js";

export default {
    title: "Atoms/Pagination",
    component: Pagination,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Pagination {...args}>Pagination</Pagination>
    ),
  };
