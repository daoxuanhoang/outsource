import { Theme, SxProps, } from "@mui/system";
import { ButtonProps, ModalTypeMap, TextFieldProps, TypographyProps } from '@mui/material';
import { SVGProps } from "react";
import { DataGridProps } from "@mui/x-data-grid";
import { DatePickerProps } from "@mui/lab";

export type TDate = Date;
export type ISXTheme = SxProps<Theme>;
export type IModalInit = ModalTypeMap['props'];
export type IDatePickerInit = DatePickerProps<TDate>;
export type ITextInit = TypographyProps;
export type TPopupKey = 'email';
export type IInputVariant = 'base' | 'lookup-field' | 'popup-textfield' | 'number';



export type IInput = TextFieldProps & {
  popupKey?: TPopupKey;
  labelstyles?: SxProps;
  useI18n?: boolean;
  onChange?: (v: any) => void;
  onSelected?: (v: any) => void;
  onClick?: () => void;
  type?: string;
  icon?: { component: JSX.Element; position: 'start' | 'end' };
  inputVariant?: IInputVariant;
  LabelProps?: IText;
  dataSelectType?: any;
  inputLabel?: string | number | true | JSX.Element | React.ReactFragment;
};

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

export interface IDetailXML {
  open: boolean,
  onClose?: () => void,
  type: string
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
  React.RefAttributes<HTMLDivElement> & { containerStyle?: ISXTheme, page: number, perPage: number };