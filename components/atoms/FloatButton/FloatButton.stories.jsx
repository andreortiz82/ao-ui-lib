import React from 'react';
import {FloatButton} from './FloatButton';
import { api } from "./api.js";

export default {
    title: "Atoms/FloatButton",
    component: FloatButton,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <FloatButton {...args}>FloatButton</FloatButton>
    ),
  };
