// Carousel Props

export const api = {
  arrows: {
    control: {
      type: "boolean",
    },
    description: "Whether to show switch arrows",
    default: "false",
  },
  autoplay: {
    control: {
      type: "boolean",
    },
    description: "Whether to scroll automatically",
    default: "false",
  },
  autoplaySpeed: {
    control: {
      type: "number",
    },
    description: "Delay between each auto scroll (in milliseconds)",
    default: "3000",
  },
  dotPosition: {
    control: {
      type: "string",
    },
    description:
      "The position of the dots, which can be one of top bottom left right",
    default: "bottom",
  },
  dots: {
    control: {
      type: "boolean | { className?: string }",
    },
    description:
      "Whether to show the dots at the bottom of the gallery, object for dotsClass and any others",
    default: "true",
  },
  fade: {
    control: {
      type: "boolean",
    },
    description: "Whether to use fade transition",
    default: "false",
  },
  infinite: {
    control: {
      type: "boolean",
    },
    description: "Infinitely wrap around contents",
    default: "true",
  },
  speed: {
    control: {
      type: "number",
    },
    description: "Animation speed in milliseconds",
    default: "500",
  },
  easing: {
    control: {
      type: "string",
    },
    description: "Transition interpolation function name",
    default: "linear",
  },
  effect: {
    control: {
      type: "scrollx | fade",
    },
    description: "Transition effect",
    default: "scrollx",
  },
  afterChange: {
    control: {
      type: "(current: number) => void",
    },
    description: "Callback function called after the current index changes",
    default: "-",
  },
  beforeChange: {
    control: {
      type: "(current: number, next: number) => void",
    },
    description: "Callback function called before the current index changes",
    default: "-",
  },
  waitForAnimate: {
    control: {
      type: "boolean",
    },
    description: "Whether to wait for the animation when switching",
    default: "false",
  },
};
