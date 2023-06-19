import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { KEY_CONTEXT } from "../utils"
import { ILogin, INofifyState } from "../types"
import { loginActionRequest, loginSuccess, logoutRequest } from "../store/user"
import { useKey } from "./useKey"
import { error } from "store/notify"

export function useUser() {
    const dispatch = useDispatch()
    const { removeKey, setKeyUser } = useKey()

    const onLogin = useCallback((params: ILogin) => {
        try {
            const { email, password } = params
            if (email === 'daoxuanhoang.2016@gmail.com' && password === '123456') {
                localStorage.setItem(KEY_CONTEXT.USER, "true")
                window.location.replace("/");
                // dispatch(loginActionRequest({ email, password }, (result) => {
                //     console.log(result);

                //     // if (result.status) {
                //     dispatch(loginSuccess(result.data));
                //     localStorage.setItem(KEY_CONTEXT.USER, "true")
                //     window.location.replace("/");
                //     // }
                // }))
            }
            else {
                dispatch(error({ message: 'Sai tai khoan MK' } as INofifyState))
            }

        } catch (e) {
            console.log(e);
            dispatch(error({ message: e } as INofifyState))
        }
    }, [])

    const onLogout = useCallback(() => {
        try {
            removeKey(KEY_CONTEXT.USER);
            dispatch(logoutRequest() as any)
        } catch (e) {
            console.log(e);
        }
    }, []);

    const checkAuth = () => {
        if (localStorage.getItem('user') !== null) return true;
        return false;
    }

    return { onLogin, checkAuth, onLogout }
}