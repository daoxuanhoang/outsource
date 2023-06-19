/** @format */

import React, { FC, memo } from "react";
import { Typography } from "@mui/material";
import { ISXTheme, IText } from "../../types/component";
import { areEqual } from "../../utils";

const Text: FC<IText> = ({ children, ...props }) => {
  if (!children) return null;
  return (
    <Typography
      sx={[props?.onClick ? { cursor: "pointer" } : {}, props?.sx] as ISXTheme}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default memo(Text);
