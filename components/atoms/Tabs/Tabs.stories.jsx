import React from 'react';
import {Tabs} from './Tabs';
import { api } from "./api.js";

export default {
    title: "Atoms/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Tabs {...args}>Tabs</Tabs>
    ),
  };
