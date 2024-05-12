// Alert Props 

export const api = {
    "action": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The action of Alert",
        "default": "-"
    },
    "afterClose": {
        "control": {
            "type": "() => void"
        },
        "description": "Called when close animation is finished",
        "default": "-"
    },
    "banner": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to show as banner",
        "default": "false"
    },
    "closable": {
        "control": {
            "type": "boolean | ({ closeIcon?: React.ReactNode } & React.AriaAttributes)"
        },
        "description": "The config of closable, >=5.15.0: support aria-*",
        "default": "false"
    },
    "description": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Additional content of Alert",
        "default": "-"
    },
    "icon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Custom icon, effective when showIcon is true",
        "default": "-"
    },
    "message": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Content of Alert",
        "default": "-"
    },
    "showIcon": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to show icon",
        "default": "false, in banner mode default is true"
    },
    "type": {
        "control": {
            "type": "string"
        },
        "description": "Type of Alert styles, options: success, info, warning, error",
        "default": "info, in banner mode default is warning"
    },
    "onClose": {
        "control": {
            "type": "(e: MouseEvent) => void"
        },
        "description": "Callback when Alert is closed",
        "default": "-"
    }
}