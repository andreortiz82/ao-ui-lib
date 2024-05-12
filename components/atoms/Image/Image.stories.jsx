import React from 'react';
import {Image} from './Image';
import { api } from "./api.js";

export default {
    title: "Atoms/Image",
    component: Image,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Image {...args}>Image</Image>
    ),
  };
