import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Avatar as MuiAvatar } from "@mui/joy";

function Avatar(props) {
  return (
    <ThemeWrapper>
      <MuiAvatar {...props}>{props.children}</MuiAvatar>
    </ThemeWrapper>
  );
}

export default Avatar;
