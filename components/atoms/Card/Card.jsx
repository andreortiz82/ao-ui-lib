
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Card as MuiCard } from '@mui/joy';

function Card(props) {
  return <ThemeWrapper><MuiCard {...props}>{props.children}</MuiCard></ThemeWrapper>
}

export default Card;
