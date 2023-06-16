import { IUser } from "../types/user";
import { KEY_CONTEXT } from "../utils";


export function useKey() {

    const setKeyUser = (user: IUser) => {
        return localStorage.setItem(KEY_CONTEXT.USER, JSON.stringify(user));
    };

    const getKey = (key: string) => {
        return localStorage.getItem(key);
    };

    const removeKey = (key: string) => {
        return localStorage.removeItem(key);
    };

    return {
        setKeyUser,
        getKey,
        removeKey,

    }
}
