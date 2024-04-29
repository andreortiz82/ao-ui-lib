
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Skeleton as MuiSkeleton } from '@mui/joy';

function Skeleton(props) {
  return <ThemeWrapper><MuiSkeleton {...props}>{props.children}</MuiSkeleton></ThemeWrapper>
}

export default Skeleton;
