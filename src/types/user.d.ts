

export interface IParamsRequest {
    action: string;
    method: string;
    data: any;
    type: string;
    tid: number;
}

export interface IRSResult {
    success: boolean;
    message: string;
    data: any;
}

export interface IResponse {
    action: string;
    method: string;
    result: IRSResult;
}

export interface IUser {
    name: string
}