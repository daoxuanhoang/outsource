import { DesktopDatePicker as DatePickerMui, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { IDatePicker } from "types/component";
import createStyles from "./styles";
import { TextField } from "@mui/material";

const DatePicker = React.forwardRef<HTMLInputElement, IDatePicker>(function DatePicker({ sx, value, format = "DD/MM/YYYY", children, ...props }, ref) {
  const styles = createStyles();
  const styleOverrides = sx || {};
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMui
        ref={ref}
        sx={{ ...styles.defaultStyles, ...styleOverrides }}
        value={value}
        format={format}
        {...props}
      />
      {children}
    </LocalizationProvider>
  );
});

export default React.memo(DatePicker);
