import { fn } from "@storybook/test";
import Input from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    ariaLabel: "Email",
    placeholder: "Enter your email",
  },
};
