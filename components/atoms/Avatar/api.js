// Avatar Props 

export const api = {
    "alt": {
        "control": {
            "type": "string"
        },
        "description": "This attribute defines the alternative text describing the image",
        "default": "-"
    },
    "gap": {
        "control": {
            "type": "number"
        },
        "description": "Letter type unit distance between left and right sides",
        "default": "4"
    },
    "icon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Custom icon type for an icon avatar",
        "default": "-"
    },
    "shape": {
        "control": {
            "type": "circle | square"
        },
        "description": "The shape of avatar",
        "default": "circle"
    },
    "size": {
        "control": {
            "type": "number | large | small | default | { xs: number, sm: number, ...}"
        },
        "description": "The size of the avatar",
        "default": "default"
    },
    "src": {
        "control": {
            "type": "string | ReactNode"
        },
        "description": "The address of the image for an image avatar or image element",
        "default": "-"
    },
    "srcSet": {
        "control": {
            "type": "string"
        },
        "description": "A list of sources to use for different screen resolutions",
        "default": "-"
    },
    "draggable": {
        "control": {
            "type": "boolean | 'true' | 'false'"
        },
        "description": "Whether the picture is allowed to be dragged",
        "default": "true"
    },
    "crossOrigin": {
        "control": {
            "type": "'anonymous' | 'use-credentials' | ''"
        },
        "description": "CORS settings attributes",
        "default": "-"
    },
    "onError": {
        "control": {
            "type": "() => boolean"
        },
        "description": "Handler when img load error, return false to prevent default fallback behavior",
        "default": "-"
    }
}