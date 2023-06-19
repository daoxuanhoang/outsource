import { createSlice } from "@reduxjs/toolkit";


const useSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: null,
        isAuth: false,
        user: null
    },
    reducers: {
        actionRequest: state => {
            return {
                ...state,
                error: null,
                loading: false
            }
        },
        loginSuccess: (state, { payload }: any) => {
            return {
                ...state,
                user: payload,
                error: null,
                loading: false
            }
        },
        loginFailure: (state, { payload }: any) => {
            return {
                ...state,
                error: payload,
                loading: false
            }
        }
    }
})

export const { actionRequest, loginSuccess, loginFailure } = useSlice.actions

export default useSlice.reducer