// Drawer Props 

export const api = {
    "autoFocus": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether Drawer should get focused after open",
        "default": "true"
    },
    "afterOpenChange": {
        "control": {
            "type": "function(open)"
        },
        "description": "Callback after the animation ends when switching drawers",
        "default": "-"
    },
    "className": {
        "control": {
            "type": "string"
        },
        "description": "Config Drawer Panel className. Use rootClassName if want to config top DOM style",
        "default": "-"
    },
    "classNames": {
        "control": {
            "type": "Record<SemanticDOM, string>"
        },
        "description": "Semantic structure className",
        "default": "-"
    },
    "closeIcon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Custom close icon. 5.7.0: close button will be hidden when setting to null or false",
        "default": "<CloseOutlined />"
    },
    "destroyOnClose": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to unmount child components on closing drawer or not",
        "default": "false"
    },
    "extra": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Extra actions area at corner",
        "default": "-"
    },
    "footer": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The footer for Drawer",
        "default": "-"
    },
    "forceRender": {
        "control": {
            "type": "boolean"
        },
        "description": "Pre-render Drawer component forcibly",
        "default": "false"
    },
    "getContainer": {
        "control": {
            "type": "HTMLElement | () => HTMLElement | Selectors | false"
        },
        "description": "mounted node and display window for Drawer",
        "default": "body"
    },
    "headerStyle": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "Style of the drawer header part",
        "default": "-"
    },
    "height": {
        "control": {
            "type": "string | number"
        },
        "description": "Placement is top or bottom, height of the Drawer dialog",
        "default": "378"
    },
    "keyboard": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether support press esc to close",
        "default": "true"
    },
    "mask": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to show mask or not",
        "default": "true"
    },
    "maskClosable": {
        "control": {
            "type": "boolean"
        },
        "description": "Clicking on the mask (area outside the Drawer) to close the Drawer or not",
        "default": "true"
    },
    "placement": {
        "control": {
            "type": "top | right | bottom | left"
        },
        "description": "The placement of the Drawer",
        "default": "right"
    },
    "push": {
        "control": {
            "type": "boolean | { distance: string | number }"
        },
        "description": "Nested drawers push behavior",
        "default": "{ distance: 180 }"
    },
    "rootStyle": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "Style of wrapper element which contains mask compare to style",
        "default": "-"
    },
    "style": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "Style of Drawer panel. Use bodyStyle if want to config body only",
        "default": "-"
    },
    "styles": {
        "control": {
            "type": "Record<SemanticDOM, CSSProperties>"
        },
        "description": "Semantic structure style",
        "default": "-"
    },
    "size": {
        "control": {
            "type": "'default' | 'large'"
        },
        "description": "preset size of drawer, default 378px and large 736px",
        "default": "'default'"
    },
    "title": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The title for Drawer",
        "default": "-"
    },
    "loading": {
        "control": {
            "type": "boolean | Omit<SpinProp, 'fullScreen' | 'tip'>"
        },
        "description": "Show spinning indicator",
        "default": "false"
    },
    "open": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether the Drawer dialog is visible or not",
        "default": "false"
    },
    "width": {
        "control": {
            "type": "string | number"
        },
        "description": "Width of the Drawer dialog",
        "default": "378"
    },
    "zIndex": {
        "control": {
            "type": "number"
        },
        "description": "The z-index of the Drawer",
        "default": "1000"
    },
    "onClose": {
        "control": {
            "type": "function(e)"
        },
        "description": "Specify a callback that will be called when a user clicks mask, close button or Cancel button",
        "default": "-"
    }
}