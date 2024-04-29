
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Input as MuiInput } from '@mui/joy';

function Input(props) {
  return <ThemeWrapper><MuiInput {...props}>{props.children}</MuiInput></ThemeWrapper>
}

export default Input;
