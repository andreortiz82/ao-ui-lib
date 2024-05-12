// Tag Props 

export const api = {
    "closeIcon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Custom close icon. 5.7.0: close button will be hidden when setting to null or false",
        "default": "false"
    },
    "color": {
        "control": {
            "type": "string"
        },
        "description": "Color of the Tag",
        "default": "-"
    },
    "icon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Set the icon of tag",
        "default": "-"
    },
    "bordered": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether has border style",
        "default": "true"
    },
    "onClose": {
        "control": {
            "type": "(e: React.MouseEvent<HTMLElement, MouseEvent>) => void"
        },
        "description": "Callback executed when tag is closed",
        "default": "-"
    }
}