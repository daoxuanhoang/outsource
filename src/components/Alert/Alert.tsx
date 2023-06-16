/** @format */

import { Snackbar, Alert as MuiAlert, AlertProps } from "@mui/material";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useNotify } from "../../hooks";
import { NotifySelectors } from "../../store/notify";
import Text from "../Text/Text";

const Alert = () => {
  const { hide } = useNotify();

  const message = useSelector(NotifySelectors.getMessage);
  const type = useSelector(NotifySelectors.getType);
  const position = useSelector(NotifySelectors.getPosition);
  const duration = useSelector(NotifySelectors.getDuration);

  const handleClose = () => {
    hide();
  };

  const AlertCus = React.forwardRef<HTMLDivElement, AlertProps>(
    function AlertCus(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    }
  );

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={duration}
      anchorOrigin={position}
      onClose={handleClose}
    >
      <AlertCus onClose={handleClose} severity={type}>
        <Text>{message}</Text>
      </AlertCus>
    </Snackbar>
  );
};

export default memo(Alert);
