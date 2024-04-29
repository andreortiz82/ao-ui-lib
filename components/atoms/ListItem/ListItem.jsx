
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { ListItem as MuiListItem } from '@mui/joy';

function ListItem(props) {
  return <ThemeWrapper><MuiListItem {...props}>{props.children}</MuiListItem></ThemeWrapper>
}

export default ListItem;
