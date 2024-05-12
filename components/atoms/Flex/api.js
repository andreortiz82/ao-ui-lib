// Flex Props

export const api = {
  vertical: {
    control: {
      type: "boolean",
    },
    description:
      "Is direction of the flex vertical, use flex-direction: column",
    default: "false",
  },
  wrap: {
    control: {
      type: "flex-wrap | boolean",
    },
    description:
      "Set whether the element is displayed in a single line or in multiple lines",
    default: "nowrap",
  },
  justify: {
    control: {
      type: "justify-content",
    },
    description:
      "Sets the alignment of elements in the direction of the main axis",
    default: "normal",
  },
  align: {
    control: {
      type: "align-items",
    },
    description:
      "Sets the alignment of elements in the direction of the cross axis",
    default: "normal",
  },
  flex: {
    control: {
      type: "flex",
    },
    description: "flex CSS shorthand properties",
    default: "normal",
  },
  gap: {
    control: {
      type: "small | middle | large | string | number",
    },
    description: "Sets the gap between grids",
    default: "-",
  },
  component: {
    control: {
      type: "React.ComponentType",
    },
    description: "custom element type",
    default: "div",
  },
};
