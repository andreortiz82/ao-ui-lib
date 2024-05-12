// Slider Props 

export const api = {
    "autoFocus": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether get focus when component mounted",
        "default": "false"
    },
    "classNames": {
        "control": {
            "type": "Record<SemanticDOM, string>"
        },
        "description": "Semantic structure className",
        "default": "-"
    },
    "defaultValue": {
        "control": {
            "type": "number | [number, number]"
        },
        "description": "The default value of slider. When range is false, use number, otherwise, use [number, number]",
        "default": "0 | [0, 0]"
    },
    "disabled": {
        "control": {
            "type": "boolean"
        },
        "description": "If true, the slider will not be intractable",
        "default": "false"
    },
    "keyboard": {
        "control": {
            "type": "boolean"
        },
        "description": "Support using keyboard to move handlers",
        "default": "true"
    },
    "dots": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether the thumb can drag over tick only",
        "default": "false"
    },
    "included": {
        "control": {
            "type": "boolean"
        },
        "description": "Make effect when marks not null, true means containment and false means coordinative",
        "default": "true"
    },
    "marks": {
        "control": {
            "type": "object"
        },
        "description": "Tick mark of Slider, type of key must be number, and must in closed interval [min, max], each mark can declare its own style",
        "default": "{ number: ReactNode } | { number: { style: CSSProperties, label: ReactNode } }"
    },
    "max": {
        "control": {
            "type": "number"
        },
        "description": "The maximum value the slider can slide to",
        "default": "100"
    },
    "min": {
        "control": {
            "type": "number"
        },
        "description": "The minimum value the slider can slide to",
        "default": "0"
    },
    "range": {
        "control": {
            "type": "boolean"
        },
        "description": "Dual thumb mode",
        "default": "false"
    },
    "reverse": {
        "control": {
            "type": "boolean"
        },
        "description": "Reverse the component",
        "default": "false"
    },
    "step": {
        "control": {
            "type": "number | null"
        },
        "description": "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When marks no null, step can be null",
        "default": "1"
    },
    "styles": {
        "control": {
            "type": "Record<SemanticDOM, React.CSSProperties>"
        },
        "description": "Semantic structure style",
        "default": "-"
    },
    "tooltip": {
        "control": {
            "type": "tooltip"
        },
        "description": "The tooltip relate props",
        "default": "-"
    },
    "value": {
        "control": {
            "type": "number | [number, number]"
        },
        "description": "The value of slider. When range is false, use number, otherwise, use [number, number]",
        "default": "-"
    },
    "vertical": {
        "control": {
            "type": "boolean"
        },
        "description": "If true, the slider will be vertical",
        "default": "false"
    },
    "onChangeComplete": {
        "control": {
            "type": "(value) => void"
        },
        "description": "Fire when mouseup or keyup is fired",
        "default": "-"
    },
    "onChange": {
        "control": {
            "type": "(value) => void"
        },
        "description": "Callback function that is fired when the user changes the slider's value",
        "default": "-"
    }
}