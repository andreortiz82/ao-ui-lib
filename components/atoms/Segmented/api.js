// Segmented Props

export const api = {
  block: {
    control: {
      type: "boolean",
    },
    description: "Option to fit width to its parent's width",
    default: "false",
  },
  defaultValue: {
    control: {
      type: "string | number",
    },
    description: "Default selected value",
    default: "",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Disable all segments",
    default: "false",
  },
  onChange: {
    control: {
      type: "function(value: string | number)",
    },
    description:
      "The callback function that is triggered when the state changes",
    default: "",
  },
  options: {
    control: {
      type: "string[] | number[] | Array<{ label: ReactNode value: string icon? ReactNode disabled?: boolean className?: string }>",
    },
    description: "Set children optional",
    default: "[]",
  },
  size: {
    control: {
      type: "large | middle | small",
    },
    description: "The size of the Segmented.",
    default: "middle",
  },
  value: {
    control: {
      type: "string | number",
    },
    description: "Currently selected value",
    default: "",
  },
};
