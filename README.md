# AO UI Library

This is not a UI library. This project exports theme components for [Ant Design](https://ant.design/components/overview/) and [Material JoyUI](https://mui.com/joy-ui/getting-started/).

Using the Ant Design components:

```jsx
import { AntThemeWrapper } from "ao-ui-lib";
import { Button, Space } from "antd";

<AntThemeWrapper>
  <Space>
    <Button>Button</Button>
    <Button type="primary">Button</Button>
  </Space>
</AntThemeWrapper>;
```

Using the JoyUI components:

```jsx
import { JoyThemeWrapper } from "ao-ui-lib";
import { Button, Box } from "@mui/joy";

<JoyThemeWrapper>
  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
    <Button variant="solid">Solid</Button>
    <Button variant="soft">Soft</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="plain">Plain</Button>
  </Box>
</JoyThemeWrapper>;
```

Run the project locally via Storybook:
`npm install`
`npm run storybook`
