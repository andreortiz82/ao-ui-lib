
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { CircularProgress as MuiCircularProgress } from '@mui/joy';

function CircularProgress(props) {
  return <ThemeWrapper><MuiCircularProgress {...props}>{props.children}</MuiCircularProgress></ThemeWrapper>
}

export default CircularProgress;
