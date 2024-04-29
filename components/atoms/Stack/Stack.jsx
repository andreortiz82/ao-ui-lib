
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Stack as MuiStack } from '@mui/joy';

function Stack(props) {
  return <ThemeWrapper><MuiStack {...props}>{props.children}</MuiStack></ThemeWrapper>
}

export default Stack;
