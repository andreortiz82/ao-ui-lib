
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { LinearProgress as MuiLinearProgress } from '@mui/joy';

function LinearProgress(props) {
  return <ThemeWrapper><MuiLinearProgress {...props}>{props.children}</MuiLinearProgress></ThemeWrapper>
}

export default LinearProgress;
