// Collapse Props 

export const api = {
    "accordion": {
        "control": {
            "type": "boolean"
        },
        "description": "If true, Collapse renders as Accordion",
        "default": "false"
    },
    "activeKey": {
        "control": {
            "type": "string[] | string  number[] | number"
        },
        "description": "Key of the active panel",
        "default": "No default value. In accordion mode, it's the key of the first panel"
    },
    "bordered": {
        "control": {
            "type": "boolean"
        },
        "description": "Toggles rendering of the border around the collapse block",
        "default": "true"
    },
    "collapsible": {
        "control": {
            "type": "header | icon | disabled"
        },
        "description": "Specify whether the panels of children be collapsible or the trigger area of collapsible",
        "default": "-"
    },
    "defaultActiveKey": {
        "control": {
            "type": "string[] | string  number[] | number"
        },
        "description": "Key of the initial active panel",
        "default": "-"
    },
    "destroyInactivePanel": {
        "control": {
            "type": "boolean"
        },
        "description": "Destroy Inactive Panel",
        "default": "false"
    },
    "expandIcon": {
        "control": {
            "type": "(panelProps) => ReactNode"
        },
        "description": "Allow to customize collapse icon",
        "default": "-"
    },
    "expandIconPosition": {
        "control": {
            "type": "start | end"
        },
        "description": "Set expand icon position",
        "default": "-"
    },
    "ghost": {
        "control": {
            "type": "boolean"
        },
        "description": "Make the collapse borderless and its background transparent",
        "default": "false"
    },
    "size": {
        "control": {
            "type": "large | middle | small"
        },
        "description": "Set the size of collapse",
        "default": "middle"
    },
    "onChange": {
        "control": {
            "type": "function"
        },
        "description": "Callback function executed when active panel is changed",
        "default": "-"
    },
    "items": {
        "control": {
            "type": "ItemType"
        },
        "description": "collapse items content",
        "default": "-"
    }
}