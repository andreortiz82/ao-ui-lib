// Calendar Props

export const api = {
  dateCellRender: {
    control: {
      type: "function(date: Dayjs): ReactNode",
    },
    description:
      "Customize the display of the date cell, the returned content will be appended to the cell",
    default: "-",
  },
  dateFullCellRender: {
    control: {
      type: "function(date: Dayjs): ReactNode",
    },
    description:
      "Customize the display of the date cell, the returned content will override the cell",
    default: "-",
  },
  defaultValue: {
    control: {
      type: "dayjs",
    },
    description: "The date selected by default",
    default: "-",
  },
  disabledDate: {
    control: {
      type: "(currentDate: Dayjs) => boolean",
    },
    description:
      "Function that specifies the dates that cannot be selected, currentDate is same dayjs object as value prop which you shouldn't mutate it](https://github.com/ant-design/ant-design/issues/30987)",
    default: "-",
  },
  fullscreen: {
    control: {
      type: "boolean",
    },
    description: "Whether to display in full-screen",
    default: "true",
  },
  headerRender: {
    control: {
      type: "function(object:{value: Dayjs, type: string, onChange: f(), onTypeChange: f()})",
    },
    description: "Render custom header in panel",
    default: "-",
  },
  locale: {
    control: {
      type: "object",
    },
    description: "The calendar's locale",
    default: "(default)",
  },
  mode: {
    control: {
      type: "month | year",
    },
    description: "The display mode of the calendar",
    default: "month",
  },
  monthCellRender: {
    control: {
      type: "function(date: Dayjs): ReactNode",
    },
    description:
      "Customize the display of the month cell, the returned content will be appended to the cell",
    default: "-",
  },
  monthFullCellRender: {
    control: {
      type: "function(date: Dayjs): ReactNode",
    },
    description:
      "Customize the display of the month cell, the returned content will override the cell",
    default: "-",
  },
  validRange: {
    control: {
      type: "[dayjs, dayjs]",
    },
    description: "To set valid range",
    default: "-",
  },
  value: {
    control: {
      type: "dayjs",
    },
    description: "The current selected date",
    default: "-",
  },
  onChange: {
    control: {
      type: "function(date: Dayjs)",
    },
    description: "Callback for when date changes",
    default: "-",
  },
  onPanelChange: {
    control: {
      type: "function(date: Dayjs, mode: string)",
    },
    description: "Callback for when panel changes",
    default: "-",
  },
  onSelect: {
    control: {
      type: "function(date: Dayjs, info: { source: 'year' | 'month' | 'date' | 'customize' })",
    },
    description: "Callback for when a date is selected, include source info",
    default: "-",
  },
};
