// Notification Props

export const api = {
  btn: {
    control: {
      type: "ReactNode",
    },
    description: "Customized close button",
    default: "-",
  },
  className: {
    control: {
      type: "string",
    },
    description: "Customized CSS class",
    default: "-",
  },
  closeIcon: {
    control: {
      type: "ReactNode",
    },
    description: "Custom close icon",
    default: "true",
  },
  description: {
    control: {
      type: "ReactNode",
    },
    description: "The content of notification box (required)",
    default: "-",
  },
  duration: {
    control: {
      type: "number",
    },
    description:
      "Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically",
    default: "4.5",
  },
  icon: {
    control: {
      type: "ReactNode",
    },
    description: "Customized icon",
    default: "-",
  },
  key: {
    control: {
      type: "string",
    },
    description: "The unique identifier of the Notification",
    default: "-",
  },
  message: {
    control: {
      type: "ReactNode",
    },
    description: "The title of notification box (required)",
    default: "-",
  },
  placement: {
    control: {
      type: "string",
    },
    description:
      "Position of Notification, can be one of top topLeft topRight bottom bottomLeft bottomRight",
    default: "topRight",
  },
  style: {
    control: {
      type: "CSSProperties",
    },
    description: "Customized inline style",
    default: "-",
  },
  role: {
    control: {
      type: "alert | status",
    },
    description:
      "The semantics of notification content recognized by screen readers. The default value is alert. When set as the default value, the screen reader will promptly interrupt any ongoing content reading and prioritize the notification content for immediate attention.",
    default: "alert",
  },
  onClick: {
    control: {
      type: "function",
    },
    description:
      "Specify a function that will be called when the notification is clicked",
    default: "-",
  },
  onClose: {
    control: {
      type: "function",
    },
    description: "Trigger when notification closed",
    default: "-",
  },
  props: {
    control: {
      type: "Object",
    },
    description:
      "An object that can contain data-*, aria-*, or role props, to be put on the notification div. This currently only allows data-testid instead of data-* in TypeScript. See https://github.com/microsoft/TypeScript/issues/28960.",
    default: "-",
  },
};
