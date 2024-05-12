// Mentions Props

export const api = {
  allowClear: {
    control: {
      type: "boolean | { clearIcon?: ReactNode }",
    },
    description: "Show clear button",
    default: "false",
  },
  autoFocus: {
    control: {
      type: "boolean",
    },
    description: "Auto get focus when component mounted",
    default: "false",
  },
  autoSize: {
    control: {
      type: "boolean | object",
    },
    description:
      "Textarea height autosize feature, can be set to true | false or an object { minRows: 2, maxRows: 6 }",
    default: "false",
  },
  defaultValue: {
    control: {
      type: "string",
    },
    description: "Default value",
    default: "-",
  },
  filterOption: {
    control: {
      type: "false | (input: string, option: OptionProps) => boolean",
    },
    description: "Customize filter option logic",
    default: "-",
  },
  getPopupContainer: {
    control: {
      type: "() => HTMLElement",
    },
    description: "Set the mount HTML node for suggestions",
    default: "-",
  },
  notFoundContent: {
    control: {
      type: "ReactNode",
    },
    description: "Set mentions content when not match",
    default: "Not Found",
  },
  placement: {
    control: {
      type: "top | bottom",
    },
    description: "Set popup placement",
    default: "bottom",
  },
  prefix: {
    control: {
      type: "string | string[]",
    },
    description: "Set trigger prefix keyword",
    default: "@",
  },
  split: {
    control: {
      type: "string",
    },
    description: "Set split string before and after selected mention",
    default: " ",
  },
  status: {
    control: {
      type: "'error' | 'warning' | 'success' | 'validating'",
    },
    description: "Set validation status",
    default: "-",
  },
  validateSearch: {
    control: {
      type: "(text: string, props: MentionsProps) => void",
    },
    description: "Customize trigger search logic",
    default: "-",
  },
  value: {
    control: {
      type: "string",
    },
    description: "Set value of mentions",
    default: "-",
  },
  variant: {
    control: {
      type: "outlined | borderless | filled",
    },
    description: "Variants of Input",
    default: "outlined",
  },
  onBlur: {
    control: {
      type: "() => void",
    },
    description: "Trigger when mentions lose focus",
    default: "-",
  },
  onChange: {
    control: {
      type: "(text: string) => void",
    },
    description: "Trigger when value changed",
    default: "-",
  },
  onFocus: {
    control: {
      type: "() => void",
    },
    description: "Trigger when mentions get focus",
    default: "-",
  },
  onResize: {
    control: {
      type: "function({ width, height })",
    },
    description: "The callback function that is triggered when textarea resize",
    default: "-",
  },
  onSearch: {
    control: {
      type: "(text: string, prefix: string) => void",
    },
    description: "Trigger when prefix hit",
    default: "-",
  },
  onSelect: {
    control: {
      type: "(option: OptionProps, prefix: string) => void",
    },
    description: "Trigger when user select the option",
    default: "-",
  },
  options: {
    control: {
      type: "Options",
    },
    description: "Option Configuration",
    default: "[]",
  },
};
