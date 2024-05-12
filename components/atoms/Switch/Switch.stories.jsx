import React from 'react';
import {Switch} from './Switch';
import { api } from "./api.js";

export default {
    title: "Atoms/Switch",
    component: Switch,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Switch {...args}>Switch</Switch>
    ),
  };
