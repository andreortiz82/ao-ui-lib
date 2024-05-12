import React from 'react';
import {Skeleton} from './Skeleton';
import { api } from "./api.js";

export default {
    title: "Atoms/Skeleton",
    component: Skeleton,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Skeleton {...args}>Skeleton</Skeleton>
    ),
  };
