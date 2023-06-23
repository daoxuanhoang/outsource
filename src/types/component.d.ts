import { Theme, SxProps, } from "@mui/system";
import { ButtonProps, ModalTypeMap, TypographyProps } from '@mui/material';
import { SVGProps } from "react";
import { DataGridProps } from "@mui/x-data-grid";
import { DatePickerProps } from "@mui/lab";

export type TDate = Date;
export type ISXTheme = SxProps<Theme>;
export type IModalInit = ModalTypeMap['props'];
export type IDatePickerInit = DatePickerProps<TDate>;
export type ITextInit = TypographyProps;


export type IModal = IModalInit & {
  direction?: 'right' | 'left' | 'up' | 'down';
  onClose?: () => void;
};

export type IDatePicker = IDatePickerInit & {
  value: TDate,
  onChange: (date: Date | null) => void;
}

export interface IText extends ITextInit {
  children?: string;
  color?: any;
}

export type IButtonVariantStyle =
  | 'cancel'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | 'default'
  | 'none';
export type IButtonIconType =
  | 'confirm'
  | 'save_and_new'
  | 'send'
  | 'cancel'
  | 'continue'
  | 'upload'
  | 'search'
  | 'reset'
  | 'add'
  | 'ok';

export type ISVGIconWrap = React.SVGProps<SVGSVGElement> & {
  children?: JSX.Element | JSX.Element[];
  size?: number;
  wrapColor?: string;
  width?: number;
  height?: number;
};

export type ISVGIcon = SVGProps<SVGPathElement> &
  ISVGIconWrap & {
    color?: string;
  };

export type IButtonIcon = ISVGIcon & {
  variant?: IButtonIconType;
};

export type IButton = ButtonProps & {
  variantStyle?: IButtonVariantStyle;
  title?: string;
  variantTitle?: IText['variant'];
  LabelProps?: IText;
  iconProps?: IButtonIcon;
};

// DataGrid
export type IDataTable = DataGridProps<any> &
  React.RefAttributes<HTMLDivElement> & { containerStyle?: ISXTheme };