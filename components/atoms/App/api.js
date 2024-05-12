// App Props

export const api = {
  component: {
    control: {
      type: "ComponentType",
    },
    description: "Config render element, if false will not create DOM node",
    default: "div",
  },
  message: {
    control: {
      type: "MessageConfig",
    },
    description: "Global config for Message",
    default: "-",
  },
  notification: {
    control: {
      type: "NotificationConfig",
    },
    description: "Global config for Notification",
    default: "-",
  },
};
