import React from "react";
import style from "./button.module.css";
import clsx from "clsx";
import { Button as MuiButton } from "@mui/base/Button";

function Button(props) {
  return (
    <MuiButton {...props} className={clsx(style.button)}>
      {props.label}
    </MuiButton>
  );
}

export default Button;
