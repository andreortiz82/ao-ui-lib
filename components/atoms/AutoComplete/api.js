// AutoComplete Props 

export const api = {
    "allowClear": {
        "control": {
            "type": "boolean | { clearIcon?: ReactNode }"
        },
        "description": "Show clear button",
        "default": "false"
    },
    "autoFocus": {
        "control": {
            "type": "boolean"
        },
        "description": "If get focus when component mounted",
        "default": "false"
    },
    "backfill": {
        "control": {
            "type": "boolean"
        },
        "description": "If backfill selected item the input when using keyboard",
        "default": "false"
    },
    "children (for customize input element)": {
        "control": {
            "type": "HTMLInputElement | HTMLTextAreaElement | React.ReactElement<InputProps>"
        },
        "description": "Customize input element",
        "default": "<Input />"
    },
    "children (for dataSource)": {
        "control": {
            "type": "React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>"
        },
        "description": "Data source to auto complete",
        "default": "-"
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
            "type": "string"
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
    "dropdownMatchSelectWidth": {
        "control": {
            "type": "boolean | number"
        },
        "description": "Determine whether the dropdown menu and the select input are the same width. Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll",
        "default": "true"
    },
    "filterOption": {
        "control": {
            "type": "boolean | function(inputValue, option)"
        },
        "description": "If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded",
        "default": "true"
    },
    "notFoundContent": {
        "control": {
            "type": "ReactNode"
        },
        "description": "Specify content to show when no result matches",
        "default": "-"
    },
    "open": {
        "control": {
            "type": "boolean"
        },
        "description": "Controlled open state of dropdown",
        "default": "-"
    },
    "options": {
        "control": {
            "type": "{ label, value }[]"
        },
        "description": "Select options. Will get better perf than jsx definition",
        "default": "-"
    },
    "placeholder": {
        "control": {
            "type": "string"
        },
        "description": "The placeholder of input",
        "default": "-"
    },
    "status": {
        "control": {
            "type": "'error' | 'warning'"
        },
        "description": "Set validation status",
        "default": "-"
    },
    "value": {
        "control": {
            "type": "string"
        },
        "description": "Selected option",
        "default": "-"
    },
    "variant": {
        "control": {
            "type": "outlined | borderless | filled"
        },
        "description": "Variants of input",
        "default": "outlined"
    },
    "onBlur": {
        "control": {
            "type": "function()"
        },
        "description": "Called when leaving the component",
        "default": "-"
    },
    "onChange": {
        "control": {
            "type": "function(value)"
        },
        "description": "Called when selecting an option or changing an input value",
        "default": "-"
    },
    "onDropdownVisibleChange": {
        "control": {
            "type": "function(open)"
        },
        "description": "Call when dropdown open",
        "default": "-"
    },
    "onFocus": {
        "control": {
            "type": "function()"
        },
        "description": "Called when entering the component",
        "default": "-"
    },
    "onSearch": {
        "control": {
            "type": "function(value)"
        },
        "description": "Called when searching items",
        "default": "-"
    },
    "onSelect": {
        "control": {
            "type": "function(value, option)"
        },
        "description": "Called when a option is selected. param is option's value and option instance",
        "default": "-"
    },
    "onClear": {
        "control": {
            "type": "function"
        },
        "description": "Called when clear",
        "default": "-"
    }
}