import { FunctionComponent } from "react";

export interface IRoute {
    path: string,
    exact: boolean,
    main: FunctionComponent
}
