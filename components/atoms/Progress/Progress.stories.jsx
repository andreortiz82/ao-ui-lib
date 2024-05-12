import React from 'react';
import {Progress} from './Progress';
import { api } from "./api.js";

export default {
    title: "Atoms/Progress",
    component: Progress,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Progress {...args}>Progress</Progress>
    ),
  };
