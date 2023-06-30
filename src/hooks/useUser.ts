import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { KEY_CONTEXT } from "../utils"
import { ILogin, INofifyState } from "../types"
import { loginActionRequest, loginSuccess, logoutRequest } from "../store/user"
import { useKey } from "./useKey"
import { error } from "store/notify"

export function useUser() {
    const dispatch = useDispatch()
    const { removeKey, setKeyUser, getKey } = useKey()
    const auth = JSON.parse(getKey('user') as any)


    const onLogin = useCallback((params: ILogin) => {
        try {
            const { email, password } = params
            if (email && password) {
                dispatch(loginActionRequest({ email, password }, (result) => {
                    if (result.success) {
                        dispatch(loginSuccess(result.data));
                        setKeyUser(result.data)
                        localStorage.setItem(KEY_CONTEXT.ISACTIVE, JSON.stringify(result.success))
                        localStorage.setItem(KEY_CONTEXT.AUTH_TOKEN, result.accessToken)
                        window.location.replace("/");
                    }
                }))
            } else {
                dispatch(error({ message: 'Tài khoản hoặc mật khẩu không hợp lệ!' } as INofifyState))
            }

        } catch (e) {
            console.log(e);
            dispatch(error({ message: e } as INofifyState))
        }
    }, [])

    const onLogout = useCallback(() => {
        try {
            removeKey(KEY_CONTEXT.USER);
            removeKey(KEY_CONTEXT.ISACTIVE);
            removeKey(KEY_CONTEXT.AUTH_TOKEN);
            dispatch(logoutRequest())
        } catch (e) {
            console.log(e);
            dispatch(error({ message: e } as INofifyState))
        }
    }, []);

    const checkAuth = () => {
        if (JSON.parse(localStorage.getItem('user') as any)) return true;
        return false;
    }

    return { onLogin, checkAuth, onLogout, auth }
}