
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Select as MuiSelect } from '@mui/joy';

function Select(props) {
  return <ThemeWrapper><MuiSelect {...props}>{props.children}</MuiSelect></ThemeWrapper>
}

export default Select;
