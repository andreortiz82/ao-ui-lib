import React from 'react';
import {Upload} from './Upload';
import { api } from "./api.js";

export default {
    title: "Atoms/Upload",
    component: Upload,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Upload {...args}>Upload</Upload>
    ),
  };
