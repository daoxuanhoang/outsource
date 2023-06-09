import { FunctionComponent } from "react";

export interface IRoute {
    path: string,
    exact: any,
    main: () => FunctionComponent
}