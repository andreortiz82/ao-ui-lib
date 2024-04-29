
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Tooltip as MuiTooltip } from '@mui/joy';

function Tooltip(props) {
  return <ThemeWrapper><MuiTooltip {...props}>{props.children}</MuiTooltip></ThemeWrapper>
}

export default Tooltip;
