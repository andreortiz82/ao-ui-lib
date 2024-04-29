
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Typography as MuiTypography } from '@mui/joy';

function Typography(props) {
  return <ThemeWrapper><MuiTypography {...props}>{props.children}</MuiTypography></ThemeWrapper>
}

export default Typography;
