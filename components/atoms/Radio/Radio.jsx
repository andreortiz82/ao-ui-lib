
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Radio as MuiRadio } from '@mui/joy';

function Radio(props) {
  return <ThemeWrapper><MuiRadio {...props}>{props.children}</MuiRadio></ThemeWrapper>
}

export default Radio;
