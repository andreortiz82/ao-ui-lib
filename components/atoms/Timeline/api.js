// Timeline Props

export const api = {
  mode: {
    control: {
      type: "left | alternate | right",
    },
    description:
      "By sending alternate the timeline will distribute the nodes to the left and right",
    default: "-",
  },
  pending: {
    control: {
      type: "ReactNode",
    },
    description: "Set the last ghost node's existence or its content",
    default: "false",
  },
  pendingDot: {
    control: {
      type: "ReactNode",
    },
    description: "Set the dot of the last ghost node when pending is true",
    default: "<LoadingOutlined />",
  },
  reverse: {
    control: {
      type: "boolean",
    },
    description: "Whether reverse nodes or not",
    default: "false",
  },
  items: {
    control: {
      type: "Items[]",
    },
    description: "Each node of timeline",
    default: "5.2.0",
  },
};
