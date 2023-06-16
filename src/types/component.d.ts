import { Theme, SxProps } from "@mui/system";
import { ModalTypeMap, TypographyProps } from '@mui/material';


export type ISXTheme = SxProps<Theme>;
export type IModalInit = ModalTypeMap['props'];
export type ITextInit = TypographyProps;


export type IModal = IModalInit & {
    direction?: 'right' | 'left' | 'up' | 'down';
    onClose?: () => void;
};

export interface IText extends ITextInit {
    children?: string;
    color?: any;
  }