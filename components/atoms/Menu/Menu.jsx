
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Menu as MuiMenu } from '@mui/joy';

function Menu(props) {
  return <ThemeWrapper><MuiMenu {...props}>{props.children}</MuiMenu></ThemeWrapper>
}

export default Menu;
