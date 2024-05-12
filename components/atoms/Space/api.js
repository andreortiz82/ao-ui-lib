// Space Props 

export const api = {
    "align": {
        "control": {
            "type": "start | end |center |baseline"
        },
        "description": "Align items",
        "default": "-"
    },
    "classNames": {
        "control": {
            "type": "Record<SemanticDOM, string>"
        },
        "description": "Semantic className",
        "default": "-"
    },
    "direction": {
        "control": {
            "type": "vertical | horizontal"
        },
        "description": "The space direction",
        "default": "horizontal"
    },
    "size": {
        "control": {
            "type": "Size | Size[]"
        },
        "description": "The space size",
        "default": "small"
    },
    "split": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Set split",
        "default": "-"
    },
    "styles": {
        "control": {
            "type": "Record<SemanticDOM, CSSProperties>"
        },
        "description": "Semantic style",
        "default": "-"
    },
    "wrap": {
        "control": {
            "type": "boolean"
        },
        "description": "Auto wrap line, when horizontal effective",
        "default": "false"
    }
}