import React from 'react';
import {Mentions} from './Mentions';
import { api } from "./api.js";

export default {
    title: "Atoms/Mentions",
    component: Mentions,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Mentions {...args}>Mentions</Mentions>
    ),
  };
