
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Textarea as MuiTextarea } from '@mui/joy';

function Textarea(props) {
  return <ThemeWrapper><MuiTextarea {...props}>{props.children}</MuiTextarea></ThemeWrapper>
}

export default Textarea;
