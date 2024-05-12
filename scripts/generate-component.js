// Desiged for a single component to be created in a directory structure

import fs from "fs";
import path from "path";

// Retrieve the component name from the command line arguments
const [, , componentName] = process.argv;

if (!componentName) {
  console.error("Please provide a component name.");
  process.exit(1);
}

// Base directory where the component directory will be created
const baseDir = "./DEMO/atoms";

// Ensure the base directory exists
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Directory for the specific component
const componentDir = path.join(baseDir, componentName);
const storiesDir = componentDir;

// Ensure the component-specific directory exists
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
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

// File paths
const tsxFilePath = path.join(componentDir, `${componentName}.jsx`);
const storyFilePath = path.join(storiesDir, `${componentName}.stories.jsx`);

// Write the component file
fs.writeFileSync(tsxFilePath, generateComponentFileContent(componentName)); // Pass componentName here
console.log(`${componentName}.jsx created successfully in ${componentDir}.`);

// Write the story file
fs.writeFileSync(storyFilePath, generateStoryFileContent(componentName)); // Pass componentName here
console.log(
  `${componentName}.stories.jsx created successfully in ${componentDir}.`
);
