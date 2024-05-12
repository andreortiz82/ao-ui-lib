import React from 'react';
import {Result} from './Result';
import { api } from "./api.js";

export default {
    title: "Atoms/Result",
    component: Result,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Result {...args}>Result</Result>
    ),
  };
