
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { ButtonGroup as MuiButtonGroup } from '@mui/joy';

function ButtonGroup(props) {
  return <ThemeWrapper><MuiButtonGroup {...props}>{props.children}</MuiButtonGroup></ThemeWrapper>
}

export default ButtonGroup;
