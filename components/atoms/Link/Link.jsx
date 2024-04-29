
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Link as MuiLink } from '@mui/joy';

function Link(props) {
  return <ThemeWrapper><MuiLink {...props}>{props.children}</MuiLink></ThemeWrapper>
}

export default Link;
