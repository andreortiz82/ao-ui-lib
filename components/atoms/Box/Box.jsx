
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Box as MuiBox } from '@mui/joy';

function Box(props) {
  return <ThemeWrapper><MuiBox {...props}>{props.children}</MuiBox></ThemeWrapper>
}

export default Box;
