
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Tabs as MuiTabs } from '@mui/joy';

function Tabs(props) {
  return <ThemeWrapper><MuiTabs {...props}>{props.children}</MuiTabs></ThemeWrapper>
}

export default Tabs;
