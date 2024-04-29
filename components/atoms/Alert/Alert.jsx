import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Alert as MuiAlert } from "@mui/joy";

function Alert(props) {
  return (
    <ThemeWrapper>
      <MuiAlert {...props}>{props.children}</MuiAlert>
    </ThemeWrapper>
  );
}

export default Alert;
