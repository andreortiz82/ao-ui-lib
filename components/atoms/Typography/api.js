// Typography Props

export const api = {
  code: {
    control: {
      type: "boolean",
    },
    description: "Code style",
    default: "false",
  },
  copyable: {
    control: {
      type: "boolean | copyable",
    },
    description: "Whether to be copyable, customize it via setting an object",
    default: "false",
  },
  delete: {
    control: {
      type: "boolean",
    },
    description: "Deleted line style",
    default: "false",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Disabled content",
    default: "false",
  },
  editable: {
    control: {
      type: "boolean | editable",
    },
    description: "If editable. Can control edit state when is object",
    default: "false",
  },
  ellipsis: {
    control: {
      type: "boolean | Omit<ellipsis, 'expandable' | 'rows' | 'onExpand'>",
    },
    description:
      "Display ellipsis when text overflows, can't configure expandable\u3001rows and onExpand by using object. Diff with Typography.Paragraph, Text do not have 100% width style which means it will fix width on the first ellipsis. If you want to have responsive ellipsis, please set width manually",
    default: "false",
  },
  keyboard: {
    control: {
      type: "boolean",
    },
    description: "Keyboard style",
    default: "false",
  },
  mark: {
    control: {
      type: "boolean",
    },
    description: "Marked style",
    default: "false",
  },
  onClick: {
    control: {
      type: "(event) => void",
    },
    description: "Set the handler to handle click event",
    default: "-",
  },
  strong: {
    control: {
      type: "boolean",
    },
    description: "Bold style",
    default: "false",
  },
  italic: {
    control: {
      type: "boolean",
    },
    description: "Italic style",
    default: "false",
  },
  type: {
    control: {
      type: "secondary | success | warning | danger",
    },
    description: "Content type",
    default: "-",
  },
  underline: {
    control: {
      type: "boolean",
    },
    description: "Underlined style",
    default: "false",
  },
};
