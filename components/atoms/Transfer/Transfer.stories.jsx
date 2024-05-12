import React from 'react';
import {Transfer} from './Transfer';
import { api } from "./api.js";

export default {
    title: "Atoms/Transfer",
    component: Transfer,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Transfer {...args}>Transfer</Transfer>
    ),
  };
