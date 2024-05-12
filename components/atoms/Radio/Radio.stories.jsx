import React from 'react';
import {Radio} from './Radio';
import { api } from "./api.js";

export default {
    title: "Atoms/Radio",
    component: Radio,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Radio {...args}>Radio</Radio>
    ),
  };
