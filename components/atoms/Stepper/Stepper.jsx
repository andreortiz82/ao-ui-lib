
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Stepper as MuiStepper } from '@mui/joy';

function Stepper(props) {
  return <ThemeWrapper><MuiStepper {...props}>{props.children}</MuiStepper></ThemeWrapper>
}

export default Stepper;
