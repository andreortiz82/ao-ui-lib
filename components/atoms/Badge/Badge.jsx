
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Badge as MuiBadge } from '@mui/joy';

function Badge(props) {
  return <ThemeWrapper><MuiBadge {...props}>{props.children}</MuiBadge></ThemeWrapper>
}

export default Badge;
