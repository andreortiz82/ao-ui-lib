import React from 'react';
import {Statistic} from './Statistic';
import { api } from "./api.js";

export default {
    title: "Atoms/Statistic",
    component: Statistic,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Statistic {...args}>Statistic</Statistic>
    ),
  };
