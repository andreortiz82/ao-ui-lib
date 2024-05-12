// Tree Props

export const api = {
  allowDrop: {
    control: {
      type: "({ dropNode, dropPosition }) => boolean",
    },
    description: "Whether to allow dropping on the node",
    default: "-",
  },
  autoExpandParent: {
    control: {
      type: "boolean",
    },
    description: "Whether to automatically expand a parent treeNode",
    default: "false",
  },
  blockNode: {
    control: {
      type: "boolean",
    },
    description: "Whether treeNode fill remaining horizontal space",
    default: "false",
  },
  checkable: {
    control: {
      type: "boolean",
    },
    description: "Add a Checkbox before the treeNodes",
    default: "false",
  },
  checkedKeys: {
    control: {
      type: "string[] | {checked: string[], halfChecked: string[]}",
    },
    description:
      "(Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When checkable and checkStrictly is true, its object has checked and halfChecked property. Regardless of whether the child or parent treeNode is checked, they won't impact each other",
    default: "[]",
  },
  checkStrictly: {
    control: {
      type: "boolean",
    },
    description:
      "Check treeNode precisely; parent treeNode and children treeNodes are not associated",
    default: "false",
  },
  defaultCheckedKeys: {
    control: {
      type: "string[]",
    },
    description: "Specifies the keys of the default checked treeNodes",
    default: "[]",
  },
  defaultExpandAll: {
    control: {
      type: "boolean",
    },
    description: "Whether to expand all treeNodes by default",
    default: "false",
  },
  defaultExpandedKeys: {
    control: {
      type: "string[]",
    },
    description: "Specify the keys of the default expanded treeNodes",
    default: "[]",
  },
  defaultExpandParent: {
    control: {
      type: "boolean",
    },
    description: "If auto expand parent treeNodes when init",
    default: "true",
  },
  defaultSelectedKeys: {
    control: {
      type: "string[]",
    },
    description: "Specifies the keys of the default selected treeNodes",
    default: "[]",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Whether disabled the tree",
    default: "false",
  },
  draggable: {
    control: {
      type: "boolean | ((node: DataNode) => boolean) | { icon?: React.ReactNode | false, nodeDraggable?: (node: DataNode) => boolean }",
    },
    description:
      "Specifies whether this Tree or the node is draggable. Use icon: false to disable drag handler icon",
    default: "false",
  },
  expandedKeys: {
    control: {
      type: "string[]",
    },
    description: "(Controlled) Specifies the keys of the expanded treeNodes",
    default: "[]",
  },
  fieldNames: {
    control: {
      type: "object",
    },
    description: "Customize node title, key, children field name",
    default: "{ title: title, key: key, children: children }",
  },
  filterTreeNode: {
    control: {
      type: "function(node)",
    },
    description:
      "Defines a function to filter (highlight) treeNodes. When the function returns true, the corresponding treeNode will be highlighted",
    default: "-",
  },
  height: {
    control: {
      type: "number",
    },
    description:
      "Config virtual scroll height. Will not support horizontal scroll when enable this",
    default: "-",
  },
  icon: {
    control: {
      type: "ReactNode | (props) => ReactNode",
    },
    description: "Customize treeNode icon",
    default: "-",
  },
  loadData: {
    control: {
      type: "function(node)",
    },
    description: "Load data asynchronously",
    default: "-",
  },
  loadedKeys: {
    control: {
      type: "string[]",
    },
    description: "(Controlled) Set loaded tree nodes. Need work with loadData",
    default: "[]",
  },
  multiple: {
    control: {
      type: "boolean",
    },
    description: "Allows selecting multiple treeNodes",
    default: "false",
  },
  rootStyle: {
    control: {
      type: "CSSProperties",
    },
    description: "Style on the root element",
    default: "-",
  },
  selectable: {
    control: {
      type: "boolean",
    },
    description: "Whether can be selected",
    default: "true",
  },
  selectedKeys: {
    control: {
      type: "string[]",
    },
    description:
      "(Controlled) Specifies the keys of the selected treeNodes, multiple selection needs to set multiple to true",
    default: "-",
  },
  showIcon: {
    control: {
      type: "boolean",
    },
    description:
      "Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to true",
    default: "false",
  },
  showLine: {
    control: {
      type: "boolean | {showLeafIcon: ReactNode | ((props: AntTreeNodeProps) => ReactNode)}",
    },
    description: "Shows a connecting line",
    default: "false",
  },
  switcherIcon: {
    control: {
      type: "ReactNode | ((props: AntTreeNodeProps) => ReactNode)",
    },
    description: "Customize collapse/expand icon of tree node",
    default: "-",
  },
  titleRender: {
    control: {
      type: "(nodeData) => ReactNode",
    },
    description: "Customize tree node title render",
    default: "-",
  },
  treeData: {
    control: {
      type: "array<{ key, title, children, [disabled, selectable] }>",
    },
    description:
      "The treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array)",
    default: "-",
  },
  virtual: {
    control: {
      type: "boolean",
    },
    description: "Disable virtual scroll when set to false",
    default: "true",
  },
  onCheck: {
    control: {
      type: "function(checkedKeys, e:{checked: boolean, checkedNodes, node, event, halfCheckedKeys})",
    },
    description: "Callback function for when the onCheck event occurs",
    default: "-",
  },
  onDragEnd: {
    control: {
      type: "function({event, node})",
    },
    description: "Callback function for when the onDragEnd event occurs",
    default: "-",
  },
  onDragEnter: {
    control: {
      type: "function({event, node, expandedKeys})",
    },
    description: "Callback function for when the onDragEnter event occurs",
    default: "-",
  },
  onDragLeave: {
    control: {
      type: "function({event, node})",
    },
    description: "Callback function for when the onDragLeave event occurs",
    default: "-",
  },
  onDragOver: {
    control: {
      type: "function({event, node})",
    },
    description: "Callback function for when the onDragOver event occurs",
    default: "-",
  },
  onDragStart: {
    control: {
      type: "function({event, node})",
    },
    description: "Callback function for when the onDragStart event occurs",
    default: "-",
  },
  onDrop: {
    control: {
      type: "function({event, node, dragNode, dragNodesKeys})",
    },
    description: "Callback function for when the onDrop event occurs",
    default: "-",
  },
  onExpand: {
    control: {
      type: "function(expandedKeys, {expanded: boolean, node})",
    },
    description:
      "Callback function for when a treeNode is expanded or collapsed",
    default: "-",
  },
  onLoad: {
    control: {
      type: "function(loadedKeys, {event, node})",
    },
    description: "Callback function for when a treeNode is loaded",
    default: "-",
  },
  onRightClick: {
    control: {
      type: "function({event, node})",
    },
    description: "Callback function for when the user right clicks a treeNode",
    default: "-",
  },
  onSelect: {
    control: {
      type: "function(selectedKeys, e:{selected: boolean, selectedNodes, node, event})",
    },
    description: "Callback function for when the user clicks a treeNode",
    default: "-",
  },
};
