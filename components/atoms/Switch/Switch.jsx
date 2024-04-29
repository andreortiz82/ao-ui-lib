
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Switch as MuiSwitch } from '@mui/joy';

function Switch(props) {
  return <ThemeWrapper><MuiSwitch {...props}>{props.children}</MuiSwitch></ThemeWrapper>
}

export default Switch;
