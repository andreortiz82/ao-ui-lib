
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { ToggleButtonGroup as MuiToggleButtonGroup } from '@mui/joy';

function ToggleButtonGroup(props) {
  return <ThemeWrapper><MuiToggleButtonGroup {...props}>{props.children}</MuiToggleButtonGroup></ThemeWrapper>
}

export default ToggleButtonGroup;
