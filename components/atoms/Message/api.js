// Message Props

export const api = {
  content: {
    control: {
      type: "ReactNode | config",
    },
    description: "The content of the message",
    default: "-",
  },
  duration: {
    control: {
      type: "number",
    },
    description: "Time(seconds) before auto-dismiss, don't dismiss if set to 0",
    default: "1.5",
  },
  onClose: {
    control: {
      type: "function",
    },
    description:
      "Specify a function that will be called when the message is closed",
    default: "-",
  },
};
