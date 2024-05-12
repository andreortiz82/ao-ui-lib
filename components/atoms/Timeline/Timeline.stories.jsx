import React from 'react';
import {Timeline} from './Timeline';
import { api } from "./api.js";

export default {
    title: "Atoms/Timeline",
    component: Timeline,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Timeline {...args}>Timeline</Timeline>
    ),
  };
