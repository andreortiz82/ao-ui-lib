import React from 'react';
import {Layout} from './Layout';
import { api } from "./api.js";

export default {
    title: "Atoms/Layout",
    component: Layout,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Layout {...args}>Layout</Layout>
    ),
  };
