// Input Props

export const api = {
  addonAfter: {
    control: {
      type: "ReactNode",
    },
    description:
      "The label text displayed after (on the right side of) the input field",
    default: "-",
  },
  addonBefore: {
    control: {
      type: "ReactNode",
    },
    description:
      "The label text displayed before (on the left side of) the input field",
    default: "-",
  },
  allowClear: {
    control: {
      type: "boolean | { clearIcon: ReactNode }",
    },
    description: "If allow to remove input content with clear icon",
    default: "false",
  },
  classNames: {
    control: {
      type: "Record<SemanticDOM, string>",
    },
    description: "Semantic DOM class",
    default: "-",
  },
  count: {
    control: {
      type: "CountConfig",
    },
    description: "Character count config",
    default: "-",
  },
  defaultValue: {
    control: {
      type: "string",
    },
    description: "The initial input content",
    default: "-",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Whether the input is disabled",
    default: "false",
  },
  id: {
    control: {
      type: "string",
    },
    description: "The ID for input",
    default: "-",
  },
  maxLength: {
    control: {
      type: "number",
    },
    description: "The maximum number of characters in Input",
    default: "-",
  },
  prefix: {
    control: {
      type: "ReactNode",
    },
    description: "The prefix icon for the Input",
    default: "-",
  },
  showCount: {
    control: {
      type: "boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }",
    },
    description: "Whether to show character count",
    default: "false",
  },
  status: {
    control: {
      type: "'error' | 'warning'",
    },
    description: "Set validation status",
    default: "-",
  },
  styles: {
    control: {
      type: "Record<SemanticDOM, CSSProperties>",
    },
    description: "Semantic DOM style",
    default: "-",
  },
  size: {
    control: {
      type: "large | middle | small",
    },
    description:
      "The size of the input box. Note: in the context of a form, the middle size is used",
    default: "-",
  },
  suffix: {
    control: {
      type: "ReactNode",
    },
    description: "The suffix icon for the Input",
    default: "-",
  },
  type: {
    control: {
      type: "string",
    },
    description:
      'The type of input, see: MDN( use Input.TextArea instead of type="textarea")',
    default: "text",
  },
  value: {
    control: {
      type: "string",
    },
    description: "The input content value",
    default: "-",
  },
  variant: {
    control: {
      type: "outlined | borderless | filled",
    },
    description: "Variants of Input",
    default: "outlined",
  },
  onChange: {
    control: {
      type: "function(e)",
    },
    description: "Callback when user input",
    default: "-",
  },
  onPressEnter: {
    control: {
      type: "function(e)",
    },
    description:
      "The callback function that is triggered when Enter key is pressed",
    default: "-",
  },
};
