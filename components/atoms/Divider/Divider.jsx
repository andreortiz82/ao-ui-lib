
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Divider as MuiDivider } from '@mui/joy';

function Divider(props) {
  return <ThemeWrapper><MuiDivider {...props}>{props.children}</MuiDivider></ThemeWrapper>
}

export default Divider;
