import React from 'react';
import {Steps} from './Steps';
import { api } from "./api.js";

export default {
    title: "Atoms/Steps",
    component: Steps,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Steps {...args}>Steps</Steps>
    ),
  };
