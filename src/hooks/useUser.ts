import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { KEY_CONTEXT } from "../utils"
import { ILogin } from "../types"

export function useUser() {
    const dispatch = useDispatch()

    const onLogin = useCallback((params: ILogin) => {
        try {
            const { email, password } = params
            if (email === 'daoxuanhoang.2016@gmail.com' && password === '123456') {
                localStorage.setItem(KEY_CONTEXT.USER, "true")
                window.location.replace('/')
            }
        } catch (error) {
            console.log(error);

        }
    }, [])

    const checkAuth = () => {
        if (localStorage.getItem('user') !== null) return true;
        return false;
    }

    return { onLogin, checkAuth }
}