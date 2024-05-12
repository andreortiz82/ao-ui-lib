// InputNumber Props 

export const api = {
    "addonAfter": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The label text displayed after (on the right side of) the input field",
        "default": "-"
    },
    "addonBefore": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The label text displayed before (on the left side of) the input field",
        "default": "-"
    },
    "autoFocus": {
        "control": {
            "type": "boolean"
        },
        "description": "If get focus when component mounted",
        "default": "false"
    },
    "changeOnBlur": {
        "control": {
            "type": "boolean"
        },
        "description": "Trigger onChange when blur. e.g. reset value in range by blur",
        "default": "true"
    },
    "changeOnWheel": {
        "control": {
            "type": "boolean"
        },
        "description": "Allow control with mouse wheel",
        "default": "-"
    },
    "controls": {
        "control": {
            "type": "boolean | { upIcon?: React.ReactNode; downIcon?: React.ReactNode; }"
        },
        "description": "Whether to show +- controls, or set custom arrows icon",
        "default": "-"
    },
    "decimalSeparator": {
        "control": {
            "type": "string"
        },
        "description": "Decimal separator",
        "default": "-"
    },
    "placeholder": {
        "control": {
            "type": "string"
        },
        "description": "placeholder",
        "default": "-"
    },
    "defaultValue": {
        "control": {
            "type": "number"
        },
        "description": "The initial value",
        "default": "-"
    },
    "disabled": {
        "control": {
            "type": "boolean"
        },
        "description": "If disable the input",
        "default": "false"
    },
    "formatter": {
        "control": {
            "type": "function(value: number | string, info: { userTyping: boolean, input: string }): string"
        },
        "description": "Specifies the format of the value presented",
        "default": "-"
    },
    "keyboard": {
        "control": {
            "type": "boolean"
        },
        "description": "If enable keyboard behavior",
        "default": "true"
    },
    "max": {
        "control": {
            "type": "number"
        },
        "description": "The max value",
        "default": "Number.MAX_SAFE_INTEGER"
    },
    "min": {
        "control": {
            "type": "number"
        },
        "description": "The min value",
        "default": "Number.MIN_SAFE_INTEGER"
    },
    "parser": {
        "control": {
            "type": "function(string): number"
        },
        "description": "Specifies the value extracted from formatter",
        "default": "-"
    },
    "precision": {
        "control": {
            "type": "number"
        },
        "description": "The precision of input value. Will use formatter when config of formatter",
        "default": "-"
    },
    "readOnly": {
        "control": {
            "type": "boolean"
        },
        "description": "If readonly the input",
        "default": "false"
    },
    "status": {
        "control": {
            "type": "'error' | 'warning'"
        },
        "description": "Set validation status",
        "default": "-"
    },
    "prefix": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The prefix icon for the Input",
        "default": "-"
    },
    "size": {
        "control": {
            "type": "large | middle | small"
        },
        "description": "The height of input box",
        "default": "-"
    },
    "step": {
        "control": {
            "type": "number | string"
        },
        "description": "The number to which the current value is increased or decreased. It can be an integer or decimal",
        "default": "1"
    },
    "stringMode": {
        "control": {
            "type": "boolean"
        },
        "description": "Set value as string to support high precision decimals. Will return string value by onChange",
        "default": "false"
    },
    "value": {
        "control": {
            "type": "number"
        },
        "description": "The current value",
        "default": "-"
    },
    "variant": {
        "control": {
            "type": "outlined | borderless | filled"
        },
        "description": "Variants of Input",
        "default": "outlined"
    },
    "onChange": {
        "control": {
            "type": "function(value: number | string | null)"
        },
        "description": "The callback triggered when the value is changed",
        "default": "-"
    },
    "onPressEnter": {
        "control": {
            "type": "function(e)"
        },
        "description": "The callback function that is triggered when Enter key is pressed",
        "default": "-"
    },
    "onStep": {
        "control": {
            "type": "(value: number, info: { offset: number, type: 'up' | 'down' }) => void"
        },
        "description": "The callback function that is triggered when click up or down buttons",
        "default": "-"
    }
}