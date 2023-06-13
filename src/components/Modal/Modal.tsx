/** @format */

import React, { FC, memo } from 'react';
import { Modal as ModalMUI } from '@mui/material';
import { IModal, ISXTheme } from '../../types/component';

const Modal: FC<IModal> = ({ open, onClose, children, ...props }: any) => {
  return (
    <ModalMUI sx={[props?.sx || {}] as ISXTheme} open={open} {...props}>
      {children}
    </ModalMUI>
  );
};

export default memo(Modal);
