import { FunctionComponent } from "react";
import { IUser } from "./user";

export interface IRoute {
    path: string,
    exact: boolean,
    main: FunctionComponent
}

export interface IDataStore {
    isLoading?: boolean;
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
