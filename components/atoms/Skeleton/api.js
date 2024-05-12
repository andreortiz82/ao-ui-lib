// Skeleton Props 

export const api = {
    "active": {
        "control": {
            "type": "boolean"
        },
        "description": "Show animation effect",
        "default": "false"
    },
    "avatar": {
        "control": {
            "type": "boolean | SkeletonAvatarProps"
        },
        "description": "Show avatar placeholder",
        "default": "false"
    },
    "loading": {
        "control": {
            "type": "boolean"
        },
        "description": "Display the skeleton when true",
        "default": "-"
    },
    "paragraph": {
        "control": {
            "type": "boolean | SkeletonParagraphProps"
        },
        "description": "Show paragraph placeholder",
        "default": "true"
    },
    "round": {
        "control": {
            "type": "boolean"
        },
        "description": "Show paragraph and title radius when true",
        "default": "false"
    },
    "title": {
        "control": {
            "type": "boolean | SkeletonTitleProps"
        },
        "description": "Show title placeholder",
        "default": "true"
    }
}