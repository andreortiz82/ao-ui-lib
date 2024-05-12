// Cascader Props

export const api = {
  allowClear: {
    control: {
      type: "boolean | { clearIcon?: ReactNode }",
    },
    description: "Show clear button",
    default: "true",
  },
  autoClearSearchValue: {
    control: {
      type: "boolean",
    },
    description:
      "Whether the current search will be cleared on selecting an item. Only applies when multiple is true",
    default: "true",
  },
  autoFocus: {
    control: {
      type: "boolean",
    },
    description: "If get focus when component mounted",
    default: "false",
  },
  changeOnSelect: {
    control: {
      type: "boolean",
    },
    description:
      "(Work on single select) Change value on each selection if set to true, see above demo for details",
    default: "false",
  },
  className: {
    control: {
      type: "string",
    },
    description: "The additional css class",
    default: "-",
  },
  defaultValue: {
    control: {
      type: "string[] | number[]",
    },
    description: "Initial selected value",
    default: "[]",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Whether disabled select",
    default: "false",
  },
  displayRender: {
    control: {
      type: "(label, selectedOptions) => ReactNode",
    },
    description: "The render function of displaying selected options",
    default: "label => label.join(/)",
  },
  tagRender: {
    control: {
      type: "(label: string, onClose: function, value: string) => ReactNode",
    },
    description: "Custom render function for tags in multiple mode",
    default: "-",
  },
  popupClassName: {
    control: {
      type: "string",
    },
    description: "The additional className of popup overlay",
    default: "-",
  },
  dropdownRender: {
    control: {
      type: "(menus: ReactNode) => ReactNode",
    },
    description: "Customize dropdown content",
    default: "-",
  },
  expandIcon: {
    control: {
      type: "ReactNode",
    },
    description: "Customize the current item expand icon",
    default: "-",
  },
  expandTrigger: {
    control: {
      type: "string",
    },
    description: "expand current item when click or hover, one of click hover",
    default: "click",
  },
  fieldNames: {
    control: {
      type: "object",
    },
    description: "Custom field name for label and value and children",
    default: "{ label: label, value: value, children: children }",
  },
  getPopupContainer: {
    control: {
      type: "function(triggerNode)",
    },
    description:
      "Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative. example",
    default: "() => document.body",
  },
  loadData: {
    control: {
      type: "(selectedOptions) => void",
    },
    description: "To load option lazily, and it cannot work with showSearch",
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
  notFoundContent: {
    control: {
      type: "string",
    },
    description: "Specify content to show when no result matches",
    default: "Not Found",
  },
  open: {
    control: {
      type: "boolean",
    },
    description: "Set visible of cascader popup",
    default: "-",
  },
  options: {
    control: {
      type: "Option[]",
    },
    description: "The data options of cascade",
    default: "-",
  },
  placeholder: {
    control: {
      type: "string",
    },
    description: "The input placeholder",
    default: "Please select",
  },
  placement: {
    control: {
      type: "bottomLeft bottomRight topLeft topRight",
    },
    description: "Use preset popup align config from builtinPlacements",
    default: "bottomLeft",
  },
  showSearch: {
    control: {
      type: "boolean | Object",
    },
    description: "Whether show search input in single mode",
    default: "false",
  },
  size: {
    control: {
      type: "large | middle | small",
    },
    description: "The input size",
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
    description: "The additional style",
    default: "-",
  },
  suffixIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The custom suffix icon",
    default: "-",
  },
  value: {
    control: {
      type: "string[] | number[]",
    },
    description: "The selected value",
    default: "-",
  },
  variant: {
    control: {
      type: "outlined | borderless | filled",
    },
    description: "Variants of selector",
    default: "outlined",
  },
  onChange: {
    control: {
      type: "(value, selectedOptions) => void",
    },
    description: "Callback when finishing cascader select",
    default: "-",
  },
  onDropdownVisibleChange: {
    control: {
      type: "(value) => void",
    },
    description: "Callback when popup shown or hidden",
    default: "-",
  },
  multiple: {
    control: {
      type: "boolean",
    },
    description: "Support multiple or not",
    default: "-",
  },
  removeIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The custom remove icon",
    default: "-",
  },
  showCheckedStrategy: {
    control: {
      type: "Cascader.SHOW_PARENT | Cascader.SHOW_CHILD",
    },
    description:
      "The way show selected item in box. ** SHOW_CHILD: ** just show child treeNode. Cascader.SHOW_PARENT: just show parent treeNode (when all child treeNode under the parent treeNode are checked)",
    default: "Cascader.SHOW_PARENT",
  },
  searchValue: {
    control: {
      type: "string",
    },
    description: "Set search value, Need work with showSearch",
    default: "-",
  },
  onSearch: {
    control: {
      type: "(search: string) => void",
    },
    description: "The callback function triggered when input changed",
    default: "-",
  },
  dropdownMenuColumnStyle: {
    control: {
      type: "CSSProperties",
    },
    description: "The style of the drop-down menu column",
    default: "-",
  },
  loadingIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The appearance of lazy loading (now is useless)",
    default: "-",
  },
  optionRender: {
    control: {
      type: "(option: Option) => React.ReactNode",
    },
    description: "Customize the rendering dropdown options",
    default: "-",
  },
};
