// Transfer Props

export const api = {
  dataSource: {
    control: {
      type: "RecordType extends TransferItem = TransferItem[]",
    },
    description:
      "Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in targetKeys prop",
    default: "[]",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Whether disabled transfer",
    default: "false",
  },
  selectionsIcon: {
    control: {
      type: "React.ReactNode",
    },
    description: "custom dropdown icon",
    default: "",
  },
  filterOption: {
    control: {
      type: "(inputValue, option, direction: left | right): boolean",
    },
    description:
      "A function to determine whether an item should show in search result list, only works when searching, (add direction support since 5.9.0+)",
    default: "-",
  },
  footer: {
    control: {
      type: "(props, { direction }) => ReactNode",
    },
    description: "A function used for rendering the footer",
    default: "-",
  },
  listStyle: {
    control: {
      type: "object | ({direction: left | right}) => object",
    },
    description: "A custom CSS style used for rendering the transfer columns",
    default: "-",
  },
  locale: {
    control: {
      type: "{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode | ReactNode[]; }",
    },
    description: "The i18n text including filter, empty text, item unit, etc",
    default:
      "{ itemUnit: item, itemsUnit: items, notFoundContent: The list is empty, searchPlaceholder: Search here }",
  },
  oneWay: {
    control: {
      type: "boolean",
    },
    description: "Display as single direction style",
    default: "false",
  },
  operations: {
    control: {
      type: "string[]",
    },
    description: "A set of operations that are sorted from top to bottom",
    default: "[>, <]",
  },
  operationStyle: {
    control: {
      type: "object",
    },
    description: "A custom CSS style used for rendering the operations column",
    default: "-",
  },
  pagination: {
    control: {
      type: "boolean | { pageSize: number, simple: boolean, showSizeChanger?: boolean, showLessItems?: boolean }",
    },
    description: "Use pagination. Not work in render props",
    default: "false",
  },
  render: {
    control: {
      type: "(record) => ReactNode",
    },
    description:
      "The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a React element which is generated from that record. Also, it can return a plain object with value and label, label is a React element and value is for title",
    default: "-",
  },
  selectAllLabels: {
    control: {
      type: "(ReactNode | (info: { selectedCount: number, totalCount: number }) => ReactNode)[]",
    },
    description:
      "A set of customized labels for select all checkboxes on the header",
    default: "-",
  },
  selectedKeys: {
    control: {
      type: "string[] | number[]",
    },
    description: "A set of keys of selected items",
    default: "[]",
  },
  showSearch: {
    control: {
      type: "boolean",
    },
    description: "If included, a search box is shown on each column",
    default: "false",
  },
  showSelectAll: {
    control: {
      type: "boolean",
    },
    description: "Show select all checkbox on the header",
    default: "true",
  },
  status: {
    control: {
      type: "'error' | 'warning'",
    },
    description: "Set validation status",
    default: "-",
  },
  targetKeys: {
    control: {
      type: "string[] | number[]",
    },
    description:
      "A set of keys of elements that are listed on the right column",
    default: "[]",
  },
  titles: {
    control: {
      type: "ReactNode[]",
    },
    description: "A set of titles that are sorted from left to right",
    default: "-",
  },
  onChange: {
    control: {
      type: "(targetKeys, direction, moveKeys): void",
    },
    description:
      "A callback function that is executed when the transfer between columns is complete",
    default: "-",
  },
  onScroll: {
    control: {
      type: "(direction, event): void",
    },
    description:
      "A callback function which is executed when scroll options list",
    default: "-",
  },
  onSearch: {
    control: {
      type: "(direction: left | right, value: string): void",
    },
    description:
      "A callback function which is executed when search field are changed",
    default: "-",
  },
  onSelectChange: {
    control: {
      type: "(sourceSelectedKeys, targetSelectedKeys): void",
    },
    description:
      "A callback function which is executed when selected items are changed",
    default: "-",
  },
};
