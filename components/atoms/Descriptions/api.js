// Descriptions Props 

export const api = {
    "bordered": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to display the border",
        "default": "false"
    },
    "colon": {
        "control": {
            "type": "boolean"
        },
        "description": "Change default props colon value of Descriptions.Item",
        "default": "true"
    },
    "column": {
        "control": {
            "type": "number | Record<Breakpoint, number>"
        },
        "description": "The number of DescriptionItems in a row,could be a number or a object like { xs: 8, sm: 16, md: 24},(Only set bordered={true} to take effect)",
        "default": "3"
    },
    "contentStyle": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "Customize content style",
        "default": "-"
    },
    "extra": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The action area of the description list, placed at the top-right",
        "default": "-"
    },
    "items": {
        "control": {
            "type": "DescriptionsItem[]"
        },
        "description": "Describe the contents of the list item",
        "default": "-"
    },
    "labelStyle": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "Customize label style",
        "default": "-"
    },
    "layout": {
        "control": {
            "type": "horizontal | vertical"
        },
        "description": "Define description layout",
        "default": "horizontal"
    },
    "size": {
        "control": {
            "type": "default | middle | small"
        },
        "description": "Set the size of the list. Can be set to middle,small, or not filled",
        "default": "-"
    },
    "title": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The title of the description list, placed at the top",
        "default": "-"
    }
}