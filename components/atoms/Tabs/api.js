// Tabs Props

export const api = {
  activeKey: {
    control: {
      type: "string",
    },
    description: "Current TabPane's key",
    default: "-",
  },
  addIcon: {
    control: {
      type: "ReactNode",
    },
    description: 'Customize add icon, only works with type="editable-card"',
    default: "<PlusOutlined />",
  },
  animated: {
    control: {
      type: "boolean | { inkBar: boolean, tabPane: boolean }",
    },
    description: "Whether to change tabs with animation.",
    default: "{ inkBar: true, tabPane: false }",
  },
  centered: {
    control: {
      type: "boolean",
    },
    description: "Centers tabs",
    default: "false",
  },
  defaultActiveKey: {
    control: {
      type: "string",
    },
    description: "Initial active TabPane's key, if activeKey is not set",
    default: "The key of first tab",
  },
  hideAdd: {
    control: {
      type: "boolean",
    },
    description: 'Hide plus icon or not. Only works while type="editable-card"',
    default: "false",
  },
  indicator: {
    control: {
      type: "{ size?: number | (origin: number) => number; align: start | center | end; }",
    },
    description: "Customize size and align of indicator",
    default: "-",
  },
  items: {
    control: {
      type: "TabItemType",
    },
    description: "Configure tab content",
    default: "[]",
  },
  moreIcon: {
    control: {
      type: "ReactNode",
    },
    description: "The custom icon of ellipsis",
    default: "<EllipsisOutlined />",
  },
  removeIcon: {
    control: {
      type: "ReactNode",
    },
    description:
      'The custom icon of remove, only works with type="editable-card"',
    default: "<CloseOutlined />",
  },
  popupClassName: {
    control: {
      type: "string",
    },
    description: "className for more dropdown.",
    default: "-",
  },
  renderTabBar: {
    control: {
      type: "(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement",
    },
    description: "Replace the TabBar",
    default: "-",
  },
  size: {
    control: {
      type: "large | middle | small",
    },
    description: "Preset tab bar size",
    default: "middle",
  },
  tabBarExtraContent: {
    control: {
      type: "ReactNode | {left?: ReactNode, right?: ReactNode}",
    },
    description: "Extra content in tab bar",
    default: "-",
  },
  tabBarGutter: {
    control: {
      type: "number",
    },
    description: "The gap between tabs",
    default: "-",
  },
  tabBarStyle: {
    control: {
      type: "CSSProperties",
    },
    description: "Tab bar style object",
    default: "-",
  },
  tabPosition: {
    control: {
      type: "top | right | bottom | left",
    },
    description: "Position of tabs",
    default: "top",
  },
  destroyInactiveTabPane: {
    control: {
      type: "boolean",
    },
    description: "Whether destroy inactive TabPane when change tab",
    default: "false",
  },
  type: {
    control: {
      type: "line | card | editable-card",
    },
    description: "Basic style of tabs",
    default: "line",
  },
  onChange: {
    control: {
      type: "(activeKey: string) => void",
    },
    description: "Callback executed when active tab is changed",
    default: "-",
  },
  onEdit: {
    control: {
      type: "(action === 'add' ? event : targetKey, action) => void",
    },
    description:
      'Callback executed when tab is added or removed. Only works while type="editable-card"',
    default: "-",
  },
  onTabClick: {
    control: {
      type: "(key: string, event: MouseEvent) => void",
    },
    description: "Callback executed when tab is clicked",
    default: "-",
  },
  onTabScroll: {
    control: {
      type: "({ direction: left | right | top | bottom }) => void",
    },
    description: "Trigger when tab scroll",
    default: "-",
  },
};
