import {
  DatePicker as DatePickerMui,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { IDatePicker } from "types/component";
import createStyles from "./styles";

const DatePicker = React.forwardRef<HTMLInputElement, IDatePicker>(
  function DatePicker({ sx, value, format = "DD/MM/YYYY", ...props }, ref) {
    const styles = createStyles();
    const styleOverrides = sx || {};
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerMui
          sx={{ ...styles.defaultStyles, ...styleOverrides }}
          ref={ref}
          value={value}
          format={format}
          {...props}
        />
      </LocalizationProvider>
    );
  }
);

export default React.memo(DatePicker);
