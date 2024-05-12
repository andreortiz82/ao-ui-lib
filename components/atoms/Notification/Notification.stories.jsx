import React from 'react';
import {Notification} from './Notification';
import { api } from "./api.js";

export default {
    title: "Atoms/Notification",
    component: Notification,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Notification {...args}>Notification</Notification>
    ),
  };
