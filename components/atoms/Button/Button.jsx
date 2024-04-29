
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Button as MuiButton } from '@mui/joy';

function Button(props) {
  return <ThemeWrapper><MuiButton {...props}>{props.children}</MuiButton></ThemeWrapper>
}

export default Button;
