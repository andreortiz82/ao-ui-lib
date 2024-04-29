
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Drawer as MuiDrawer } from '@mui/joy';

function Drawer(props) {
  return <ThemeWrapper><MuiDrawer {...props}>{props.children}</MuiDrawer></ThemeWrapper>
}

export default Drawer;
