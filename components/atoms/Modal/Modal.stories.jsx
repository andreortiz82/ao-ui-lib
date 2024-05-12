import React from 'react';
import {Modal} from './Modal';
import { api } from "./api.js";

export default {
    title: "Atoms/Modal",
    component: Modal,
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <Modal {...args}>Modal</Modal>
    ),
  };
