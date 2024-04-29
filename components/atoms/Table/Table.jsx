
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Table as MuiTable } from '@mui/joy';

function Table(props) {
  return <ThemeWrapper><MuiTable {...props}>{props.children}</MuiTable></ThemeWrapper>
}

export default Table;
