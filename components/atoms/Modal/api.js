// Modal Props

export const api = {
  afterClose: {
    control: {
      type: "function",
    },
    description:
      "Specify a function that will be called when modal is closed completely",
    default: "-",
  },
  classNames: {
    control: {
      type: "header?: string; body?: string; footer?: string; mask?: string; wrapper?: string;",
    },
    description: "Config Modal build-in module's className",
    default: "-",
  },
  styles: {
    control: {
      type: "header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties;",
    },
    description: "Config Modal build-in module's style",
    default: "-",
  },
  cancelButtonProps: {
    control: {
      type: "ButtonProps",
    },
    description: "The cancel button props",
    default: "-",
  },
  cancelText: {
    control: {
      type: "ReactNode",
    },
    description: "Text of the Cancel button",
    default: "Cancel",
  },
  centered: {
    control: {
      type: "boolean",
    },
    description: "Centered Modal",
    default: "false",
  },
  closeIcon: {
    control: {
      type: "ReactNode",
    },
    description:
      "Custom close icon. 5.7.0: close button will be hidden when setting to null or false",
    default: "<CloseOutlined />",
  },
  confirmLoading: {
    control: {
      type: "boolean",
    },
    description: "Whether to apply loading visual effect for OK button or not",
    default: "false",
  },
  destroyOnClose: {
    control: {
      type: "boolean",
    },
    description: "Whether to unmount child components on onClose",
    default: "false",
  },
  focusTriggerAfterClose: {
    control: {
      type: "boolean",
    },
    description: "Whether need to focus trigger element after dialog is closed",
    default: "true",
  },
  footer: {
    control: {
      type: "(params:footerRenderParams)=> React.ReactNode | React.ReactNode",
    },
    description:
      "Footer content, set as footer={null} when you don't need default buttons",
    default: "(OK and Cancel buttons)",
  },
  forceRender: {
    control: {
      type: "boolean",
    },
    description: "Force render Modal",
    default: "false",
  },
  getContainer: {
    control: {
      type: "HTMLElement | () => HTMLElement | Selectors | false",
    },
    description: "The mounted node for Modal but still display at fullscreen",
    default: "document.body",
  },
  keyboard: {
    control: {
      type: "boolean",
    },
    description: "Whether support press esc to close",
    default: "true",
  },
  mask: {
    control: {
      type: "boolean",
    },
    description: "Whether show mask or not",
    default: "true",
  },
  maskClosable: {
    control: {
      type: "boolean",
    },
    description:
      "Whether to close the modal dialog when the mask (area outside the modal) is clicked",
    default: "true",
  },
  modalRender: {
    control: {
      type: "(node: ReactNode) => ReactNode",
    },
    description: "Custom modal content render",
    default: "-",
  },
  okButtonProps: {
    control: {
      type: "ButtonProps",
    },
    description: "The ok button props",
    default: "-",
  },
  okText: {
    control: {
      type: "ReactNode",
    },
    description: "Text of the OK button",
    default: "OK",
  },
  okType: {
    control: {
      type: "string",
    },
    description: "Button type of the OK button",
    default: "primary",
  },
  style: {
    control: {
      type: "CSSProperties",
    },
    description:
      "Style of floating layer, typically used at least for adjusting the position",
    default: "-",
  },
  title: {
    control: {
      type: "ReactNode",
    },
    description: "The modal dialog's title",
    default: "-",
  },
  open: {
    control: {
      type: "boolean",
    },
    description: "Whether the modal dialog is visible or not",
    default: "false",
  },
  width: {
    control: {
      type: "string | number",
    },
    description: "Width of the modal dialog",
    default: "520",
  },
  wrapClassName: {
    control: {
      type: "string",
    },
    description: "The class name of the container of the modal dialog",
    default: "-",
  },
  zIndex: {
    control: {
      type: "number",
    },
    description: "The z-index of the Modal",
    default: "1000",
  },
  onCancel: {
    control: {
      type: "function(e)",
    },
    description:
      "Specify a function that will be called when a user clicks mask, close button on top right or Cancel button",
    default: "-",
  },
  onOk: {
    control: {
      type: "function(e)",
    },
    description:
      "Specify a function that will be called when a user clicks the OK button",
    default: "-",
  },
  afterOpenChange: {
    control: {
      type: "(open: boolean) => void",
    },
    description:
      "Callback when the animation ends when Modal is turned on and off",
    default: "-",
  },
};
