import fs from "fs";
import path from "path";

const components = [
  "Avatar",
  "Alert",
  "Badge",
  "Button",
  "Chip",
  "Divider",
  "Input",
  "ButtonGroup",
  "Checkbox",
  "Radio",
  "Select",
  "Switch",
  "Textarea",
  "ToggleButtonGroup",
  "List",
  "ListItem",
  "Table",
  "Tooltip",
  "Typography",
  "CircularProgress",
  "LinearProgress",
  "Modal",
  "Skeleton",
  "Snackbar",
  "Card",
  "Accordion",
  "Sheet",
  "Breadcrumbs",
  "Drawer",
  "Link",
  "Menu",
  "Stepper",
  "Tabs",
  "Box",
  "Grid",
  "Stack",
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
  import { ${componentName} as Mui${componentName} } from '@mui/joy';

function ${componentName}(props) {
  return <ThemeWrapper><Mui${componentName} {...props}>{props.children}</Mui${componentName}></ThemeWrapper>
}

export default ${componentName};
`;
};

// Function to generate the .stories.tsx file content
const generateStoryFileContent = (componentName) => {
  return `import React from 'react';
import ${componentName} from './${componentName}';

export default {
    title: "Atoms/${componentName}",
    component: ${componentName},
    tags: ["autodocs"],
} 
export const Example = {
    args: {
      children: "${componentName}",
    },
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
