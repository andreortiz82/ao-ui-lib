// Popconfirm Props 

export const api = {
    "cancelButtonProps": {
        "control": {
            "type": "ButtonProps"
        },
        "description": "The cancel button props",
        "default": "-"
    },
    "cancelText": {
        "control": {
            "type": "string"
        },
        "description": "The text of the Cancel button",
        "default": "Cancel"
    },
    "disabled": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether show popconfirm when click its childrenNode",
        "default": "false"
    },
    "icon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Customize icon of confirmation",
        "default": "<ExclamationCircle />"
    },
    "okButtonProps": {
        "control": {
            "type": "ButtonProps"
        },
        "description": "The ok button props",
        "default": "-"
    },
    "okText": {
        "control": {
            "type": "string"
        },
        "description": "The text of the Confirm button",
        "default": "OK"
    },
    "okType": {
        "control": {
            "type": "string"
        },
        "description": "Button type of the Confirm button",
        "default": "primary"
    },
    "showCancel": {
        "control": {
            "type": "boolean"
        },
        "description": "Show cancel button",
        "default": "true"
    },
    "title": {
        "control": {
            "type": "ReactNode | () => ReactNode"
        },
        "description": "The title of the confirmation box",
        "default": "-"
    },
    "description": {
        "control": {
            "type": "ReactNode | () => ReactNode"
        },
        "description": "The description of the confirmation box title",
        "default": "-"
    },
    "onCancel": {
        "control": {
            "type": "function(e)"
        },
        "description": "A callback of cancel",
        "default": "-"
    },
    "onConfirm": {
        "control": {
            "type": "function(e)"
        },
        "description": "A callback of confirmation",
        "default": "-"
    },
    "onPopupClick": {
        "control": {
            "type": "function(e)"
        },
        "description": "A callback of popup click",
        "default": "-"
    }
}