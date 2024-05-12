// Tour Props

export const api = {
  arrow: {
    control: {
      type: "boolean|{ pointAtCenter: boolean}",
    },
    description:
      "Whether to show the arrow, including the configuration whether to point to the center of the element",
    default: "true",
  },
  closeIcon: {
    control: {
      type: "React.ReactNode",
    },
    description: "Customize close icon",
    default: "true",
  },
  disabledInteraction: {
    control: {
      type: "boolean",
    },
    description: "Disable interaction on highlighted area.",
    default: "false",
  },
  placement: {
    control: {
      type: "center left leftTop leftBottom right rightTop rightBottom top topLeft topRight bottom bottomLeft bottomRight",
    },
    description: "Position of the guide card relative to the target element",
    default: "bottom",
  },
  onClose: {
    control: {
      type: "Function",
    },
    description: "Callback function on shutdown",
    default: "-",
  },
  mask: {
    control: {
      type: "boolean | { style?: React.CSSProperties; color?: string; }",
    },
    description:
      "Whether to enable masking, change mask style and fill color by pass custom props",
    default: "true",
  },
  type: {
    control: {
      type: "default primary",
    },
    description: "Type, affects the background color and text color",
    default: "default",
  },
  open: {
    control: {
      type: "boolean",
    },
    description: "Open tour",
    default: "-",
  },
  onChange: {
    control: {
      type: "(current: number) => void",
    },
    description: "Callback when the step changes. Current is the previous step",
    default: "-",
  },
  current: {
    control: {
      type: "number",
    },
    description: "What is the current step",
    default: "-",
  },
  scrollIntoViewOptions: {
    control: {
      type: "boolean | ScrollIntoViewOptions",
    },
    description: "support pass custom scrollIntoView options",
    default: "true",
  },
  indicatorsRender: {
    control: {
      type: "(current: number, total: number) => ReactNode",
    },
    description: "custom indicator",
    default: "-",
  },
  zIndex: {
    control: {
      type: "number",
    },
    description: "Tour's zIndex",
    default: "1001",
  },
  getPopupContainer: {
    control: {
      type: "(node: HTMLElement) => HTMLElement",
    },
    description: "Set the rendering node of Tour floating layer",
    default: "body",
  },
};
