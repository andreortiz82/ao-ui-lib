
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Chip as MuiChip } from '@mui/joy';

function Chip(props) {
  return <ThemeWrapper><MuiChip {...props}>{props.children}</MuiChip></ThemeWrapper>
}

export default Chip;
