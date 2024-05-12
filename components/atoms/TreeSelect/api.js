// TreeSelect Props

export const api = {
  allowClear: {
    control: {
      type: "boolean | { clearIcon?: ReactNode }",
    },
    description: "Customize clear icon",
    default: "false",
  },
  autoClearSearchValue: {
    control: {
      type: "boolean",
    },
    description:
      "If auto clear search input value when multiple select is selected/deselected",
    default: "true",
  },
  defaultValue: {
    control: {
      type: "string | string[]",
    },
    description: "To set the initial selected treeNode(s)",
    default: "-",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Disabled or not",
    default: "false",
  },
  popupClassName: {
    control: {
      type: "string",
    },
    description: "The className of dropdown menu",
    default: "-",
  },
  popupMatchSelectWidth: {
    control: {
      type: "boolean | number",
    },
    description:
      "Determine whether the popup menu and the select input are the same width. Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll",
    default: "true",
  },
  dropdownRender: {
    control: {
      type: "(originNode: ReactNode, props) => ReactNode",
    },
    description: "Customize dropdown content",
    default: "-",
  },
  dropdownStyle: {
    control: {
      type: "CSSProperties",
    },
    description: "To set the style of the dropdown menu",
    default: "-",
  },
  fieldNames: {
    control: {
      type: "object",
    },
    description: "Customize node label, value, children field name",
    default: "{ label: label, value: value, children: children }",
  },
  filterTreeNode: {
    control: {
      type: "boolean | function(inputValue: string, treeNode: TreeNode) (should return boolean)",
    },
    description:
      "Whether to filter treeNodes by input value. The value of treeNodeFilterProp is used for filtering by default",
    default: "function",
  },
  getPopupContainer: {
    control: {
      type: "function(triggerNode)",
    },
    description:
      "To set the container of the dropdown menu. The default is to create a div element in body, you can reset it to the scrolling area and make a relative reposition. example",
    default: "() => document.body",
  },
  labelInValue: {
    control: {
      type: "boolean",
    },
    description:
      "Whether to embed label in value, turn the format of value from string to {value: string, label: ReactNode, halfChecked: string[]}",
    default: "false",
  },
  listHeight: {
    control: {
      type: "number",
    },
    description: "Config popup height",
    default: "256",
  },
  loadData: {
    control: {
      type: "function(node)",
    },
    description:
      "Load data asynchronously. Will not load when filtering. Check FAQ for more info",
    default: "-",
  },
  maxTagCount: {
    control: {
      type: "number | responsive",
    },
    description:
      "Max tag count to show. responsive will cost render performance",
    default: "-",
  },
  maxTagPlaceholder: {
    control: {
      type: "ReactNode | function(omittedValues)",
    },
    description: "Placeholder for not showing tags",
    default: "-",
  },
  maxTagTextLength: {
    control: {
      type: "number",
    },
    description: "Max tag text length to show",
    default: "-",
  },
  multiple: {
    control: {
      type: "boolean",
    },
    description:
      "Support multiple or not, will be true when enable treeCheckable",
    default: "false",
  },
  notFoundContent: {
    control: {
      type: "ReactNode",
    },
    description: "Specify content to show when no result matches",
    default: "Not Found",
  },
  placeholder: {
    control: {
      type: "string",
    },
    description: "Placeholder of the select input",
    default: "-",
  },
  placement: {
    control: {
      type: "bottomLeft bottomRight topLeft topRight",
    },
    description: "The position where the selection box pops up",
    default: "bottomLeft",
  },
  searchValue: {
    control: {
      type: "string",
    },
    description: "Work with onSearch to make search value controlled",
    default: "-",
  },
  showCheckedStrategy: {
    control: {
      type: "TreeSelect.SHOW_ALL | TreeSelect.SHOW_PARENT | TreeSelect.SHOW_CHILD",
    },
    description:
      "The way show selected item in box when treeCheckable set. Default: just show child nodes. TreeSelect.SHOW_ALL: show all checked treeNodes (include parent treeNode). TreeSelect.SHOW_PARENT: show checked treeNodes (just show parent treeNode)",
    default: "TreeSelect.SHOW_CHILD",
  },
  showSearch: {
    control: {
      type: "boolean",
    },
    description: "Support search or not",
    default: "single: false | multiple: true",
  },
  size: {
    control: {
      type: "large | middle | small",
    },
    description: "To set the size of the select input",
    default: "-",
  },
  status: {
    control: {
      type: "'error' | 'warning'",
    },
    description: "Set validation status",
    default: "-",
  },
  suffixIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The custom suffix icon",
    default: "<DownOutlined />",
  },
  switcherIcon: {
    control: {
      type: "ReactNode | ((props: AntTreeNodeProps) => ReactNode)",
    },
    description: "Customize collapse/expand icon of tree node",
    default: "-",
  },
  tagRender: {
    control: {
      type: "(props) => ReactNode",
    },
    description: "Customize tag render when multiple",
    default: "-",
  },
  treeCheckable: {
    control: {
      type: "boolean",
    },
    description: "Whether to show checkbox on the treeNodes",
    default: "false",
  },
  treeCheckStrictly: {
    control: {
      type: "boolean",
    },
    description:
      "Whether to check nodes precisely (in the checkable mode), means parent and child nodes are not associated, and it will make labelInValue be true",
    default: "false",
  },
  treeData: {
    control: {
      type: "array<{ value, title, children, [disabled, disableCheckbox, selectable, checkable] }>",
    },
    description:
      "Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value)",
    default: "[]",
  },
  treeDataSimpleMode: {
    control: {
      type: "boolean | object<{ id: string, pId: string, rootPId: string }>",
    },
    description:
      "Enable simple mode of treeData. Changes the treeData schema to: [{id:1, pId:0, value:'1', title:\"test1\",...},...] where pId is parent node's id). It is possible to replace the default id and pId keys by providing object to treeDataSimpleMode",
    default: "false",
  },
  treeDefaultExpandAll: {
    control: {
      type: "boolean",
    },
    description: "Whether to expand all treeNodes by default",
    default: "false",
  },
  treeDefaultExpandedKeys: {
    control: {
      type: "string[]",
    },
    description: "Default expanded treeNodes",
    default: "-",
  },
  treeExpandAction: {
    control: {
      type: "string | boolean",
    },
    description:
      "Tree title open logic when click, optional: false | click | doubleClick",
    default: "false",
  },
  treeExpandedKeys: {
    control: {
      type: "string[]",
    },
    description: "Set expanded keys",
    default: "-",
  },
  treeIcon: {
    control: {
      type: "boolean",
    },
    description:
      "Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to true",
    default: "false",
  },
  treeLoadedKeys: {
    control: {
      type: "string[]",
    },
    description: "(Controlled) Set loaded tree nodes, work with loadData only",
    default: "[]",
  },
  treeLine: {
    control: {
      type: "boolean | object",
    },
    description: "Show the line. Ref Tree - showLine",
    default: "false",
  },
  treeNodeFilterProp: {
    control: {
      type: "string",
    },
    description: "Will be used for filtering if filterTreeNode returns true",
    default: "value",
  },
  treeNodeLabelProp: {
    control: {
      type: "string",
    },
    description: "Will render as content of select",
    default: "title",
  },
  value: {
    control: {
      type: "string | string[]",
    },
    description: "To set the current selected treeNode(s)",
    default: "-",
  },
  variant: {
    control: {
      type: "outlined | borderless | filled",
    },
    description: "Variants of selector",
    default: "outlined",
  },
  virtual: {
    control: {
      type: "boolean",
    },
    description: "Disable virtual scroll when set to false",
    default: "true",
  },
  onChange: {
    control: {
      type: "function(value, label, extra)",
    },
    description:
      "A callback function, can be executed when selected treeNodes or input value change",
    default: "-",
  },
  onDropdownVisibleChange: {
    control: {
      type: "function(open)",
    },
    description: "Called when dropdown open",
    default: "-",
  },
  onSearch: {
    control: {
      type: "function(value: string)",
    },
    description:
      "A callback function, can be executed when the search input changes",
    default: "-",
  },
  onSelect: {
    control: {
      type: "function(value, node, extra)",
    },
    description:
      "A callback function, can be executed when you select a treeNode",
    default: "-",
  },
  onTreeExpand: {
    control: {
      type: "function(expandedKeys)",
    },
    description: "A callback function, can be executed when treeNode expanded",
    default: "-",
  },
  onPopupScroll: {
    control: {
      type: "(event: MouseEvent) => void",
    },
    description: "Called when dropdown scrolls",
    default: "-",
  },
};
