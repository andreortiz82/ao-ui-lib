// Switch Props

export const api = {
  autoFocus: {
    control: {
      type: "boolean",
    },
    description: "Whether get focus when component mounted",
    default: "false",
  },
  checked: {
    control: {
      type: "boolean",
    },
    description: "Determine whether the Switch is checked",
    default: "false",
  },
  checkedChildren: {
    control: {
      type: "ReactNode",
    },
    description: "The content to be shown when the state is checked",
    default: "-",
  },
  className: {
    control: {
      type: "string",
    },
    description: "The additional class to Switch",
    default: "-",
  },
  defaultChecked: {
    control: {
      type: "boolean",
    },
    description: "Whether to set the initial state",
    default: "false",
  },
  defaultValue: {
    control: {
      type: "boolean",
    },
    description: "Alias for defaultChecked",
    default: "-",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Disable switch",
    default: "false",
  },
  loading: {
    control: {
      type: "boolean",
    },
    description: "Loading state of switch",
    default: "false",
  },
  size: {
    control: {
      type: "string",
    },
    description: "The size of the Switch, options: default small",
    default: "default",
  },
  unCheckedChildren: {
    control: {
      type: "ReactNode",
    },
    description: "The content to be shown when the state is unchecked",
    default: "-",
  },
  value: {
    control: {
      type: "boolean",
    },
    description: "Alias for checked",
    default: "-",
  },
  onChange: {
    control: {
      type: "function(checked: boolean, event: Event)",
    },
    description: "Trigger when the checked state is changing",
    default: "-",
  },
  onClick: {
    control: {
      type: "function(checked: boolean, event: Event)",
    },
    description: "Trigger when clicked",
    default: "-",
  },
};
