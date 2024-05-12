// Layout Props

export const api = {
  className: {
    control: {
      type: "string",
    },
    description: "Container className",
    default: "-",
  },
  hasSider: {
    control: {
      type: "boolean",
    },
    description:
      "Whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering",
    default: "-",
  },
  style: {
    control: {
      type: "CSSProperties",
    },
    description: "To customize the styles",
    default: "-",
  },
};
