// Pagination Props

export const api = {
  current: {
    control: {
      type: "number",
    },
    description: "Current page number",
    default: "-",
  },
  defaultCurrent: {
    control: {
      type: "number",
    },
    description: "Default initial page number",
    default: "1",
  },
  defaultPageSize: {
    control: {
      type: "number",
    },
    description: "Default number of data items per page",
    default: "10",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Disable pagination",
    default: "-",
  },
  hideOnSinglePage: {
    control: {
      type: "boolean",
    },
    description: "Whether to hide pager on single page",
    default: "false",
  },
  itemRender: {
    control: {
      type: "(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode",
    },
    description: "To customize item's innerHTML",
    default: "-",
  },
  pageSize: {
    control: {
      type: "number",
    },
    description: "Number of data items per page",
    default: "-",
  },
  pageSizeOptions: {
    control: {
      type: "string[] | number[]",
    },
    description: "Specify the sizeChanger options",
    default: "[10, 20, 50, 100]",
  },
  responsive: {
    control: {
      type: "boolean",
    },
    description:
      "If size is not specified, Pagination would resize according to the width of the window",
    default: "-",
  },
  showLessItems: {
    control: {
      type: "boolean",
    },
    description: "Show less page items",
    default: "false",
  },
  showQuickJumper: {
    control: {
      type: "boolean | { goButton: ReactNode }",
    },
    description: "Determine whether you can jump to pages directly",
    default: "false",
  },
  showSizeChanger: {
    control: {
      type: "boolean",
    },
    description:
      "Determine whether to show pageSize select, it will be true when total > 50",
    default: "-",
  },
  showTitle: {
    control: {
      type: "boolean",
    },
    description: "Show page item's title",
    default: "true",
  },
  showTotal: {
    control: {
      type: "function(total, range)",
    },
    description: "To display the total number and range",
    default: "-",
  },
  simple: {
    control: {
      type: "boolean",
    },
    description: "Whether to use simple mode",
    default: "-",
  },
  size: {
    control: {
      type: "default | small",
    },
    description: "Specify the size of Pagination, can be set to small",
    default: "default",
  },
  total: {
    control: {
      type: "number",
    },
    description: "Total number of data items",
    default: "0",
  },
  onChange: {
    control: {
      type: "function(page, pageSize)",
    },
    description:
      "Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments",
    default: "-",
  },
  onShowSizeChange: {
    control: {
      type: "function(current, size)",
    },
    description: "Called when pageSize is changed",
    default: "-",
  },
};
