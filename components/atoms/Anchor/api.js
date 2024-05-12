// Anchor Props

export const api = {
  affix: {
    control: {
      type: "boolean",
    },
    description: "Fixed mode of Anchor",
    default: "true",
  },
  bounds: {
    control: {
      type: "number",
    },
    description: "Bounding distance of anchor area",
    default: "5",
  },
  getContainer: {
    control: {
      type: "() => HTMLElement",
    },
    description: "Scrolling container",
    default: "() => window",
  },
  getCurrentAnchor: {
    control: {
      type: "(activeLink: string) => string",
    },
    description: "Customize the anchor highlight",
    default: "-",
  },
  offsetTop: {
    control: {
      type: "number",
    },
    description:
      "Pixels to offset from top when calculating position of scroll",
    default: "0",
  },
  showInkInFixed: {
    control: {
      type: "boolean",
    },
    description: "Whether show ink-square when affix={false}",
    default: "false",
  },
  targetOffset: {
    control: {
      type: "number",
    },
    description: "Anchor scroll offset, default as offsetTop, example",
    default: "-",
  },
  onChange: {
    control: {
      type: "(currentActiveLink: string) => void",
    },
    description: "Listening for anchor link change",
    default: "",
  },
  onClick: {
    control: {
      type: "(e: MouseEvent, link: object) => void",
    },
    description: "Set the handler to handle click event",
    default: "-",
  },
  items: {
    control: {
      type: "{ key, href, title, target, children }[] see",
    },
    description:
      "Data configuration option content, support nesting through children",
    default: "-",
  },
  direction: {
    control: {
      type: "vertical | horizontal",
    },
    description: "Set Anchor direction",
    default: "vertical",
  },
  replace: {
    control: {
      type: "boolean",
    },
    description: "Replace items' href in browser history instead of pushing it",
    default: "false",
  },
};
