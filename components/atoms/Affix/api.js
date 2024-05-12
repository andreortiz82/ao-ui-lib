// Affix Props

export const api = {
  offsetBottom: {
    control: {
      type: "number",
    },
    description: "Offset from the bottom of the viewport (in pixels)",
    default: "-",
  },
  offsetTop: {
    control: {
      type: "number",
    },
    description: "Offset from the top of the viewport (in pixels)",
    default: "0",
  },
  target: {
    control: {
      type: "() => HTMLElement",
    },
    description: "Specifies the scrollable area DOM node",
    default: "() => window",
  },
  onChange: {
    control: {
      type: "(affixed?: boolean) => void",
    },
    description: "Callback for when Affix state is changed",
    default: "-",
  },
};
