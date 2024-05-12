// Checkbox Props

export const api = {
  autoFocus: {
    control: {
      type: "boolean",
    },
    description: "If get focus when component mounted",
    default: "false",
  },
  checked: {
    control: {
      type: "boolean",
    },
    description: "Specifies whether the checkbox is selected",
    default: "false",
  },
  defaultChecked: {
    control: {
      type: "boolean",
    },
    description:
      "Specifies the initial state: whether or not the checkbox is selected",
    default: "false",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "If disable checkbox",
    default: "false",
  },
  indeterminate: {
    control: {
      type: "boolean",
    },
    description: "The indeterminate checked state of checkbox",
    default: "false",
  },
  onChange: {
    control: {
      type: "(e: CheckboxChangeEvent) => void",
    },
    description:
      "The callback function that is triggered when the state changes",
    default: "-",
  },
};
