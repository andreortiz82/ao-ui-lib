// Watermark Props 

export const api = {
    "width": {
        "control": {
            "type": "number"
        },
        "description": "The width of the watermark, the default value of content is its own width",
        "default": "120"
    },
    "height": {
        "control": {
            "type": "number"
        },
        "description": "The height of the watermark, the default value of content is its own height",
        "default": "64"
    },
    "inherit": {
        "control": {
            "type": "boolean"
        },
        "description": "Pass the watermark to the pop-up component such as Modal, Drawer",
        "default": "true"
    },
    "rotate": {
        "control": {
            "type": "number"
        },
        "description": "When the watermark is drawn, the rotation Angle, unit \u00b0",
        "default": "-22"
    },
    "zIndex": {
        "control": {
            "type": "number"
        },
        "description": "The z-index of the appended watermark element",
        "default": "9"
    },
    "image": {
        "control": {
            "type": "string"
        },
        "description": "Image source, it is recommended to export 2x or 3x image, high priority (support base64 format)",
        "default": "-"
    },
    "content": {
        "control": {
            "type": "string | string[]"
        },
        "description": "Watermark text content",
        "default": "-"
    },
    "font": {
        "control": {
            "type": "Font"
        },
        "description": "Text style",
        "default": "Font"
    },
    "gap": {
        "control": {
            "type": "[number, number]"
        },
        "description": "The spacing between watermarks",
        "default": "[100, 100]"
    },
    "offset": {
        "control": {
            "type": "[number, number]"
        },
        "description": "The offset of the watermark from the upper left corner of the container. The default is gap/2",
        "default": "[gap[0]/2, gap[1]/2]"
    }
}