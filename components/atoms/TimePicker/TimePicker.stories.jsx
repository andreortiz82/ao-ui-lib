import React from 'react';
import {TimePicker} from './TimePicker';
import { api } from "./api.js";

export default {
    title: "Atoms/TimePicker",
    component: TimePicker,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <TimePicker {...args}>TimePicker</TimePicker>
    ),
  };
