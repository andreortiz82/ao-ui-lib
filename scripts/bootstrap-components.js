// Desiged for a collection of components to be created in a directory structure

import fs from "fs";
import path from "path";

const components = [
  "Button",
  "FloatButton",
  "Typography",
  "Divider",
  "Flex",
  "Grid",
  "Layout",
  "Space",
  "Anchor",
  "Breadcrumb",
  "Dropdown",
  "Menu",
  "Pagination",
  "Steps",
  "AutoComplete",
  "Cascader",
  "Checkbox",
  "ColorPicker",
  "DatePicker",
  "Form",
  "Input",
  "InputNumber",
  "Mentions",
  "Radio",
  "Rate",
  "Select",
  "Slider",
  "Switch",
  "TimePicker",
  "Transfer",
  "TreeSelect",
  "Upload",
  "Avatar",
  "Badge",
  "Calendar",
  "Card",
  "Carousel",
  "Collapse",
  "Descriptions",
  "Empty",
  "Image",
  "List",
  "Popover",
  "Statistic",
  "Segmented",
  "Table",
  "Tabs",
  "Tag",
  "Timeline",
  "Tooltip",
  "Tour",
  "Tree",
  "Alert",
  "Drawer",
  "Message",
  "Modal",
  "Notification",
  "Popconfirm",
  "Progress",
  "Result",
  "Skeleton",
  "Spin",
  "Watermark",
  "Affix",
  "App",
];

// Base directory where the component directories will be created
const baseDir = "./components";
const componentsDir = `${baseDir}/atoms`;
const storiesDir = componentsDir;

// Ensure the base directory exists
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Ensure the output directories exist
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}
if (!fs.existsSync(storiesDir)) {
  fs.mkdirSync(storiesDir, { recursive: true });
}

// Function to generate the .tsx file content
const generateComponentFileContent = (componentName) => {
  return `
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { ${componentName} as Ant${componentName} } from 'antd';

export const ${componentName} = (props) => {
  return <ThemeWrapper><Ant${componentName} {...props}>{props.children}</Ant${componentName}></ThemeWrapper>
}
`;
};

// Function to generate the .stories.tsx file content
const generateStoryFileContent = (componentName) => {
  return `import React from 'react';
import {${componentName}} from './${componentName}';
import { api } from "./api.js";

export default {
    title: "Atoms/${componentName}",
    component: ${componentName},
    tags: ["autodocs"],
    argTypes: api,
} 
export const Example = {
    render: (args) => (
        <${componentName} {...args}>${componentName}</${componentName}>
    ),
  };
`;
};

// Generate a directory and files for each component
components.forEach((component) => {
  const componentDir = path.join(componentsDir, component);

  // Ensure the component-specific directory exists
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  const tsxFilePath = path.join(componentDir, `${component}.jsx`);
  const storyFilePath = path.join(componentDir, `${component}.stories.jsx`);
  const tsxFileContent = generateComponentFileContent(component);
  const storyFileContent = generateStoryFileContent(component);

  fs.writeFile(tsxFilePath, tsxFileContent, (err) => {
    if (err) {
      console.error(`Failed to create ${component}.jsx:`, err);
    } else {
      console.log(`${component}.jsx created successfully in ${componentDir}.`);
    }
  });

  fs.writeFile(storyFilePath, storyFileContent, (err) => {
    if (err) {
      console.error(`Failed to create ${component}.stories.jsx:`, err);
    } else {
      console.log(
        `${component}.stories.jsx created successfully in ${componentDir}.`
      );
    }
  });
});
