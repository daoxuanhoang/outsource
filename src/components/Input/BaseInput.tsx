/** @format */

import { IconButton, InputAdornment, TextField } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import React, { forwardRef, memo } from "react";
import { getDataType } from "utils";
import createStyle from "./styles";
import { IInput, ISXTheme } from "types/component";

const BaseInput = forwardRef<HTMLDivElement, IInput>(function Base({ variant = "standard", inputLabel, sx, icon, type, onChange, ...props }, ref) {
  const styles = createStyle();
  const baseStyle = variant ? styles[variant] : {};
  const stylesOveride = getDataType(sx) === "Array" ? [baseStyle, ...(sx as any)] : ([baseStyle, { ...sx }] as ISXTheme);

  const item = icon ? icon : null;

  const InputProps = {
    [!!item && item?.position === "start" ? "startAdornment" : "endAdornment"]: !!item?.component && (
      <InputAdornment position={!!item && item?.position === "start" ? "start" : "end"}>
        <IconButton sx={{ p: 0 }}>{item?.component}</IconButton>
      </InputAdornment>
    ),
  };

  return (
    <>
      <TextField sx={stylesOveride} variant={variant} InputProps={InputProps} label={inputLabel} type={type} onChange={onChange} {...props} ref={ref} />
    </>
  );
});

export default memo(BaseInput);
