// List Props 

export const api = {
    "bordered": {
        "control": {
            "type": "boolean"
        },
        "description": "Toggles rendering of the border around the list",
        "default": "false"
    },
    "dataSource": {
        "control": {
            "type": "any[]"
        },
        "description": "DataSource array for list",
        "default": "-"
    },
    "footer": {
        "control": {
            "type": "ReactNode"
        },
        "description": "List footer renderer",
        "default": "-"
    },
    "grid": {
        "control": {
            "type": "object"
        },
        "description": "The grid type of list. You can set grid to something like {gutter: 16, column: 4}",
        "default": "-"
    },
    "header": {
        "control": {
            "type": "ReactNode"
        },
        "description": "List header renderer",
        "default": "-"
    },
    "itemLayout": {
        "control": {
            "type": "horizontal | vertical"
        },
        "description": "The layout of list",
        "default": "horizontal"
    },
    "loading": {
        "control": {
            "type": "boolean | SpinProps (more)"
        },
        "description": "Shows a loading indicator while the contents of the list are being fetched",
        "default": "false"
    },
    "loadMore": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Shows a load more content",
        "default": "-"
    },
    "locale": {
        "control": {
            "type": "object"
        },
        "description": "The i18n text including empty text",
        "default": "{emptyText: No Data}"
    },
    "pagination": {
        "control": {
            "type": "boolean | object"
        },
        "description": "Pagination config, hide it by setting it to false",
        "default": "false"
    },
    "renderItem": {
        "control": {
            "type": "(item) => ReactNode"
        },
        "description": "Customize list item when using dataSource",
        "default": "-"
    },
    "rowKey": {
        "control": {
            "type": "keyof T | (item: T) => React.Key"
        },
        "description": "Item's unique value, could be an Item's key which holds a unique value of type React.Key or function that receives Item and returns a React.Key",
        "default": "\"key\""
    },
    "size": {
        "control": {
            "type": "default | large | small"
        },
        "description": "Size of list",
        "default": "default"
    },
    "split": {
        "control": {
            "type": "boolean"
        },
        "description": "Toggles rendering of the split under the list item",
        "default": "true"
    }
}