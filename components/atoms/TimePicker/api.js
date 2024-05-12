// TimePicker Props 

export const api = {
    "allowClear": {
        "control": {
            "type": "boolean | { clearIcon?: ReactNode }"
        },
        "description": "Customize clear icon",
        "default": "true"
    },
    "autoFocus": {
        "control": {
            "type": "boolean"
        },
        "description": "If get focus when component mounted",
        "default": "false"
    },
    "cellRender": {
        "control": {
            "type": "(current: number, info: { originNode: React.ReactElement, today: dayjs, range?: 'start' | 'end', subType: 'hour' | 'minute' | 'second' | 'meridiem' }) => React.ReactNode"
        },
        "description": "Custom rendering function for picker cells",
        "default": "-"
    },
    "changeOnScroll": {
        "control": {
            "type": "boolean"
        },
        "description": "Trigger selection when scroll the column",
        "default": "false"
    },
    "className": {
        "control": {
            "type": "string"
        },
        "description": "The className of picker",
        "default": "-"
    },
    "defaultValue": {
        "control": {
            "type": "dayjs"
        },
        "description": "To set default time",
        "default": "-"
    },
    "disabled": {
        "control": {
            "type": "boolean"
        },
        "description": "Determine whether the TimePicker is disabled",
        "default": "false"
    },
    "disabledTime": {
        "control": {
            "type": "DisabledTime"
        },
        "description": "To specify the time that cannot be selected",
        "default": "-"
    },
    "format": {
        "control": {
            "type": "string"
        },
        "description": "To set the time format",
        "default": "HH:mm:ss"
    },
    "getPopupContainer": {
        "control": {
            "type": "function(trigger)"
        },
        "description": "To set the container of the floating layer, while the default is to create a div element in body",
        "default": "-"
    },
    "hideDisabledOptions": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether hide the options that can not be selected",
        "default": "false"
    },
    "hourStep": {
        "control": {
            "type": "number"
        },
        "description": "Interval between hours in picker",
        "default": "1"
    },
    "inputReadOnly": {
        "control": {
            "type": "boolean"
        },
        "description": "Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)",
        "default": "false"
    },
    "minuteStep": {
        "control": {
            "type": "number"
        },
        "description": "Interval between minutes in picker",
        "default": "1"
    },
    "needConfirm": {
        "control": {
            "type": "boolean"
        },
        "description": "Need click confirm button to trigger value change",
        "default": "-"
    },
    "open": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to popup panel",
        "default": "false"
    },
    "placeholder": {
        "control": {
            "type": "string | [string, string]"
        },
        "description": "Display when there's no value",
        "default": "Select a time"
    },
    "placement": {
        "control": {
            "type": "bottomLeft bottomRight topLeft topRight"
        },
        "description": "The position where the selection box pops up",
        "default": "bottomLeft"
    },
    "popupClassName": {
        "control": {
            "type": "string"
        },
        "description": "The className of panel",
        "default": "-"
    },
    "popupStyle": {
        "control": {
            "type": "CSSProperties"
        },
        "description": "The style of panel",
        "default": "-"
    },
    "renderExtraFooter": {
        "control": {
            "type": "() => ReactNode"
        },
        "description": "Called from time picker panel to render some addon to its bottom",
        "default": "-"
    },
    "secondStep": {
        "control": {
            "type": "number"
        },
        "description": "Interval between seconds in picker",
        "default": "1"
    },
    "showNow": {
        "control": {
            "type": "boolean"
        },
        "description": "Whether to show Now button on panel",
        "default": "-"
    },
    "size": {
        "control": {
            "type": "large | middle | small"
        },
        "description": "To determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px",
        "default": "-"
    },
    "status": {
        "control": {
            "type": "'error' | 'warning' | 'success' | 'validating'"
        },
        "description": "Set validation status",
        "default": "-"
    },
    "suffixIcon": {
        "control": {
            "type": "ReactNode"
        },
        "description": "The custom suffix icon",
        "default": "-"
    },
    "use12Hours": {
        "control": {
            "type": "boolean"
        },
        "description": "Display as 12 hours format, with default format h:mm:ss a",
        "default": "false"
    },
    "value": {
        "control": {
            "type": "dayjs"
        },
        "description": "To set time",
        "default": "-"
    },
    "variant": {
        "control": {
            "type": "outlined | borderless | filled"
        },
        "description": "Variants of picker",
        "default": "outlined"
    },
    "onCalendarChange": {
        "control": {
            "type": "function(dates: [dayjs, dayjs], dateStrings: [string, string], info: { range:start|end })"
        },
        "description": "Callback function, can be executed when the start time or the end time of the range is changing. info argument is added in 4.4.0",
        "default": "-"
    },
    "onChange": {
        "control": {
            "type": "function(time: dayjs, timeString: string): void"
        },
        "description": "A callback function, can be executed when the selected time is changing",
        "default": "-"
    },
    "onOpenChange": {
        "control": {
            "type": "(open: boolean) => void"
        },
        "description": "A callback function which will be called while panel opening/closing",
        "default": "-"
    }
}