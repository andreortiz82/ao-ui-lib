// Dropdown Props 

export const api = {
    "arrow": {
        "control": {
            "type": "boolean | { pointAtCenter: boolean }"
        },
        "description": "Whether the dropdown arrow should be visible",
        "default": "false"
    },
    "autoAdjustOverflow": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to adjust dropdown placement automatically when dropdown is off screen",
        "default": "true"
    },
    "autoFocus": {
        "control": {
            "type": "boolean"
        },
        "description": "Focus element in overlay when opened",
        "default": "false"
    },
    "disabled": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether the dropdown menu is disabled",
        "default": "-"
    },
    "destroyPopupOnHide": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether destroy dropdown when hidden",
        "default": "false"
    },
    "dropdownRender": {
        "control": {
            "type": "(menus: ReactNode) => ReactNode"
        },
        "description": "Customize dropdown content",
        "default": "-"
    },
    "getPopupContainer": {
        "control": {
            "type": "(triggerNode: HTMLElement) => HTMLElement"
        },
        "description": "To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. Example on CodePen",
        "default": "() => document.body"
    },
    "menu": {
        "control": {
            "type": "MenuProps"
        },
        "description": "The menu props",
        "default": "-"
    },
    "overlayClassName": {
        "control": {
            "type": "string"
        },
        "description": "The class name of the dropdown root element",
        "default": "-"
    },
    "overlayStyle": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "The style of the dropdown root element",
        "default": "-"
    },
    "placement": {
        "control": {
            "type": "string"
        },
        "description": "Placement of popup menu: bottom bottomLeft bottomRight top topLeft topRight",
        "default": "bottomLeft"
    },
    "trigger": {
        "control": {
            "type": "Array<click|hover|contextMenu>"
        },
        "description": "The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens",
        "default": "[hover]"
    },
    "open": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether the dropdown menu is currently open. Use visible under 4.23.0 (why?)",
        "default": "-"
    },
    "onOpenChange": {
        "control": {
            "type": "(open: boolean, info: { source: 'trigger' | 'menu' }) => void"
        },
        "description": "Called when the open state is changed. Not trigger when hidden by click item. Use onVisibleChange under 4.23.0 (why?)",
        "default": "-"
    }
}