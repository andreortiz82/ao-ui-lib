// DatePicker Props

export const api = {
  allowClear: {
    control: {
      type: "boolean | { clearIcon?: ReactNode }",
    },
    description: "Customize clear button",
    default: "true",
  },
  autoFocus: {
    control: {
      type: "boolean",
    },
    description: "If get focus when component mounted",
    default: "false",
  },
  className: {
    control: {
      type: "string",
    },
    description: "The picker className",
    default: "-",
  },
  dateRender: {
    control: {
      type: "function(currentDate: dayjs, today: dayjs) => React.ReactNode",
    },
    description:
      "Custom rendering function for date cells, >= 5.4.0 use cellRender instead.",
    default: "-",
  },
  cellRender: {
    control: {
      type: "(current: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' | 'end', type: PanelMode, locale?: Locale, subType?: 'hour' | 'minute' | 'second' | 'meridiem' }) => React.ReactNode",
    },
    description: "Custom rendering function for picker cells",
    default: "-",
  },
  components: {
    control: {
      type: "Record<Panel | 'input', React.ComponentType>",
    },
    description: "Custom panels",
    default: "-",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Determine whether the DatePicker is disabled",
    default: "false",
  },
  disabledDate: {
    control: {
      type: "(currentDate: dayjs, info: { from?: dayjs }) => boolean",
    },
    description: "Specify the date that cannot be selected",
    default: "-",
  },
  format: {
    control: {
      type: "formatType",
    },
    description:
      "To set the date format, support multi-format matching when it is an array, display the first one shall prevail. refer to dayjs#format. for example: Custom Format",
    default: "rc-picker",
  },
  order: {
    control: {
      type: "boolean",
    },
    description: "Auto order date when multiple or range selection",
    default: "true",
  },
  popupClassName: {
    control: {
      type: "string",
    },
    description: "To customize the className of the popup calendar",
    default: "-",
  },
  preserveInvalidOnBlur: {
    control: {
      type: "boolean",
    },
    description: "Not clean input on blur even when the typing is invalidate",
    default: "false",
  },
  getPopupContainer: {
    control: {
      type: "function(trigger)",
    },
    description:
      "To set the container of the floating layer, while the default is to create a div element in body",
    default: "-",
  },
  inputReadOnly: {
    control: {
      type: "boolean",
    },
    description:
      "Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)",
    default: "false",
  },
  locale: {
    control: {
      type: "object",
    },
    description: "Localization configuration",
    default: "default",
  },
  minDate: {
    control: {
      type: "dayjs",
    },
    description:
      "The minimum date, which also limits the range of panel switching",
    default: "-",
  },
  maxDate: {
    control: {
      type: "dayjs",
    },
    description:
      "The maximum date, which also limits the range of panel switching",
    default: "-",
  },
  mode: {
    control: {
      type: "time | date | month | year | decade",
    },
    description:
      "The picker panel mode\uff08 Cannot select year or month anymore? )",
    default: "-",
  },
  needConfirm: {
    control: {
      type: "boolean",
    },
    description:
      "Need click confirm button to trigger value change. Default false when multiple",
    default: "-",
  },
  nextIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The custom next icon",
    default: "-",
  },
  open: {
    control: {
      type: "boolean",
    },
    description: "The open state of picker",
    default: "-",
  },
  panelRender: {
    control: {
      type: "(panelNode) => ReactNode",
    },
    description: "Customize panel render",
    default: "-",
  },
  picker: {
    control: {
      type: "date | week | month | quarter | year",
    },
    description: "Set picker type",
    default: "date",
  },
  placeholder: {
    control: {
      type: "string | [string,string]",
    },
    description: "The placeholder of date input",
    default: "-",
  },
  placement: {
    control: {
      type: "bottomLeft bottomRight topLeft topRight",
    },
    description: "The position where the selection box pops up",
    default: "bottomLeft",
  },
  popupStyle: {
    control: {
      type: "CSSProperties",
    },
    description: "To customize the style of the popup calendar",
    default: "{}",
  },
  presets: {
    control: {
      type: "{ label: React.ReactNode, value: Dayjs | (() => Dayjs) }[]",
    },
    description:
      "The preset ranges for quick selection, Since 5.8.0, preset value supports callback function.",
    default: "-",
  },
  prevIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The custom prev icon",
    default: "-",
  },
  size: {
    control: {
      type: "large | middle | small",
    },
    description:
      "To determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px",
    default: "-",
  },
  status: {
    control: {
      type: "'error' | 'warning'",
    },
    description: "Set validation status",
    default: "-",
  },
  style: {
    control: {
      type: "CSSProperties",
    },
    description: "To customize the style of the input box",
    default: "{}",
  },
  suffixIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The custom suffix icon",
    default: "-",
  },
  superNextIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The custom super next icon",
    default: "-",
  },
  superPrevIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The custom super prev icon",
    default: "-",
  },
  variant: {
    control: {
      type: "outlined | borderless | filled",
    },
    description: "Variants of picker",
    default: "outlined",
  },
  onOpenChange: {
    control: {
      type: "function(open)",
    },
    description:
      "Callback function, can be executed whether the popup calendar is popped up or closed",
    default: "-",
  },
  onPanelChange: {
    control: {
      type: "function(value, mode)",
    },
    description: "Callback when picker panel mode is changed",
    default: "-",
  },
};
