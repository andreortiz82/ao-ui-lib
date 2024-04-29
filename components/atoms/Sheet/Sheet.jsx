
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Sheet as MuiSheet } from '@mui/joy';

function Sheet(props) {
  return <ThemeWrapper><MuiSheet {...props}>{props.children}</MuiSheet></ThemeWrapper>
}

export default Sheet;
