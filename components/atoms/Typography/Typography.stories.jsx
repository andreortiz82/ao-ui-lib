import React from 'react';
import {Typography} from './Typography';
import { api } from "./api.js";

export default {
    title: "Atoms/Typography",
    component: Typography,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Typography {...args}>Typography</Typography>
    ),
  };
