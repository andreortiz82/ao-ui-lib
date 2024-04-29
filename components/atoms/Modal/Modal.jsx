
  import React from "react";
import ThemeWrapper from "../../theme/ThemeWrapper";
  import { Modal as MuiModal } from '@mui/joy';

function Modal(props) {
  return <ThemeWrapper><MuiModal {...props}>{props.children}</MuiModal></ThemeWrapper>
}

export default Modal;
