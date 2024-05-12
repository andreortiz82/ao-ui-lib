// Menu Props 

export const api = {
    "defaultOpenKeys": {
        "control": {
            "type": "string[]"
        },
        "description": "Array with the keys of default opened sub menus",
        "default": "-"
    },
    "defaultSelectedKeys": {
        "control": {
            "type": "string[]"
        },
        "description": "Array with the keys of default selected menu items",
        "default": "-"
    },
    "expandIcon": {
        "control": {
            "type": "ReactNode | (props: SubMenuProps & { isSubMenu: boolean }) => ReactNode"
        },
        "description": "custom expand icon of submenu",
        "default": "-"
    },
    "forceSubMenuRender": {
        "control": {
            "type": "boolean"
        },
        "description": "Render submenu into DOM before it becomes visible",
        "default": "false"
    },
    "inlineCollapsed": {
        "control": {
            "type": "boolean"
        },
        "description": "Specifies the collapsed status when menu is inline mode",
        "default": "-"
    },
    "inlineIndent": {
        "control": {
            "type": "number"
        },
        "description": "Indent (in pixels) of inline menu items on each level",
        "default": "24"
    },
    "items": {
        "control": {
            "type": "ItemType[]"
        },
        "description": "Menu item content",
        "default": "-"
    },
    "mode": {
        "control": {
            "type": "vertical | horizontal | inline"
        },
        "description": "Type of menu",
        "default": "vertical"
    },
    "multiple": {
        "control": {
            "type": "boolean"
        },
        "description": "Allows selection of multiple items",
        "default": "false"
    },
    "openKeys": {
        "control": {
            "type": "string[]"
        },
        "description": "Array with the keys of currently opened sub-menus",
        "default": "-"
    },
    "overflowedIndicator": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Customized the ellipsis icon when menu is collapsed horizontally",
        "default": "<EllipsisOutlined />"
    },
    "selectable": {
        "control": {
            "type": "boolean"
        },
        "description": "Allows selecting menu items",
        "default": "true"
    },
    "selectedKeys": {
        "control": {
            "type": "string[]"
        },
        "description": "Array with the keys of currently selected menu items",
        "default": "-"
    },
    "style": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "Style of the root node",
        "default": "-"
    },
    "subMenuCloseDelay": {
        "control": {
            "type": "number"
        },
        "description": "Delay time to hide submenu when mouse leaves (in seconds)",
        "default": "0.1"
    },
    "subMenuOpenDelay": {
        "control": {
            "type": "number"
        },
        "description": "Delay time to show submenu when mouse enters, (in seconds)",
        "default": "0"
    },
    "theme": {
        "control": {
            "type": "light | dark"
        },
        "description": "Color theme of the menu",
        "default": "light"
    },
    "triggerSubMenuAction": {
        "control": {
            "type": "hover | click"
        },
        "description": "Which action can trigger submenu open/close",
        "default": "hover"
    },
    "onClick": {
        "control": {
            "type": "function({ item, key, keyPath, domEvent })"
        },
        "description": "Called when a menu item is clicked",
        "default": "-"
    },
    "onDeselect": {
        "control": {
            "type": "function({ item, key, keyPath, selectedKeys, domEvent })"
        },
        "description": "Called when a menu item is deselected (multiple mode only)",
        "default": "-"
    },
    "onOpenChange": {
        "control": {
            "type": "function(openKeys: string[])"
        },
        "description": "Called when sub-menus are opened or closed",
        "default": "-"
    },
    "onSelect": {
        "control": {
            "type": "function({ item, key, keyPath, selectedKeys, domEvent })"
        },
        "description": "Called when a menu item is selected",
        "default": "-"
    }
}