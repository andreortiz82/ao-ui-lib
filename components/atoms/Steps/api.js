// Steps Props

export const api = {
  className: {
    control: {
      type: "string",
    },
    description: "Additional class to Steps",
    default: "-",
  },
  current: {
    control: {
      type: "number",
    },
    description:
      "To set the current step, counting from 0. You can overwrite this state by using status of Step",
    default: "0",
  },
  direction: {
    control: {
      type: "string",
    },
    description:
      "To specify the direction of the step bar, horizontal or vertical",
    default: "horizontal",
  },
  initial: {
    control: {
      type: "number",
    },
    description: "Set the initial step, counting from 0",
    default: "0",
  },
  labelPlacement: {
    control: {
      type: "string",
    },
    description:
      "Place title and description with horizontal or vertical direction",
    default: "horizontal",
  },
  percent: {
    control: {
      type: "number",
    },
    description:
      "Progress circle percentage of current step in process status (only works on basic Steps)",
    default: "-",
  },
  progressDot: {
    control: {
      type: "boolean | (iconDot, {index, status, title, description}) => ReactNode",
    },
    description:
      "Steps with progress dot style, customize the progress dot by setting it to a function. labelPlacement will be vertical",
    default: "false",
  },
  responsive: {
    control: {
      type: "boolean",
    },
    description:
      "Change to vertical direction when screen width smaller than 532px",
    default: "true",
  },
  size: {
    control: {
      type: "string",
    },
    description:
      "To specify the size of the step bar, default and small are currently supported",
    default: "default",
  },
  status: {
    control: {
      type: "string",
    },
    description:
      "To specify the status of current step, can be set to one of the following values: wait process finish error",
    default: "process",
  },
  type: {
    control: {
      type: "string",
    },
    description:
      "Type of steps, can be set to one of the following values: default navigation inline",
    default: "default",
  },
  onChange: {
    control: {
      type: "(current) => void",
    },
    description: "Trigger when Step is changed",
    default: "-",
  },
  items: {
    control: {
      type: "StepItem",
    },
    description: "StepItem content",
    default: "[]",
  },
};
