import React from 'react';
import {Message} from './Message';
import { api } from "./api.js";

export default {
    title: "Atoms/Message",
    component: Message,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Message {...args}>Message</Message>
    ),
  };
