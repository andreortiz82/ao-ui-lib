
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Snackbar as MuiSnackbar } from '@mui/joy';

function Snackbar(props) {
  return <ThemeWrapper><MuiSnackbar {...props}>{props.children}</MuiSnackbar></ThemeWrapper>
}

export default Snackbar;
