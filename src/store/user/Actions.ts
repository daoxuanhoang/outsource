import { IParamsRequest } from "../../types/user";


export const UserActions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
};

export const loginActionRequest = (formData: any, callback?: (t: any) => void) => ({
    formData,
    callback,
    type: UserActions.LOGIN_REQUEST,
});