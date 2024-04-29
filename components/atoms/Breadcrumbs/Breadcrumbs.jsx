import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/joy";

function Breadcrumbs(props) {
  return (
    <ThemeWrapper>
      <MuiBreadcrumbs {...props}>{props.children}</MuiBreadcrumbs>
    </ThemeWrapper>
  );
}

export default Breadcrumbs;
