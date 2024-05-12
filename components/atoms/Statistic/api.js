// Statistic Props 

export const api = {
    "decimalSeparator": {
        "control": {
            "type": "string"
        },
        "description": "The decimal separator",
        "default": "."
    },
    "formatter": {
        "control": {
            "type": "(value) => ReactNode"
        },
        "description": "Customize value display logic",
        "default": "-"
    },
    "groupSeparator": {
        "control": {
            "type": "string"
        },
        "description": "Group separator",
        "default": ","
    },
    "loading": {
        "control": {
            "type": "boolean"
        },
        "description": "Loading status of Statistic",
        "default": "false"
    },
    "precision": {
        "control": {
            "type": "number"
        },
        "description": "The precision of input value",
        "default": "-"
    },
    "prefix": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The prefix node of value",
        "default": "-"
    },
    "suffix": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The suffix node of value",
        "default": "-"
    },
    "title": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Display title",
        "default": "-"
    },
    "value": {
        "control": {
            "type": "string | number"
        },
        "description": "Display value",
        "default": "-"
    },
    "valueStyle": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "Set value section style",
        "default": "-"
    }
}