

export interface IParamsRequest {
    action: string;
    method: string;
    data: any;
    type: string;
    tid: number;
}

export interface IRSResult {
    result: any,
    total: number,
    limit: number,
    page: number,
    pages: number,
}

export interface IResponse {
    errors: any,
    success: boolean;
    message: string;
    data: IRSResult;
}

export interface IUser {
    name: string,
    avatar: string,
    id: string,
    phone: string,
    email: string,
    gender: string,
    status: string
}