// Form Props

export const api = {
  colon: {
    control: {
      type: "boolean",
    },
    description:
      "Configure the default value of colon for Form.Item. Indicates whether the colon after the label is displayed (only effective when prop layout is horizontal)",
    default: "true",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description:
      "Set form component disable, only available for antd components",
    default: "false",
  },
  component: {
    control: {
      type: "ComponentType | false",
    },
    description:
      "Set the Form rendering element. Do not create a DOM node for false",
    default: "form",
  },
  fields: {
    control: {
      type: "FieldData[]",
    },
    description:
      "Control of form fields through state management (such as redux). Not recommended for non-strong demand. View example",
    default: "-",
  },
  form: {
    control: {
      type: "FormInstance",
    },
    description:
      "Form control instance created by Form.useForm(). Automatically created when not provided",
    default: "-",
  },
  feedbackIcons: {
    control: {
      type: "FeedbackIcons",
    },
    description:
      "Can be passed custom icons while Form.Item element has hasFeedback",
    default: "-",
  },
  initialValues: {
    control: {
      type: "object",
    },
    description: "Set value by Form initialization or reset",
    default: "-",
  },
  labelAlign: {
    control: {
      type: "left | right",
    },
    description: "The text align of label of all items",
    default: "right",
  },
  labelWrap: {
    control: {
      type: "boolean",
    },
    description: "whether label can be wrap",
    default: "false",
  },
  labelCol: {
    control: {
      type: "object",
    },
    description:
      "Label layout, like <Col> component. Set span offset value like {span: 3, offset: 12} or sm: {span: 3, offset: 12}",
    default: "-",
  },
  layout: {
    control: {
      type: "horizontal | vertical | inline",
    },
    description: "Form layout",
    default: "horizontal",
  },
  name: {
    control: {
      type: "string",
    },
    description: "Form name. Will be the prefix of Field id",
    default: "-",
  },
  preserve: {
    control: {
      type: "boolean",
    },
    description:
      "Keep field value even when field removed. You can get the preserve field value by getFieldsValue(true)",
    default: "true",
  },
  requiredMark: {
    control: {
      type: "boolean | optional | ((label: ReactNode, info: { required: boolean }) => ReactNode)",
    },
    description:
      "Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config",
    default: "true",
  },
  scrollToFirstError: {
    control: {
      type: "boolean | Options",
    },
    description: "Auto scroll to first failed field when submit",
    default: "false",
  },
  size: {
    control: {
      type: "small | middle | large",
    },
    description: "Set field component size (antd components only)",
    default: "-",
  },
  validateMessages: {
    control: {
      type: "ValidateMessages",
    },
    description: "Validation prompt template, description see below",
    default: "-",
  },
  validateTrigger: {
    control: {
      type: "string | string[]",
    },
    description: "Config field validate trigger",
    default: "onChange",
  },
  variant: {
    control: {
      type: "outlined | borderless | filled",
    },
    description: "Variant of components inside form",
    default: "outlined",
  },
  wrapperCol: {
    control: {
      type: "object",
    },
    description: "The layout for input controls, same as labelCol",
    default: "-",
  },
  onFieldsChange: {
    control: {
      type: "function(changedFields, allFields)",
    },
    description: "Trigger when field updated",
    default: "-",
  },
  onFinish: {
    control: {
      type: "function(values)",
    },
    description:
      "Trigger after submitting the form and verifying data successfully",
    default: "-",
  },
  onFinishFailed: {
    control: {
      type: "function({ values, errorFields, outOfDate })",
    },
    description: "Trigger after submitting the form and verifying data failed",
    default: "-",
  },
  onValuesChange: {
    control: {
      type: "function(changedValues, allValues)",
    },
    description: "Trigger when value updated",
    default: "-",
  },
};
