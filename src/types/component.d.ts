import { Theme, SxProps } from "@mui/system";
import { ModalTypeMap } from '@mui/material';


export type ISXTheme = SxProps<Theme>;
export type IModalInit = ModalTypeMap['props'];


export type IModal = IModalInit & {
    direction?: 'right' | 'left' | 'up' | 'down';
    onClose?: () => void;
};