// Result Props 

export const api = {
    "extra": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Operating area",
        "default": "-"
    },
    "icon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Custom back icon",
        "default": "-"
    },
    "status": {
        "control": {
            "type": "success | error | info | warning | 404 | 403 | 500"
        },
        "description": "Result status, decide icons and colors",
        "default": "info"
    },
    "subTitle": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The subTitle",
        "default": "-"
    },
    "title": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The title",
        "default": "-"
    }
}