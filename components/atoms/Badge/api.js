// Badge Props 

export const api = {
    "color": {
        "control": {
            "type": "string"
        },
        "description": "Customize Badge dot color",
        "default": "-"
    },
    "count": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Number to show in badge",
        "default": "-"
    },
    "classNames": {
        "control": {
            "type": "Record<SemanticDOM, string>"
        },
        "description": "Semantic DOM class",
        "default": "-"
    },
    "dot": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to display a red dot instead of count",
        "default": "false"
    },
    "offset": {
        "control": {
            "type": "[number, number]"
        },
        "description": "Set offset of the badge dot",
        "default": "-"
    },
    "overflowCount": {
        "control": {
            "type": "number"
        },
        "description": "Max count to show",
        "default": "99"
    },
    "showZero": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to show badge when count is zero",
        "default": "false"
    },
    "size": {
        "control": {
            "type": "default | small"
        },
        "description": "If count is set, size sets the size of badge",
        "default": "-"
    },
    "status": {
        "control": {
            "type": "success | processing | default | error | warning"
        },
        "description": "Set Badge as a status dot",
        "default": "-"
    },
    "styles": {
        "control": {
            "type": "Record<SemanticDOM, CSSProperties>"
        },
        "description": "Semantic DOM style",
        "default": "-"
    },
    "text": {
        "control": {
            "type": "ReactNode"
        },
        "description": "If status is set, text sets the display text of the status dot",
        "default": "-"
    },
    "title": {
        "control": {
            "type": "string"
        },
        "description": "Text to show when hovering over the badge",
        "default": "-"
    }
}