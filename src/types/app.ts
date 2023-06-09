import { FunctionComponent } from "react";
import { IUser } from "./user";
import { EnumNotificationType, EnumValueType } from "../utils";

export interface IRoute {
    path: string,
    exact: boolean,
    main: FunctionComponent
}

export interface IDataStore {
    loading?: boolean;
    data?: any;
    error?: string | null;
}

export interface IAppState {
    loading: boolean;
    error: string | null;
    isAuth: boolean;
    user?: IUser;
    authToken?: string;
}

export interface INofifyState {
    message: string;
    type: keyof typeof EnumNotificationType;
    options: {
      position: {
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
      };
      autoHideDuration: number;
    };
  }

  export type IValueType = keyof typeof EnumValueType;
