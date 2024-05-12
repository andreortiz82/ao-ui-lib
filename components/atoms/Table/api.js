// Table Props

export const api = {
  bordered: {
    control: {
      type: "boolean",
    },
    description: "Whether to show all table borders",
    default: "false",
  },
  columns: {
    control: {
      type: "ColumnsType[]",
    },
    description: "Columns of table",
    default: "-",
  },
  components: {
    control: {
      type: "TableComponents",
    },
    description: "Override default table elements",
    default: "-",
  },
  dataSource: {
    control: {
      type: "object[]",
    },
    description: "Data record array to be displayed",
    default: "-",
  },
  expandable: {
    control: {
      type: "expandable",
    },
    description: "Config expandable content",
    default: "-",
  },
  footer: {
    control: {
      type: "function(currentPageData)",
    },
    description: "Table footer renderer",
    default: "-",
  },
  getPopupContainer: {
    control: {
      type: "(triggerNode) => HTMLElement",
    },
    description: "The render container of dropdowns in table",
    default: "() => TableHtmlElement",
  },
  loading: {
    control: {
      type: "boolean | Spin Props",
    },
    description: "Loading status of table",
    default: "false",
  },
  locale: {
    control: {
      type: "object",
    },
    description: "The i18n text including filter, sort, empty text, etc",
    default: "Default Value",
  },
  pagination: {
    control: {
      type: "object | false",
    },
    description:
      "Config of pagination. You can ref table pagination config or full pagination document, hide it by setting it to false",
    default: "-",
  },
  rowClassName: {
    control: {
      type: "function(record, index): string",
    },
    description: "Row's className",
    default: "-",
  },
  rowKey: {
    control: {
      type: "string | function(record): string",
    },
    description:
      "Row's unique key, could be a string or function that returns a string",
    default: "key",
  },
  rowSelection: {
    control: {
      type: "object",
    },
    description: "Row selection config",
    default: "-",
  },
  rowHoverable: {
    control: {
      type: "boolean",
    },
    description: "Row hover",
    default: "true",
  },
  scroll: {
    control: {
      type: "object",
    },
    description: "Whether the table can be scrollable, config",
    default: "-",
  },
  showHeader: {
    control: {
      type: "boolean",
    },
    description: "Whether to show table header",
    default: "true",
  },
  showSorterTooltip: {
    control: {
      type: "boolean | Tooltip props & {target?: 'full-header' | 'sorter-icon' }",
    },
    description:
      "The header show next sorter direction tooltip. It will be set as the property of Tooltip if its type is object",
    default: "{ target: 'full-header' }",
  },
  size: {
    control: {
      type: "large | middle | small",
    },
    description: "Size of table",
    default: "large",
  },
  sortDirections: {
    control: {
      type: "Array",
    },
    description: "Supported sort way, could be ascend, descend",
    default: "[ascend, descend]",
  },
  sticky: {
    control: {
      type: "boolean | {offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}",
    },
    description: "Set sticky header and scroll bar",
    default: "-",
  },
  summary: {
    control: {
      type: "(currentData) => ReactNode",
    },
    description: "Summary content",
    default: "-",
  },
  tableLayout: {
    control: {
      type: "- | auto | fixed",
    },
    description: "The table-layout attribute of table element",
    default: "-fixed when header/columns are fixed, or using column.ellipsis",
  },
  title: {
    control: {
      type: "function(currentPageData)",
    },
    description: "Table title renderer",
    default: "-",
  },
  virtual: {
    control: {
      type: "boolean",
    },
    description: "Support virtual list",
    default: "-",
  },
  onChange: {
    control: {
      type: "function(pagination, filters, sorter, extra: { currentDataSource: [], action: paginate | sort | filter })",
    },
    description:
      "Callback executed when pagination, filters or sorter is changed",
    default: "-",
  },
  onHeaderRow: {
    control: {
      type: "function(columns, index)",
    },
    description: "Set props on per header row",
    default: "-",
  },
  onRow: {
    control: {
      type: "function(record, index)",
    },
    description: "Set props on per row",
    default: "-",
  },
  onScroll: {
    control: {
      type: "function(event)",
    },
    description:
      "Triggered when the table body is scrolled. Note that only vertical scrolling will trigger the event when virtual",
    default: "-",
  },
};
