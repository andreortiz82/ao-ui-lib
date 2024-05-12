// ColorPicker Props 

export const api = {
    "allowClear": {
        "control": {
            "type": "boolean"
        },
        "description": "Allow clearing color selected",
        "default": "false"
    },
    "arrow": {
        "control": {
            "type": "boolean | { pointAtCenter: boolean }"
        },
        "description": "Configuration for popup arrow",
        "default": "true"
    },
    "children": {
        "control": {
            "type": "React.ReactNode"
        },
        "description": "Trigger of ColorPicker",
        "default": "-"
    },
    "defaultValue": {
        "control": {
            "type": "string | Color"
        },
        "description": "Default value of color",
        "default": "-"
    },
    "defaultFormat": {
        "control": {
            "type": "rgb | hex | hsb"
        },
        "description": "Default format of color",
        "default": "-"
    },
    "disabled": {
        "control": {
            "type": "boolean"
        },
        "description": "Disable ColorPicker",
        "default": "-"
    },
    "disabledAlpha": {
        "control": {
            "type": "boolean"
        },
        "description": "Disable Alpha",
        "default": "-"
    },
    "destroyTooltipOnHide": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether destroy popover when hidden",
        "default": "false"
    },
    "format": {
        "control": {
            "type": "rgb | hex | hsb"
        },
        "description": "Format of color",
        "default": "hex"
    },
    "open": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to show popup",
        "default": "-"
    },
    "presets": {
        "control": {
            "type": "{ label: ReactNode, colors: Array<string | Color>, defaultOpen?: boolean }[]"
        },
        "description": "Preset colors",
        "default": "-"
    },
    "placement": {
        "control": {
            "type": "top | topLeft | topRight | bottom | bottomLeft | bottomRight"
        },
        "description": "Placement of popup",
        "default": "bottomLeft"
    },
    "panelRender": {
        "control": {
            "type": "(panel: React.ReactNode, extra: { components: { Picker: FC; Presets: FC } }) => React.ReactNode"
        },
        "description": "Custom Render Panel",
        "default": "-"
    },
    "showText": {
        "control": {
            "type": "boolean | (color: Color) => React.ReactNode"
        },
        "description": "Show color text",
        "default": "-"
    },
    "size": {
        "control": {
            "type": "large | middle | small"
        },
        "description": "Setting the trigger size",
        "default": "middle"
    },
    "trigger": {
        "control": {
            "type": "hover | click"
        },
        "description": "ColorPicker trigger mode",
        "default": "click"
    },
    "value": {
        "control": {
            "type": "string | Color"
        },
        "description": "Value of color",
        "default": "-"
    },
    "onChange": {
        "control": {
            "type": "(value: Color, hex: string) => void"
        },
        "description": "Callback when value is changed",
        "default": "-"
    },
    "onChangeComplete": {
        "control": {
            "type": "(value: Color) => void"
        },
        "description": "Called when color pick ends",
        "default": "-"
    },
    "onFormatChange": {
        "control": {
            "type": "(format: 'hex' | 'rgb' | 'hsb') => void"
        },
        "description": "Callback when format is changed",
        "default": "-"
    },
    "onOpenChange": {
        "control": {
            "type": "(open: boolean) => void"
        },
        "description": "Callback when open is changed",
        "default": "-"
    },
    "onClear": {
        "control": {
            "type": "() => void"
        },
        "description": "Called when clear",
        "default": "-"
    }
}