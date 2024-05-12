// Select Props 

export const api = {
    "allowClear": {
        "control": {
            "type": "boolean | { clearIcon?: ReactNode }"
        },
        "description": "Customize clear icon",
        "default": "false"
    },
    "autoClearSearchValue": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags",
        "default": "true"
    },
    "autoFocus": {
        "control": {
            "type": "boolean"
        },
        "description": "Get focus by default",
        "default": "false"
    },
    "defaultActiveFirstOption": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether active first option by default",
        "default": "true"
    },
    "defaultOpen": {
        "control": {
            "type": "boolean"
        },
        "description": "Initial open state of dropdown",
        "default": "-"
    },
    "defaultValue": {
        "control": {
            "type": "string | string[] | number | number[] | LabeledValue | LabeledValue[]"
        },
        "description": "Initial selected option",
        "default": "-"
    },
    "disabled": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether disabled select",
        "default": "false"
    },
    "popupClassName": {
        "control": {
            "type": "string"
        },
        "description": "The className of dropdown menu",
        "default": "-"
    },
    "popupMatchSelectWidth": {
        "control": {
            "type": "boolean | number"
        },
        "description": "Determine whether the popup menu and the select input are the same width. Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll",
        "default": "true"
    },
    "dropdownRender": {
        "control": {
            "type": "(originNode: ReactNode) => ReactNode"
        },
        "description": "Customize dropdown content",
        "default": "-"
    },
    "dropdownStyle": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "The style of dropdown menu",
        "default": "-"
    },
    "fieldNames": {
        "control": {
            "type": "object"
        },
        "description": "Customize node label, value, options\uff0cgroupLabel field name",
        "default": "{ label: label, value: value, options: options, groupLabel: label }"
    },
    "filterOption": {
        "control": {
            "type": "boolean | function(inputValue, option)"
        },
        "description": "If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded",
        "default": "true"
    },
    "filterSort": {
        "control": {
            "type": "(optionA: Option, optionB: Option) => number"
        },
        "description": "Sort function for search options sorting, see Array.sort's compareFunction",
        "default": "-"
    },
    "getPopupContainer": {
        "control": {
            "type": "function(triggerNode)"
        },
        "description": "Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative. Example",
        "default": "() => document.body"
    },
    "labelInValue": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to embed label in value, turn the format of value from string to { value: string, label: ReactNode }",
        "default": "false"
    },
    "listHeight": {
        "control": {
            "type": "number"
        },
        "description": "Config popup height",
        "default": "256"
    },
    "loading": {
        "control": {
            "type": "boolean"
        },
        "description": "Indicate loading state",
        "default": "false"
    },
    "maxCount": {
        "control": {
            "type": "number"
        },
        "description": "The max number of items can be selected, only applies when mode is multiple or tags",
        "default": "-"
    },
    "maxTagCount": {
        "control": {
            "type": "number | responsive"
        },
        "description": "Max tag count to show. responsive will cost render performance",
        "default": "-"
    },
    "maxTagPlaceholder": {
        "control": {
            "type": "ReactNode | function(omittedValues)"
        },
        "description": "Placeholder for not showing tags",
        "default": "-"
    },
    "maxTagTextLength": {
        "control": {
            "type": "number"
        },
        "description": "Max tag text length to show",
        "default": "-"
    },
    "menuItemSelectedIcon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The custom menuItemSelected icon with multiple options",
        "default": "-"
    },
    "mode": {
        "control": {
            "type": "multiple | tags"
        },
        "description": "Set mode of Select",
        "default": "-"
    },
    "notFoundContent": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Specify content to show when no result matches",
        "default": "Not Found"
    },
    "open": {
        "control": {
            "type": "boolean"
        },
        "description": "Controlled open state of dropdown",
        "default": "-"
    },
    "optionFilterProp": {
        "control": {
            "type": "string"
        },
        "description": "Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label",
        "default": "value"
    },
    "optionLabelProp": {
        "control": {
            "type": "string"
        },
        "description": "Which prop value of option will render as content of select. Example",
        "default": "children"
    },
    "options": {
        "control": {
            "type": "{ label, value }[]"
        },
        "description": "Select options. Will get better perf than jsx definition",
        "default": "-"
    },
    "optionRender": {
        "control": {
            "type": "(option: FlattenOptionData<BaseOptionType> , info: { index: number }) => React.ReactNode"
        },
        "description": "Customize the rendering dropdown options",
        "default": "-"
    },
    "placeholder": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Placeholder of select",
        "default": "-"
    },
    "placement": {
        "control": {
            "type": "bottomLeft bottomRight topLeft topRight"
        },
        "description": "The position where the selection box pops up",
        "default": "bottomLeft"
    },
    "removeIcon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The custom remove icon",
        "default": "-"
    },
    "searchValue": {
        "control": {
            "type": "string"
        },
        "description": "The current input \"search\" text",
        "default": "-"
    },
    "showSearch": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether select is searchable",
        "default": "single: false, multiple: true"
    },
    "size": {
        "control": {
            "type": "large | middle | small"
        },
        "description": "Size of Select input",
        "default": "middle"
    },
    "status": {
        "control": {
            "type": "'error' | 'warning'"
        },
        "description": "Set validation status",
        "default": "-"
    },
    "suffixIcon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The custom suffix icon. Customize icon will not response click open to avoid icon designed to do other interactive. You can use pointer-events: none style to bypass",
        "default": "<DownOutlined />"
    },
    "tagRender": {
        "control": {
            "type": "(props) => ReactNode"
        },
        "description": "Customize tag render, only applies when mode is set to multiple or tags",
        "default": "-"
    },
    "labelRender": {
        "control": {
            "type": "(label: ReactNode) => ReactNode"
        },
        "description": "Customize selected label render",
        "default": "-"
    },
    "tokenSeparators": {
        "control": {
            "type": "string[]"
        },
        "description": "Separator used to tokenize, only applies when mode=\"tags\"",
        "default": "-"
    },
    "value": {
        "control": {
            "type": "string | string[] | number | number[] | LabeledValue | LabeledValue[]"
        },
        "description": "Current selected option (considered as a immutable array)",
        "default": "-"
    },
    "variant": {
        "control": {
            "type": "outlined | borderless | filled"
        },
        "description": "Variants of selector",
        "default": "outlined"
    },
    "virtual": {
        "control": {
            "type": "boolean"
        },
        "description": "Disable virtual scroll when set to false",
        "default": "true"
    },
    "onBlur": {
        "control": {
            "type": "function"
        },
        "description": "Called when blur",
        "default": "-"
    },
    "onChange": {
        "control": {
            "type": "function(value, option:Option | Array<Option>)"
        },
        "description": "Called when select an option or input value change",
        "default": "-"
    },
    "onClear": {
        "control": {
            "type": "function"
        },
        "description": "Called when clear",
        "default": "-"
    },
    "onDeselect": {
        "control": {
            "type": "function(value: string | number | LabeledValue)"
        },
        "description": "Called when an option is deselected, param is the selected option's value. Only called for multiple or tags, effective in multiple or tags mode only",
        "default": "-"
    },
    "onDropdownVisibleChange": {
        "control": {
            "type": "function(open)"
        },
        "description": "Called when dropdown open",
        "default": "-"
    },
    "onFocus": {
        "control": {
            "type": "function"
        },
        "description": "Called when focus",
        "default": "-"
    },
    "onInputKeyDown": {
        "control": {
            "type": "function"
        },
        "description": "Called when key pressed",
        "default": "-"
    },
    "onMouseEnter": {
        "control": {
            "type": "function"
        },
        "description": "Called when mouse enter",
        "default": "-"
    },
    "onMouseLeave": {
        "control": {
            "type": "function"
        },
        "description": "Called when mouse leave",
        "default": "-"
    },
    "onPopupScroll": {
        "control": {
            "type": "function"
        },
        "description": "Called when dropdown scrolls",
        "default": "-"
    },
    "onSearch": {
        "control": {
            "type": "function(value: string)"
        },
        "description": "Callback function that is fired when input changed",
        "default": "-"
    },
    "onSelect": {
        "control": {
            "type": "function(value: string | number | LabeledValue, option: Option)"
        },
        "description": "Called when an option is selected, the params are option's value (or key) and option instance",
        "default": "-"
    }
}