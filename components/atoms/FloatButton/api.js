// FloatButton Props

export const api = {
  icon: {
    control: {
      type: "ReactNode",
    },
    description: "Set the icon component of button",
    default: "-",
  },
  description: {
    control: {
      type: "ReactNode",
    },
    description: "Text and other",
    default: "-",
  },
  tooltip: {
    control: {
      type: "ReactNode | () => ReactNode",
    },
    description: "The text shown in the tooltip",
    default: "",
  },
  type: {
    control: {
      type: "default | primary",
    },
    description: "Setting button type",
    default: "default",
  },
  shape: {
    control: {
      type: "circle | square",
    },
    description: "Setting button shape",
    default: "circle",
  },
  onClick: {
    control: {
      type: "(event) => void",
    },
    description: "Set the handler to handle click event",
    default: "-",
  },
  href: {
    control: {
      type: "string",
    },
    description: "The target of hyperlink",
    default: "-",
  },
  target: {
    control: {
      type: "string",
    },
    description: "Specifies where to display the linked URL",
    default: "-",
  },
  badge: {
    control: {
      type: "BadgeProps",
    },
    description:
      "Attach Badge to FloatButton. status and other props related are not supported.",
    default: "-",
  },
};
