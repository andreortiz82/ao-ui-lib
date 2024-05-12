// Upload Props

export const api = {
  accept: {
    control: {
      type: "string",
    },
    description: "File types that can be accepted. See input accept Attribute",
    default: "-",
  },
  action: {
    control: {
      type: "string | (file) => Promise<string>",
    },
    description: "Uploading URL",
    default: "-",
  },
  beforeUpload: {
    control: {
      type: "(file, fileList) => boolean | Promise<File> | Upload.LIST_IGNORE",
    },
    description:
      "Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned. When returned value is Upload.LIST_IGNORE, the list of files that have been uploaded will ignore it. Warning\uff1athis function is not supported in IE9",
    default: "-",
  },
  customRequest: {
    control: {
      type: "function",
    },
    description:
      "Override for the default xhr behavior allowing for additional customization and the ability to implement your own XMLHttpRequest",
    default: "-",
  },
  data: {
    control: {
      type: "object | (file) => object | Promise<object>",
    },
    description:
      "Uploading extra params or function which can return uploading extra params",
    default: "-",
  },
  defaultFileList: {
    control: {
      type: "object[]",
    },
    description: "Default list of files that have been uploaded",
    default: "-",
  },
  directory: {
    control: {
      type: "boolean",
    },
    description: "Support upload whole directory (caniuse)",
    default: "false",
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "Disable upload button",
    default: "false",
  },
  fileList: {
    control: {
      type: "UploadFile[]",
    },
    description:
      "List of files that have been uploaded (controlled). Here is a common issue #2423 when using it",
    default: "-",
  },
  headers: {
    control: {
      type: "object",
    },
    description: "Set request headers, valid above IE10",
    default: "-",
  },
  iconRender: {
    control: {
      type: "(file: UploadFile, listType?: UploadListType) => ReactNode",
    },
    description: "Custom show icon",
    default: "-",
  },
  isImageUrl: {
    control: {
      type: "(file: UploadFile) => boolean",
    },
    description: "Customize if render <img /> in thumbnail",
    default: "(inside implementation)",
  },
  itemRender: {
    control: {
      type: "(originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }) => React.ReactNode",
    },
    description: "Custom item of uploadList",
    default: "-",
  },
  listType: {
    control: {
      type: "string",
    },
    description:
      "Built-in stylesheets, support for four types: text, picture, picture-card or picture-circle",
    default: "text",
  },
  maxCount: {
    control: {
      type: "number",
    },
    description:
      "Limit the number of uploaded files. Will replace current one when maxCount is 1",
    default: "-",
  },
  method: {
    control: {
      type: "string",
    },
    description: "The http method of upload request",
    default: "post",
  },
  multiple: {
    control: {
      type: "boolean",
    },
    description:
      "Whether to support selected multiple files. IE10+ supported. You can select multiple files with CTRL holding down while multiple is set to be true",
    default: "false",
  },
  name: {
    control: {
      type: "string",
    },
    description: "The name of uploading file",
    default: "file",
  },
  openFileDialogOnClick: {
    control: {
      type: "boolean",
    },
    description: "Click open file dialog",
    default: "true",
  },
  previewFile: {
    control: {
      type: "(file: File | Blob) => Promise<dataURL: string>",
    },
    description: "Customize preview file logic",
    default: "-",
  },
  progress: {
    control: {
      type: 'ProgressProps (support type="line" only)',
    },
    description: "Custom progress bar",
    default: "{ strokeWidth: 2, showInfo: false }",
  },
  showUploadList: {
    control: {
      type: "boolean | { showPreviewIcon?: boolean, showDownloadIcon?: boolean, showRemoveIcon?: boolean, previewIcon?: ReactNode | (file: UploadFile) => ReactNode, removeIcon?: ReactNode | (file: UploadFile) => ReactNode, downloadIcon?: ReactNode | (file: UploadFile) => ReactNode }",
    },
    description:
      "Whether to show default upload list, could be an object to specify showPreviewIcon, showRemoveIcon, showDownloadIcon, removeIcon and downloadIcon individually",
    default: "true",
  },
  withCredentials: {
    control: {
      type: "boolean",
    },
    description: "The ajax upload with cookie sent",
    default: "false",
  },
  onChange: {
    control: {
      type: "function",
    },
    description:
      "A callback function, can be executed when uploading state is changing. It will trigger by every uploading phase. see onChange",
    default: "-",
  },
  onDrop: {
    control: {
      type: "(event: React.DragEvent) => void",
    },
    description:
      "A callback function executed when files are dragged and dropped into the upload area",
    default: "-",
  },
  onDownload: {
    control: {
      type: "function(file): void",
    },
    description:
      "Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB",
    default: "(Jump to new TAB)",
  },
  onPreview: {
    control: {
      type: "function(file)",
    },
    description:
      "A callback function, will be executed when the file link or preview icon is clicked",
    default: "-",
  },
  onRemove: {
    control: {
      type: "function(file): boolean | Promise",
    },
    description:
      "A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject",
    default: "-",
  },
};
