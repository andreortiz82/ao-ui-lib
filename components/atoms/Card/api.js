// Card Props 

export const api = {
    "actions": {
        "control": {
            "type": "Array<ReactNode>"
        },
        "description": "The action list, shows at the bottom of the Card",
        "default": "-"
    },
    "activeTabKey": {
        "control": {
            "type": "string"
        },
        "description": "Current TabPane's key",
        "default": "-"
    },
    "bordered": {
        "control": {
            "type": "boolean"
        },
        "description": "Toggles rendering of the border around the card",
        "default": "true"
    },
    "cover": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Card cover",
        "default": "-"
    },
    "defaultActiveTabKey": {
        "control": {
            "type": "string"
        },
        "description": "Initial active TabPane's key, if activeTabKey is not set",
        "default": "The key of first tab"
    },
    "extra": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Content to render in the top-right corner of the card",
        "default": "-"
    },
    "hoverable": {
        "control": {
            "type": "boolean"
        },
        "description": "Lift up when hovering card",
        "default": "false"
    },
    "loading": {
        "control": {
            "type": "boolean"
        },
        "description": "Shows a loading indicator while the contents of the card are being fetched",
        "default": "false"
    },
    "size": {
        "control": {
            "type": "default | small"
        },
        "description": "Size of card",
        "default": "default"
    },
    "tabBarExtraContent": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Extra content in tab bar",
        "default": "-"
    },
    "tabList": {
        "control": {
            "type": "TabItemType[]"
        },
        "description": "List of TabPane's head",
        "default": "-"
    },
    "tabProps": {
        "control": {
            "type": "-"
        },
        "description": "Tabs",
        "default": "-"
    },
    "title": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Card title",
        "default": "-"
    },
    "type": {
        "control": {
            "type": "string"
        },
        "description": "Card style type, can be set to inner or not set",
        "default": "-"
    },
    "classNames": {
        "control": {
            "type": "Record<SemanticDOM, string>"
        },
        "description": "Config Card build-in module's className",
        "default": "-"
    },
    "styles": {
        "control": {
            "type": "Record<SemanticDOM, string>"
        },
        "description": "Config Card build-in module's style",
        "default": "-"
    },
    "onTabChange": {
        "control": {
            "type": "(key) => void"
        },
        "description": "Callback when tab is switched",
        "default": "-"
    }
}