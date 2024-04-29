
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Checkbox as MuiCheckbox } from '@mui/joy';

function Checkbox(props) {
  return <ThemeWrapper><MuiCheckbox {...props}>{props.children}</MuiCheckbox></ThemeWrapper>
}

export default Checkbox;
