// Progress Props

export const api = {
  format: {
    control: {
      type: "function(percent, successPercent)",
    },
    description: "The template function of the content",
    default: "(percent) => percent + %",
  },
  percent: {
    control: {
      type: "number",
    },
    description: "To set the completion percentage",
    default: "0",
  },
  showInfo: {
    control: {
      type: "boolean",
    },
    description: "Whether to display the progress value and the status icon",
    default: "true",
  },
  status: {
    control: {
      type: "string",
    },
    description:
      "To set the status of the Progress, options: success exception normal active(line only)",
    default: "-",
  },
  strokeColor: {
    control: {
      type: "string",
    },
    description: "The color of progress bar",
    default: "-",
  },
  strokeLinecap: {
    control: {
      type: "round | butt | square, see stroke-linecap",
    },
    description: "To set the style of the progress linecap",
    default: "round",
  },
  success: {
    control: {
      type: "{ percent: number, strokeColor: string }",
    },
    description: "Configs of successfully progress bar",
    default: "-",
  },
  trailColor: {
    control: {
      type: "string",
    },
    description: "The color of unfilled part",
    default: "-",
  },
  type: {
    control: {
      type: "string",
    },
    description: "To set the type, options: line circle dashboard",
    default: "line",
  },
  size: {
    control: {
      type: 'number | [number | string, number] | "small" | "default"',
    },
    description: "Progress size",
    default: '"default"',
  },
};
