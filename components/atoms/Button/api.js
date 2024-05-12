// Button Props 

export const api = {
    "autoInsertSpace": {
        "control": {
            "type": "boolean"
        },
        "description": "We add a space between two Chinese characters by default, which can be removed by setting autoInsertSpace to false.",
        "default": "true"
    },
    "block": {
        "control": {
            "type": "boolean"
        },
        "description": "Option to fit button width to its parent width",
        "default": "false"
    },
    "classNames": {
        "control": {
            "type": "Record<SemanticDOM, string>"
        },
        "description": "Semantic DOM class",
        "default": "-"
    },
    "danger": {
        "control": {
            "type": "boolean"
        },
        "description": "Set the danger status of button",
        "default": "false"
    },
    "disabled": {
        "control": {
            "type": "boolean"
        },
        "description": "Disabled state of button",
        "default": "false"
    },
    "ghost": {
        "control": {
            "type": "boolean"
        },
        "description": "Make background transparent and invert text and border colors",
        "default": "false"
    },
    "href": {
        "control": {
            "type": "string"
        },
        "description": "Redirect url of link button",
        "default": "-"
    },
    "htmlType": {
        "control": {
            "type": "string"
        },
        "description": "Set the original html type of button, see: MDN",
        "default": "button"
    },
    "icon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Set the icon component of button",
        "default": "-"
    },
    "iconPosition": {
        "control": {
            "type": "start | end"
        },
        "description": "Set the icon position of button",
        "default": "start"
    },
    "loading": {
        "control": {
            "type": "boolean | { delay: number }"
        },
        "description": "Set the loading status of button",
        "default": "false"
    },
    "shape": {
        "control": {
            "type": "default | circle | round"
        },
        "description": "Can be set button shape",
        "default": "default"
    },
    "size": {
        "control": {
            "type": "large | middle | small"
        },
        "description": "Set the size of button",
        "default": "middle"
    },
    "styles": {
        "control": {
            "type": "Record<SemanticDOM, CSSProperties>"
        },
        "description": "Semantic DOM style",
        "default": "-"
    },
    "target": {
        "control": {
            "type": "string"
        },
        "description": "Same as target attribute of a, works when href is specified",
        "default": "-"
    },
    "type": {
        "control": {
            "type": "primary | dashed | link | text | default"
        },
        "description": "Set button type",
        "default": "default"
    },
    "onClick": {
        "control": {
            "type": "(event: React.MouseEvent<HTMLElement, MouseEvent>) => void"
        },
        "description": "Set the handler to handle click event",
        "default": "-"
    }
}