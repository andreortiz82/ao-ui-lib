// Image Props

export const api = {
  alt: {
    control: {
      type: "string",
    },
    description: "Image description",
    default: "-",
  },
  fallback: {
    control: {
      type: "string",
    },
    description: "Load failure fault-tolerant src",
    default: "-",
  },
  height: {
    control: {
      type: "string | number",
    },
    description: "Image height",
    default: "-",
  },
  placeholder: {
    control: {
      type: "ReactNode",
    },
    description: "Load placeholder, use default placeholder when set true",
    default: "-",
  },
  preview: {
    control: {
      type: "boolean | PreviewType",
    },
    description: "preview config, disabled when false",
    default: "true",
  },
  src: {
    control: {
      type: "string",
    },
    description: "Image path",
    default: "-",
  },
  width: {
    control: {
      type: "string | number",
    },
    description: "Image width",
    default: "-",
  },
  onError: {
    control: {
      type: "(event: Event) => void",
    },
    description: "Load failed callback",
    default: "-",
  },
};
