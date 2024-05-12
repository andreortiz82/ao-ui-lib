// Spin Props 

export const api = {
    "delay": {
        "control": {
            "type": "number (milliseconds)"
        },
        "description": "Specifies a delay in milliseconds for loading state (prevent flush)",
        "default": "-"
    },
    "indicator": {
        "control": {
            "type": "ReactNode"
        },
        "description": "React node of the spinning indicator",
        "default": "-"
    },
    "size": {
        "control": {
            "type": "string"
        },
        "description": "The size of Spin, options: small, default and large",
        "default": "default"
    },
    "spinning": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether Spin is visible",
        "default": "true"
    },
    "tip": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Customize description content when Spin has children",
        "default": "-"
    },
    "wrapperClassName": {
        "control": {
            "type": "string"
        },
        "description": "The className of wrapper when Spin has children",
        "default": "-"
    },
    "fullscreen": {
        "control": {
            "type": "boolean"
        },
        "description": "Display a backdrop with the Spin component",
        "default": "false"
    }
}