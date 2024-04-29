
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { List as MuiList } from '@mui/joy';

function List(props) {
  return <ThemeWrapper><MuiList {...props}>{props.children}</MuiList></ThemeWrapper>
}

export default List;
