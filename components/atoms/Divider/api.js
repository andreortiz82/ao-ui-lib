// Divider Props

export const api = {
  children: {
    control: {
      type: "ReactNode",
    },
    description: "The wrapped title",
    default: "-",
  },
  className: {
    control: {
      type: "string",
    },
    description: "The className of container",
    default: "-",
  },
  dashed: {
    control: {
      type: "boolean",
    },
    description: "Whether line is dashed",
    default: "false",
  },
  orientation: {
    control: {
      type: "left | right | center",
    },
    description: "The position of title inside divider",
    default: "center",
  },
  orientationMargin: {
    control: {
      type: "string | number",
    },
    description:
      "The margin-left/right between the title and its closest border, while the orientation must be left or right, If a numeric value of type string is provided without a unit, it is assumed to be in pixels (px) by default.",
    default: "-",
  },
  plain: {
    control: {
      type: "boolean",
    },
    description: "Divider text show as plain style",
    default: "true",
  },
  style: {
    control: {
      type: "CSSProperties",
    },
    description: "The style object of container",
    default: "-",
  },
  type: {
    control: {
      type: "horizontal | vertical",
    },
    description: "The direction type of divider",
    default: "horizontal",
  },
};
