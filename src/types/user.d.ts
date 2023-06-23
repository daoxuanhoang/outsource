

export interface IParamsRequest {
    action: string;
    method: string;
    data: any;
    type: string;
    tid: number;
}

export interface IRSResult {  
    data: any,
    total: number,
    page: number,
    pageSize: number,
}

export interface IResponse {
    success: boolean;
    message: string;
    data: IRSResult;
}

export interface IUser {
    name: string,
    data: any
}