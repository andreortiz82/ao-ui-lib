import React from "react";
import style from "./input.module.css";
import clsx from "clsx";
import { Input as MuiInput } from "@mui/base/Input";

function Input(props) {
  return (
    <MuiInput
      multiline={props.multiline}
      aria-label={props.ariaLabel}
      placeholder={props.placeholder}
      className={clsx(style.input)}
      {...props}
    />
  );
}

export default Input;
