
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Grid as MuiGrid } from '@mui/joy';

function Grid(props) {
  return <ThemeWrapper><MuiGrid {...props}>{props.children}</MuiGrid></ThemeWrapper>
}

export default Grid;
