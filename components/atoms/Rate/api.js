// Rate Props 

export const api = {
    "allowClear": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to allow clear when click again",
        "default": "true"
    },
    "allowHalf": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to allow semi selection",
        "default": "false"
    },
    "autoFocus": {
        "control": {
            "type": "boolean"
        },
        "description": "If get focus when component mounted",
        "default": "false"
    },
    "character": {
        "control": {
            "type": "ReactNode | (RateProps) => ReactNode"
        },
        "description": "The custom character of rate",
        "default": "<StarFilled />"
    },
    "className": {
        "control": {
            "type": "string"
        },
        "description": "The custom class name of rate",
        "default": "-"
    },
    "count": {
        "control": {
            "type": "number"
        },
        "description": "Star count",
        "default": "5"
    },
    "defaultValue": {
        "control": {
            "type": "number"
        },
        "description": "The default value",
        "default": "0"
    },
    "disabled": {
        "control": {
            "type": "boolean"
        },
        "description": "If read only, unable to interact",
        "default": "false"
    },
    "style": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "The custom style object of rate",
        "default": "-"
    },
    "tooltips": {
        "control": {
            "type": "string[]"
        },
        "description": "Customize tooltip by each character",
        "default": "-"
    },
    "value": {
        "control": {
            "type": "number"
        },
        "description": "The current value",
        "default": "-"
    },
    "onBlur": {
        "control": {
            "type": "function()"
        },
        "description": "Callback when component lose focus",
        "default": "-"
    },
    "onChange": {
        "control": {
            "type": "function(value: number)"
        },
        "description": "Callback when select value",
        "default": "-"
    },
    "onFocus": {
        "control": {
            "type": "function()"
        },
        "description": "Callback when component get focus",
        "default": "-"
    },
    "onHoverChange": {
        "control": {
            "type": "function(value: number)"
        },
        "description": "Callback when hover item",
        "default": "-"
    },
    "onKeyDown": {
        "control": {
            "type": "function(event)"
        },
        "description": "Callback when keydown on component",
        "default": "-"
    }
}