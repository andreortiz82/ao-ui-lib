// Breadcrumb Props 

export const api = {
    "itemRender": {
        "control": {
            "type": "(route, params, routes, paths) => ReactNode"
        },
        "description": "Custom item renderer",
        "default": "-"
    },
    "params": {
        "control": {
            "type": "object"
        },
        "description": "Routing parameters",
        "default": "-"
    },
    "items": {
        "control": {
            "type": "ItemType[]"
        },
        "description": "The routing stack information of router",
        "default": "-"
    },
    "separator": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Custom separator",
        "default": "/"
    }
}